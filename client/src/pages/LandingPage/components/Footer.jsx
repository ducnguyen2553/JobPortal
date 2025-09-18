import { Facebook, Twitter, Linkedin, Youtube, Briefcase } from "lucide-react";

const Footer = ({ t }) => {
    const aboutLinks = [
        t("footer.about.intro"),
        t("footer.about.contact"),
        t("footer.about.careers"),
        t("footer.about.privacy"),
    ];

    const serviceLinks = [
        t("footer.services.cv"),
        t("footer.services.itJobs"),
        t("footer.services.managementJobs"),
        t("footer.services.partTime"),
    ];

    const exploreLinks = [
        t("footer.explore.app"),
        t("footer.explore.calculator"),
        t("footer.explore.mbti"),
        t("footer.explore.cvReview"),
    ];

    return (
        <>
            <footer className="bg-gray-50 border-t mt-10">
                <div className="container mx-auto px-6 py-12 grid md:grid-cols-5 gap-8">
                    {/* Logo + Contact */}
                    <div className="md:col-span-2">
                        {/* <h2 className="text-2xl font-bold text-gray-800">{t("footer.company")}</h2> */}
                        <div className="flex items-center ">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center ">
                                <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 ml-2">JobPortal</h3>
                        </div>
                        <p className="text-gray-600 mt-2">{t("footer.slogan")}</p>
                        <div className="mt-4 text-sm text-gray-600">
                            <p>{t("footer.hotline")}</p>
                            <p>
                                {t("footer.email")}{" "}
                                <a href="mailto:info@mycompany.com" className="text-blue-600 ml-1">
                                    ducnguyen2553@gmail.com
                                </a>
                            </p>
                        </div>
                        {/* Social */}
                        <div className="flex space-x-4 mt-4">
                            <a href="#"><Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" /></a>
                            <a href="#"><Twitter className="w-5 h-5 text-gray-600 hover:text-blue-600" /></a>
                            <a href="#"><Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" /></a>
                            <a href="#"><Youtube className="w-5 h-5 text-gray-600 hover:text-blue-600" /></a>
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-3">{t("footer.about.title")}</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            {aboutLinks.map((link, index) => (
                                <li key={index}><a href="#" className="text-gray-600 hover:text-gray-900 hover:font-semibold">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-3">{t("footer.services.title")}</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            {serviceLinks.map((link, index) => (
                                <li key={index}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-3">{t("footer.explore.title")}</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            {exploreLinks.map((link, index) => (
                                <li key={index}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center py-4 text-gray-500 text-sm border-t">
                    © {new Date().getFullYear()} MyCompany. {t("footer.copyright")}
                </div>
            </footer>

        </>
    )
}

export default Footer