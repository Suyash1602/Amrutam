import toi from "../assets/logos/toi.png";
import yourstory from "../assets/logos/yourstory.png";
import traveler from "../assets/logos/traveler.png";
import living from "../assets/logos/living.png";
import fashion from "../assets/logos/fashion.png";
import gq from "../assets/logos/gq.png";
import lifestyle from "../assets/logos/lifestyle.png";
import vogue from "../assets/logos/vogue.png";
import forbes from "../assets/logos/forbes.png";

const Featured = () => {
  const logos = [
    { src: toi, alt: "The Times of India" },
    { src: yourstory, alt: "YourStory" },
    { src: traveler, alt: "Traveler" },
    { src: living, alt: "LivingEtc" },
    { src: fashion, alt: "Fashion" },
    { src: gq, alt: "GQ" },
    { src: lifestyle, alt: "Lifestyle" },
    { src: vogue, alt: "Vogue" },
    { src: forbes, alt: "Forbes" },
  ];

  return (
    <section className="w-full bg-[#FFF8E6]">
      <div className="max-w-[1440px] mx-auto py-8 sm:py-10 lg:py-8 px-4 sm:px-8 lg:px-[100px] flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12">
        <div className="flex flex-col items-center gap-[4px] w-full max-w-[785px]">
          <h2 className="text-3xl sm:text-[40px] font-bold leading-tight sm:leading-[52px] text-[#33643F] text-center drop-shadow-[0_4px_36.2px_rgba(18,90,140,0.15)]">
            Featured
          </h2>
          <p className="text-base sm:text-[20px] font-normal leading-[30px] text-[#4C4C4C] text-center">
            Recognized and celebrated by leading publications – Amrutam in the
            spotlight!
          </p>
        </div>

        {/* Logo Grid - wraps on mobile */}
        <div className="w-full max-w-[1364px] grid grid-cols-3 sm:grid-cols-5 lg:flex lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-0">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center">
              <img
                src={logo.src}
                className="h-5 sm:h-6 lg:h-7 object-contain grayscale hover:grayscale-0 transition-all"
                alt={logo.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
