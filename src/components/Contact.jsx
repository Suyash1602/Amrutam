import contactBg from "../assets/images/herb.jpg";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#FFF7E2]">
      <div className="max-w-[1440px] mx-auto py-12 md:py-16 lg:py-[80px] px-4 sm:px-6 md:px-8 lg:px-[100px] flex flex-col items-center gap-8 md:gap-10 lg:gap-[40px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[8px] w-full max-w-[785px]">
          <h2 className="text-3xl md:text-[40px] font-bold leading-tight md:leading-[52px] text-[#33643F] text-center drop-shadow-[0_4px_36.2px_rgba(18,90,140,0.15)]">
            Let's Connect
          </h2>
          <p className="text-base md:text-[20px] font-normal leading-[150%] text-[#4C4C4C] text-center">
            We're here to help you on your wellness journey. Reach out to us for
            any questions, product inquiries, or personalized advice.
          </p>
        </div>

        {/* Content — stacked on mobile/iPad, side-by-side on lg+ */}
        <div className="w-full max-w-[1240px] flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Image */}
          <div
            className="w-full lg:w-[498px] h-[200px] md:h-[260px] lg:h-[471px] rounded-[8px] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${contactBg})` }}
          ></div>

          {/* Form */}
          <div className="flex-1 border border-[#C2C2C2] rounded-[8px] p-6 md:p-8 lg:p-[35px_36px] bg-[#FFF7E2]">
            <form className="flex flex-col gap-5 md:gap-[24px]">
              {/* Name & Number — stacked on mobile, side by side on md+ */}
              <div className="flex flex-col md:flex-row gap-5 md:gap-[31px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="text-[14px] font-normal text-[#3A643B]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Vikas Kumar"
                    className="bg-transparent border-b-2 border-[#C2C2C2] py-2 text-base md:text-[20px] text-[#7E7E7E] outline-none focus:border-[#3A643B] transition-colors w-full"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="text-[14px] font-normal text-[#3A643B]">
                    Your Contact Number
                  </label>
                  <input
                    type="text"
                    placeholder="8743414476"
                    className="bg-transparent border-b-2 border-[#C2C2C2] py-2 text-base md:text-[20px] text-[#7E7E7E] outline-none focus:border-[#3A643B] transition-colors w-full"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-normal text-[#3A643B]">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="vikass@gmail.com"
                  className="bg-transparent border-b-2 border-[#C2C2C2] py-2 text-base md:text-[20px] text-[#7E7E7E] outline-none focus:border-[#3A643B] transition-colors w-full"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-normal text-[#3A643B]">
                  Message (Optional)
                </label>
                <input
                  type="text"
                  placeholder="I want to On-board as a Doctor"
                  className="bg-transparent border-b-2 border-[#C2C2C2] py-2 text-base md:text-[20px] text-[#7E7E7E] outline-none focus:border-[#3A643B] transition-colors w-full"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full md:w-[236px] h-[50px] md:h-[56px] bg-[#315918] rounded-[8px] mt-2 md:mt-[10px] text-white text-base md:text-[20px] font-bold hover:brightness-110 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
