import onboardingFormImg from "../assets/images/onboarding-form.png";

const JoinSteps = () => {
  return (
    <section
      id="onboarding"
      className="w-full bg-[#FFF7E2] pt-8 md:pt-[39px] pb-12 md:pb-[80px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px]">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 md:mb-14 lg:mb-[80px]">
          <h2 className="text-3xl md:text-[40px] font-bold leading-tight md:leading-[54px] tracking-[0.01em] text-[#33643F] text-center">
            Join Our Circle of Care
          </h2>
          <p className="text-base md:text-[20px] font-medium leading-[27px] tracking-[0.07em] text-[#4C4C4C] text-center mt-[3px]">
            Becoming a part of Amrutam is simple
          </p>
        </div>

        {/* Content Layout — stacks on mobile, side-by-side only on lg+ */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[60px]">
          {/* Steps — full width on mobile/iPad */}
          <div className="flex flex-col gap-3 md:gap-[12px] w-full lg:w-[578px]">
            {[
              {
                title: "Step 1: Get your referral code",
                desc: "Contact us to receive your unique referral code.",
              },
              {
                title: "Step 2: Register on Amrutam",
                desc: "Sign up on the Amrutam Doctors app or website to join our specialist network.",
              },
              {
                title: "Step 3: Complete KYC",
                desc: "Fill in your details and upload the required documents for verification.",
              },
              {
                title: "Step 4: Start consulting",
                desc: "Once verified, begin offering consultations and helping patients.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-[#FFF7E2] border border-[#33643F]/50 rounded-[8px] p-5 md:p-[28px_32px] flex flex-col gap-[10px]"
              >
                <h3 className="text-base md:text-[20px] font-bold text-[#3A643C] leading-[26px]">
                  {step.title}
                </h3>
                <p className="text-sm md:text-[14px] font-normal text-[#3A643C] leading-[18px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Form Image — full width on mobile/iPad, fixed size on desktop */}
          <div className="relative w-full lg:w-[670px] lg:h-[536px] mx-auto lg:mx-0 lg:flex-shrink-0">
            {/* Blob — hidden on mobile/iPad to avoid overflow */}
            <div className="hidden lg:block absolute w-[645px] h-[328px] left-0 top-[27px] bg-[#FFE6A5]/50 rounded-full blur-3xl -z-10" />
            <img
              src={onboardingFormImg}
              alt="Become An Amrutam Doctor Onboarding"
              className="w-full max-w-[480px] mx-auto lg:max-w-none lg:mx-0 h-auto lg:h-full object-contain block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSteps;
