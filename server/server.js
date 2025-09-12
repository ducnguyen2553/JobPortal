require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db.js")

const authRoutes = require("./routes/auth.route.js");
const userRoutes = require("./routes/user.route.js");
const jobRoutes = require("./routes/job.route.js");
const applicationRoutes = require("./routes/application.route.js");
const savedJobRoutes = require("./routes/savedJobs.route.js");
const analyticsRoutes = require("./routes/analytics.route.js");

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

connectDB();


//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/save-jobs", savedJobRoutes);
app.use("/api/analytics", analyticsRoutes);

//Server uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}))

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))