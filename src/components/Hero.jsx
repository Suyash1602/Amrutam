import doctorImg from "../assets/images/doctor-group-removebg.png";

const Hero = () => {
  return (
    <section
      className="bg-[#FFF7E2] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
      id="about"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="max-w-2xl text-left w-full">
          <p className="text-[#666666] text-base sm:text-lg font-medium mb-3 sm:mb-4 tracking-tight">
            Namaste, Welcome to Amrutam
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3A643C] leading-tight mb-4 sm:mb-6">
            <span className="text-[#0C0C0C]">Join Amrutam –</span> <br />
            Grow Your Practice
          </h1>

          <p className="text-[#666666] text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-lg">
            Connect with more patients, set your own schedule, and grow your
            Ayurvedic practice effortlessly.
          </p>

          <button className="bg-[#3A643C] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-[#2d4d2e] transition-colors shadow-lg mb-8 sm:mb-12">
            Join Now
          </button>

          {/* Stats Section */}
          <div className="flex items-center gap-8 sm:gap-16 border-t border-[#D9D9D9] pt-6 sm:pt-8">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-2xl sm:text-3xl text-[#0C0C0C]">
                500+
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] mt-1 uppercase tracking-wider font-semibold">
                Average Active <br /> Users
              </p>
            </div>
            <div className="h-10 sm:h-12 w-px bg-[#D9D9D9]"></div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-2xl sm:text-3xl text-[#0C0C0C]">
                40+
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] mt-1 uppercase tracking-wider font-semibold">
                Average daily <br /> free calls
              </p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto md:mx-0">
          <div className="absolute inset-0 bg-[#E8F0E9] rounded-full scale-110 blur-3xl opacity-50 -z-10"></div>
          <div className="relative z-10 flex justify-center">
            <img
              src={doctorImg}
              alt="Amrutam Doctors"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
