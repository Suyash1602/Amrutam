import drPooja from "../assets/images/doctor.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Pooja Deshmukh, BAMS",
      text: "Amrutam's formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.",
      rating: 4,
    },
    {
      name: "Dr. Rajesh Iyer, Ayurvedic Practitioner",
      text: "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.",
      rating: 4,
      isFeatured: true,
    },
    {
      name: "Dr. Ananya Sharma, BAMS",
      text: "As an Ayurvedic doctor, I appreciate Amrutam's commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I've personally seen positive results in my patients using their products.",
      rating: 4,
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#FFF7E2] py-8 sm:py-10 lg:py-[32px] px-4 sm:px-8 lg:px-[100px] flex flex-col items-center gap-8 sm:gap-10 lg:gap-[48px]"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-[8px] w-full max-w-[808px]">
        <h2 className="text-3xl sm:text-[36px] lg:text-[40px] font-bold leading-tight sm:leading-[52px] text-[#33643F] text-center drop-shadow-[0_4px_36.2px_rgba(18,90,140,0.15)]">
          What other Ayurvedic Doctors are Saying
        </h2>
        <p className="text-base sm:text-[20px] font-normal leading-[150%] text-[#4C4C4C] text-center">
          Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
        </p>
      </div>

      {/* Cards — single col on mobile, 3-col grid on md (iPad) and above */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full max-w-[1240px]">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFEEC3] rounded-[8px] p-5 md:p-[24px] flex flex-col gap-3 md:gap-4 w-full"
          >
            {/* Doctor Info */}
            <div className="flex items-center gap-3">
              <div
                className={`rounded-full bg-gray-200 overflow-hidden border border-white flex-shrink-0
                ${item.isFeatured ? "w-[60px] h-[60px] lg:w-[68px] lg:h-[68px]" : "w-[44px] h-[44px]"}`}
              >
                <img
                  src={drPooja}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4
                  className={`font-semibold text-[#333333] ${item.isFeatured ? "text-[15px] md:text-[16px] lg:text-[18px]" : "text-[13px] md:text-[14px]"}`}
                >
                  {item.name}
                </h4>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${i < item.rating ? "text-[#FFB800]" : "text-[#BBBBBB]"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Text */}
            <p
              className={`font-normal leading-[150%] text-[#7E7E7E] italic
              ${item.isFeatured ? "text-[13px] md:text-[14px] lg:text-[16px]" : "text-[12px] md:text-[12px]"}`}
            >
              "{item.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
