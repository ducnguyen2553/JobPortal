import Analytics from './components/Analytics.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import { useTranslation } from "react-i18next";

const LandingPage = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="min-h-screen ">
                <Header t={t} i18n={i18n} />
                <Hero t={t} />
                <Features t={t} />
                <Analytics t={t} />
                <Footer t={t} />
            </div>
        </>
    )
}

export default LandingPage;