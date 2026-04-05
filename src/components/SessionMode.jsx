const SessionMode = () => {
  return (
    <section className="w-full bg-[#FFF7E2] py-10 sm:py-12 lg:py-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[60px]">
        {/* Visual Card */}
        <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:w-[484px] h-[280px] sm:h-[310px] lg:h-[339px] mx-auto lg:mx-0 flex-shrink-0">
          {/* Yellow Blob */}
          <div className="absolute w-[200px] sm:w-[250px] lg:w-[292px] h-[240px] sm:h-[280px] lg:h-[311px] left-[70px] top-0 bg-[#FFEEC3] rounded-full opacity-60 blur-2xl" />

          {/* Mode Selection Card */}
          <div className="absolute w-[220px] sm:w-[260px] lg:w-[288px] h-[95px] sm:h-[105px] lg:h-[110px] left-0 top-[30px] sm:top-[36px] lg:top-[40px] bg-white rounded-[14.3px] p-[14px] sm:p-[18px] shadow-lg z-20">
            <h4 className="text-[9px] sm:text-[10px] font-bold text-black mb-3 sm:mb-4 uppercase tracking-wider">
              Select your mode of session
            </h4>
            <div className="flex gap-[8px] sm:gap-[10px]">
              <div className="border border-[#E5E5E5] rounded-[5px] p-[6px_12px] sm:p-[8px_15px] text-center">
                <p className="text-[8px] font-medium text-[#1F1F1F]">
                  Free Call
                </p>
                <p className="text-[8px] text-[#606060]">₹15/Min</p>
              </div>
              <div className="border border-[#3A643B]/50 bg-[#F2FBF2] rounded-[5px] p-[6px_12px] sm:p-[8px_15px] text-center">
                <p className="text-[8px] font-bold text-[#3A643B]">Video</p>
                <p className="text-[8px] text-[#3A643B]">₹15/Min</p>
              </div>
            </div>
          </div>

          {/* Detail Popup */}
          <div className="absolute w-[200px] sm:w-[220px] lg:w-[238px] h-[140px] sm:h-[155px] lg:h-[163px] left-[120px] sm:left-[170px] lg:left-[246px] top-[130px] sm:top-[155px] lg:top-[176px] bg-white rounded-[0_16px_16px_16px] p-[12px] sm:p-[16px] shadow-md z-10">
            <p className="text-[11px] sm:text-[13px] lg:text-[14px] font-medium leading-[20px] sm:leading-[24px] text-[#0C0C0C]">
              Hi, Dr. Prerna, here are my details:
              <br />
              Name: Geetanjali Shah
              <br />
              Age: 34 Gender: Female
              <br />
              Height: 134 cm Weight: 64 kg
              <br />
              Concern: Immunity
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-full lg:max-w-[527px] text-center lg:text-left">
          <h2 className="text-2xl sm:text-[28px] font-bold leading-[36px] text-[#3A643C] mb-3 sm:mb-4">
            Choose Your Session Mode
          </h2>
          <p className="text-base sm:text-[18px] font-medium leading-[24px] text-[#666666]">
            Amrutam offers you to connect with patients via Instant Chat,
            Instant Call, or Schedule Video call. Each option offers flexibility
            and personalized care to suit individual needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionMode;
