import drPrernaImg from "../assets/images/prerna.jpg";

const WorkTiming = () => {
  return (
    <section className="w-full bg-[#FFF7E2] py-10 sm:py-12 lg:py-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-[60px]">
        {/* Text Content */}
        <div className="max-w-full lg:max-w-[534px] text-center lg:text-left">
          <h2 className="text-2xl sm:text-[28px] font-bold leading-[36px] text-[#3A643C] mb-3 sm:mb-4">
            Flexible Work Timing
          </h2>
          <p className="text-base sm:text-[18px] font-medium leading-[24px] text-[#666666]">
            We recognize the importance of managing your time. With the
            availability toggle in the doctor's app, you control when patients
            can book consultations, ensuring a balanced and stress-free
            practice.
          </p>
        </div>

        {/* Visuals */}
        <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:w-[364px] h-[260px] sm:h-[290px] lg:h-[311px] mx-auto lg:mx-0 flex-shrink-0">
          <div className="absolute w-[220px] sm:w-[260px] lg:w-[292px] h-[240px] sm:h-[280px] lg:h-[311px] left-[40px] sm:left-[60px] lg:left-[72px] top-0 bg-[#FFEEC3] rounded-full opacity-60 blur-2xl" />

          {/* Status Toggle Card */}
          <div className="absolute w-[160px] sm:w-[180px] lg:w-[188px] h-[105px] sm:h-[115px] lg:h-[123px] left-0 top-[16px] sm:top-[20px] lg:top-[22px] bg-white rounded-[4px] p-[10px] sm:p-[14px] shadow-lg z-20">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <span className="text-[6px] font-bold text-[#3A643B]">
                Appointments
              </span>
              <div className="flex flex-col items-center">
                <div className="w-[15px] h-[6px] bg-[#E1E2E2] rounded-full relative">
                  <div className="absolute right-0 top-[-2px] w-[10px] h-[10px] bg-[#3A643B] rounded-full shadow-sm" />
                </div>
                <span className="text-[6px] text-[#3A643B] mt-1">Offline</span>
              </div>
            </div>
            <div className="flex gap-[10px] items-center">
              <div className="bg-[#EAF2EA] border border-[#E3E3E3] rounded-[4px] p-2 flex items-center gap-1">
                <span className="text-[8px] font-extrabold text-[#3A643B]">
                  4.8 ★
                </span>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="absolute w-[260px] sm:w-[310px] lg:w-[346px] h-[110px] sm:h-[122px] lg:h-[130px] left-[10px] sm:left-[14px] lg:left-[18px] top-[145px] sm:top-[165px] lg:top-[180px] bg-white rounded-[16px] overflow-hidden shadow-xl z-30">
            <div className="flex p-3 sm:p-4 gap-3 sm:gap-4">
              <div className="w-[70px] sm:w-[85px] lg:w-[98px] h-[80px] sm:h-[92px] lg:h-[102px] bg-gray-200 rounded-[10px] flex-shrink-0">
                <img
                  src={drPrernaImg}
                  alt="Dr. Prerna Narang"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-[11px] sm:text-[12.7px] font-bold text-[#2E2F2E]">
                  Dr. Prerna Narang
                </h5>
                <p className="text-[7px] sm:text-[7.4px] text-[#646665]">
                  Male-Female Infertility
                </p>
                <p className="text-[7px] sm:text-[7.4px] text-[#646665] mt-auto">
                  Speaks: English, Hindi, Marathi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTiming;
