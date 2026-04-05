import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import WhyChooseUs from "../components/WhyChooseUs";
import SessionMode from "../components/SessionMode";
import Wallet from "../components/Wallet";
import WorkTiming from "../components/WorkTiming";
import JoinSteps from "../components/JoinSteps";
import AppShowcase from "../components/AppShowcase";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import DownloadApp from "../components/DownloadApp";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <WhyChooseUs />
      <SessionMode />
      <Wallet />
      <WorkTiming />
      <JoinSteps />
      <AppShowcase />
      <Testimonials />
      <FAQ />
      <DownloadApp />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
