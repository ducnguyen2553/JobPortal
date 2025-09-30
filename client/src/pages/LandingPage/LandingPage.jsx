import Analytics from "./components/Analytics.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen ">
        <Header />
        <Hero />
        <Features />
        <Analytics />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
