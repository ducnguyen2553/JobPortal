const Job = require("../models/Job.js");
const Application = require("../models/Application.js");

const getTrend = (current, previous) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return Math.round(((current - previous) / previous) * 100);
};

exports.getEmployerAnalytics = async (req, res) => {
    try {
        if (req.user.role !== "employer") {
            return res.status(403).json({ message: "Access denied" });
        }
        const companyId = req.user._id;

        const now = new Date();
        const last7Days = new Date(now);
        last7Days.setDate(now.getDate() - 7);
        const prev7Days = new Date(now);
        prev7Days.setDate(now.getDate() - 14);

        //count
        const totalActiveJobs = await Job.countDocuments({ company: companyId, isClosed: false });
        const jobs = await Job.find({ company: companyId }).select("_id").lean();
        const jobIds = jobs.map(job => job._id);

        const totalApplications = await Application.countDocuments({ job: { $in: jobIds } });
        const totalHired = await Application.countDocuments({
            job: { $in: jobIds },
            status: "Accepted",
        });

        //trends
        //active job post trend
        const activeJobLast7 = await Job.countDocuments({
            company: companyId,
            createdAt: { $gte: last7Days, $lte: now }
        });

        const activeJobsPrev7 = await Job.countDocuments({
            company: companyId,
            createdAt: { $gte: prev7Days, $lt: last7Days }
        });

        const activeJobTrend = getTrend(activeJobLast7, activeJobsPrev7);

        //application trend
        const applicationLast7 = await Application.countDocuments({
            job: { $in: jobIds },
            createdAt: { $gte: last7Days, $lte: last7Days }
        });

        const applicationPrev7 = await Application.countDocuments({
            job: { $in: jobIds },
            createdAt: { $gte: prev7Days, $lt: last7Days }
        });

        const applicantTrend = getTrend(applicationLast7, applicationPrev7);

        //hired application trend
        const hiredLast7 = await Application.countDocuments({
            job: { $in: jobIds },
            status: "Accepted",
            createdAt: { $gte: last7Days, $lte: now }
        })

        const hiredPrev7 = await Application.countDocuments({
            job: { $in: jobIds },
            status: "Accepted",
            createdAt: { $gte: prev7Days, $lt: last7Days }
        });

        const hiredTrend = getTrend(hiredLast7, hiredPrev7);

        //Data
        const recentJobs = await Job.find({ company: companyId })
            .sort({ createdAt: -1 })
            .limit(5)
            .select("title location type createdAt isClosed");

        const recentApplications = await Application.find({ job: { $in: jobIds } })
            .sort({ createdAt: -1 })
            .limit(5)
            .populate("applicant", "name email avatar")
            .populate("job", "title");

        res.json({
            counts: {
                totalActiveJobs,
                totalApplications,
                totalHired,
                trends: {
                    activeJobs: activeJobTrend,
                    totalApplications: applicantTrend,
                    totalHired: hiredTrend
                }
            },
            data: {
                recentJobs,
                recentApplications
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Failed to fetch analytics", error: error.message });
    }
};