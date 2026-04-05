const FAQ = () => {
  const faqs = [
    "What is Amrutam?",
    "How do I register as a doctor?",
    "What are the consultation modes available?",
    "How does the Amrutam Wallet work?",
    "Can I set my own schedule?",
    "What is the Amrutam Forum?",
  ];

  return (
    <section id="faq" className="w-full bg-[#FFF7E2]">
      <div className="max-w-[1440px] mx-auto py-8 sm:py-[33px] px-4 sm:px-8 lg:px-[205px] flex flex-col items-center gap-8 sm:gap-10 lg:gap-[48px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[8px] w-full max-w-[785px]">
          <h2 className="text-3xl sm:text-[40px] font-bold leading-tight sm:leading-[52px] text-[#33643F] text-center tracking-[0.01em] drop-shadow-[0_4px_36.2px_rgba(18,90,140,0.15)]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-[20px] font-normal leading-[150%] text-[#4C4C4C] text-center">
            Find quick answers to common questions to help you navigate the app
            and its features easily.
          </p>
        </div>

        {/* FAQ List */}
        <div className="w-full max-w-[1030px] flex flex-col gap-4 sm:gap-[26px]">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="relative w-full min-h-[52px] flex items-center border-b border-[#C6C1B9] py-3 sm:py-0 cursor-pointer group"
            >
              <span className="text-base sm:text-[20px] font-medium leading-[26px] text-[#666666] tracking-[0.01em] pr-8">
                {question}
              </span>
              {/* Plus Icon */}
              <div className="absolute right-0 w-[11px] h-[11px] flex-shrink-0">
                <div className="absolute top-[5px] left-0 w-full h-[1px] bg-[#666666]"></div>
                <div className="absolute top-0 left-[5px] w-[1px] h-full bg-[#666666]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="flex items-center justify-center px-[36px] py-[12px] w-auto sm:w-[163px] h-[56px] bg-[#3A643C] rounded-[12px] shadow-lg hover:brightness-110 transition-all">
          <span className="text-base sm:text-[20px] font-bold leading-[26px] text-white text-center">
            See More
          </span>
        </button>
      </div>
    </section>
  );
};

export default FAQ;
