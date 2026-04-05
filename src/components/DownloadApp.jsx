import playStore from "../assets/images/playstore.png";
import appStore from "../assets/images/appstore.png";
import triplePhones from "../assets/images/phone2.png";

const DownloadApp = () => {
  return (
    <section className="w-full bg-[#FFF7E2] overflow-hidden">
      <div className="max-w-[1440px] mx-auto min-h-[400px] lg:h-[840px] relative flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-[100px] py-12 lg:py-0 gap-8 lg:gap-0">
        {/* Text Content */}
        <div className="flex flex-col z-10 max-w-full sm:max-w-[555px] text-center lg:text-left">
          <h2 className="text-3xl sm:text-[36px] lg:text-[40px] font-bold leading-tight sm:leading-[48px] text-[#3A643C] mb-6 sm:mb-[32px]">
            Get Started Today – <br />
            Download the App Now!
          </h2>

          <p className="text-base sm:text-[20px] font-medium leading-[131.1%] text-[#666666] mb-8 sm:mb-[48px] max-w-[467px] mx-auto lg:mx-0">
            Simplify consultations, manage patients, and grow your practice—all
            in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[26px] items-center lg:items-start">
            <a href="#" className="transition-transform hover:scale-105">
              <img
                src={playStore}
                alt="Get it on Google Play"
                className="w-[200px] sm:w-[220px] lg:w-[250px] h-auto sm:h-[74px] object-contain"
              />
            </a>
            <a href="#" className="transition-transform hover:scale-105">
              <img
                src={appStore}
                alt="Download on the App Store"
                className="w-[200px] sm:w-[220px] lg:w-[250px] h-auto sm:h-[75px] object-contain"
              />
            </a>
          </div>
        </div>

        {/* Phone Image — absolute on desktop, inline on mobile */}
        <div className="relative lg:absolute lg:right-0 lg:top-[45px] w-full max-w-[340px] sm:max-w-[460px] lg:w-[671px] lg:h-[715px] mx-auto lg:mx-0">
          <img
            src={triplePhones}
            alt="Amrutam App Preview"
            className="w-full h-auto lg:h-full object-contain relative z-10"
          />
          <div className="hidden lg:block absolute top-[68px] right-[-100px] w-[1440px] h-[637px] bg-[#FFEDBF] -z-10 rounded-l-[100px]" />
        </div>

        {/* Mobile background accent */}
        <div className="lg:hidden absolute inset-x-0 bottom-0 h-1/2 bg-[#FFEDBF] rounded-t-[40px] -z-10" />
      </div>
    </section>
  );
};

export default DownloadApp;
