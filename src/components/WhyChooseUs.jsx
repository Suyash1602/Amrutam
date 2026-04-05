import drPrernaImg from "../assets/images/prerna.jpg";
import phoneIconImg from "../assets/logos/phone-icon.png";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#FFF7E2] pt-8 sm:pt-[32px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center gap-[8px] mb-12 sm:mb-16 lg:mb-[120px] px-4 sm:px-8 lg:px-[100px]">
          <h2 className="text-3xl sm:text-[40px] font-bold leading-tight sm:leading-[52px] tracking-[0.01em] text-[#3A643C] text-center">
            Why Doctors Choose Us?
          </h2>
          <p className="text-base sm:text-[20px] font-medium leading-[26px] tracking-[0.01em] text-[#4C4C4C] text-center max-w-[952px]">
            Unlock the Benefits of Smarter Healthcare Management and Patient
            Care
          </p>
        </div>

        {/* Feature 1: Instant FREE 5-Mins Call */}
        <div className="w-full px-4 sm:px-8 lg:px-[100px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[60px] mb-16 sm:mb-24 lg:mb-[150px]">
          {/* Visual */}
          <div className="relative w-full max-w-[360px] sm:max-w-[440px] lg:w-[551px] h-[260px] sm:h-[300px] lg:h-[321px] mx-auto lg:mx-0 flex-shrink-0">
            <div className="absolute w-[200px] sm:w-[250px] lg:w-[296px] h-[220px] sm:h-[250px] lg:h-[278px] left-[60px] top-[11px] bg-[#FFEEC3] rounded-full opacity-70 blur-2xl -z-10" />

            {/* Main Card */}
            <div className="absolute w-[220px] sm:w-[260px] lg:w-[306px] h-[80px] sm:h-[90px] lg:h-[95px] left-[100px] sm:left-[160px] lg:left-[259px] top-[60px] sm:top-[70px] lg:top-[84px] bg-white rounded-[15.5px] p-[12px] sm:p-[15px] shadow-lg z-20">
              <div className="flex items-center gap-[10px] sm:gap-[15px]">
                <div className="w-[50px] sm:w-[60px] lg:w-[65px] h-[50px] sm:h-[60px] lg:h-[66px] bg-[#D9D9D9] rounded-[5px] overflow-hidden flex-shrink-0">
                  <img
                    src={drPrernaImg}
                    alt="Dr. Prerna Narang"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[12px] lg:text-[12.5px] font-bold text-[#2E2F2E]">
                    Dr. Prerna Narang
                  </span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#646665]">
                    Gynecology + 2 others
                  </span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#646665]">
                    7 years of Experience
                  </span>
                </div>
                <div className="ml-auto w-[22px] h-[22px] border border-[#BCBCBC] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-xs">→</span>
                </div>
              </div>
            </div>

            {/* Connecting Call Card */}
            <div className="absolute w-[180px] sm:w-[210px] lg:w-[231px] h-[120px] sm:h-[140px] lg:h-[152px] left-[20px] sm:left-[28px] lg:left-[34px] top-[120px] sm:top-[140px] lg:top-[150px] bg-white rounded-[13px] p-[10px] sm:p-[12px] shadow-md z-10 border border-[#F0F0F0]">
              <div className="flex flex-col items-center text-center">
                <span className="text-[9px] font-bold text-[#2E2F2E] mb-3">
                  Connecting...
                </span>
                <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[35px] lg:h-[36px] bg-[#D9D9D9] rounded-[5px] overflow-hidden">
                  <img
                    src={drPrernaImg}
                    alt="Dr. Prerna Narang"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[7px] text-[#646665] leading-[10px] font-nunito px-1 mt-1">
                  You'll receive a call shortly from +917314855977. This call
                  will be recorded for you to review later.
                </span>
              </div>
            </div>

            {/* Floating Phone Icon */}
            <div className="absolute w-[60px] sm:w-[72px] lg:w-[84px] h-[60px] sm:h-[72px] lg:h-[84px] left-[40px] sm:left-[54px] lg:left-[67px] top-[9px] bg-[#DBDCC4] rounded-full flex items-center justify-center shadow-sm z-30">
              <img
                src={phoneIconImg}
                alt="Phone Icon"
                className="w-[28px] sm:w-[32px] lg:w-[36px] h-[28px] sm:h-[32px] lg:h-[36px] object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-full lg:max-w-[545px] text-center lg:text-left">
            <h3 className="text-2xl sm:text-[28px] font-bold leading-[36px] text-[#3A643C] mb-3 sm:mb-[12px]">
              Instant{" "}
              <span className="font-extrabold text-[#3A643C]">FREE</span> 5-Mins
              Call
            </h3>
            <p className="text-base sm:text-[18px] font-medium leading-[24px] text-[#666666]">
              We understand the importance of building trust with your patients.
              That's why Amrutam offers a
              <span className="font-bold text-[#0C0C0C]">
                {" "}
                free 5-minute call
              </span>
              , helping you connect instantly and foster lasting patient
              relationships with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
