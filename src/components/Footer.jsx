import logo from "../assets/logos/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#DBDCC4]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] py-10 md:py-14 lg:py-[76px] flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
        {/* Get in Touch */}
        <div className="flex flex-col w-full lg:max-w-[371px]">
          <img
            src={logo}
            alt="Amrutam Logo"
            className="w-[140px] md:w-[180px] lg:w-[210px] h-auto object-contain mb-6 md:mb-[41px]"
          />
          <h3 className="text-xl md:text-[24px] lg:text-[28px] font-semibold text-[#33643F] leading-[131.1%] mb-4 md:mb-[24px]">
            Get in touch
          </h3>
          <div className="flex flex-col gap-[10px] md:gap-[12px] text-sm md:text-base lg:text-[20px] font-medium text-[#4C4C4C] leading-[131.1%]">
            <p>support@amrutam.global</p>
            <p className="max-w-full lg:max-w-[354px]">
              Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak,
              Lashkar, Gwalior - 474001
            </p>
            <p>+91 9713171999</p>
          </div>
        </div>

        {/* Information */}
        <div className="flex flex-col">
          <h3 className="text-xl md:text-[24px] lg:text-[28px] font-semibold text-[#33643F] leading-[131.1%] mb-4 md:mb-[24px]">
            Information
          </h3>
          <ul className="flex flex-col gap-[10px] md:gap-[12px] text-sm md:text-base lg:text-[20px] font-medium text-[#4C4C4C] leading-[131.1%]">
            {[
              "About Us",
              "Terms and Conditions",
              "Privacy Policy",
              "Privacy Policy for Mobile App",
              "Shipping and Return Policy",
              "International Delivery",
              "For Business, Hotels and Resorts",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#33643F] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl md:text-[24px] lg:text-[28px] font-semibold text-[#33643F] leading-[131.1%] mb-5 md:mb-[28px]">
            Follow Us
          </h3>
          <div className="flex flex-row flex-wrap gap-[10px] md:gap-[14px] lg:gap-[16px]">
            {[
              { label: "f", title: "Facebook" },
              { label: "ig", title: "Instagram" },
              { label: "y", title: "Youtube" },
              { label: "t", title: "Twitter" },
              { label: "in", title: "LinkedIn" },
              { label: "p", title: "Pinterest" },
            ].map(({ label, title }) => (
              <div
                key={title}
                title={title}
                className="w-[32px] md:w-[34px] lg:w-[36px] h-[32px] md:h-[34px] lg:h-[36px] bg-[#33643F] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="text-[#FFF8E6] text-[13px] md:text-[15px] lg:text-[18px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
