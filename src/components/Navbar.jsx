import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-[#FFF7E2] shadow-md fixed top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-[#3A643C] tracking-widest flex-shrink-0">
          AMRUTAM
        </h1>

        {/* Desktop Nav — lg and above only */}
        <div className="hidden lg:flex gap-6 xl:gap-10 font-poppins text-gray-700 text-sm xl:text-base">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[#3A643C] transition-colors whitespace-nowrap"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("onboarding")}
            className="hover:text-[#3A643C] transition-colors whitespace-nowrap"
          >
            Onboarding
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="hover:text-[#3A643C] transition-colors whitespace-nowrap"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="hover:text-[#3A643C] transition-colors whitespace-nowrap"
          >
            Testimonials
          </button>
        </div>

        {/* Hamburger — mobile AND iPad (below lg) */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#3A643C] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3A643C] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3A643C] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Dropdown — mobile + iPad */}
      {menuOpen && (
        <div className="lg:hidden bg-[#FFF7E2] border-t border-[#D9D9D9] px-4 sm:px-6 py-4 flex flex-col gap-1 font-poppins text-gray-700">
          <button
            onClick={() => scrollToSection("about")}
            className="text-left px-3 py-3 rounded-lg hover:bg-[#F0EDD5] hover:text-[#3A643C] transition-colors text-base"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("onboarding")}
            className="text-left px-3 py-3 rounded-lg hover:bg-[#F0EDD5] hover:text-[#3A643C] transition-colors text-base"
          >
            Onboarding
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-left px-3 py-3 rounded-lg hover:bg-[#F0EDD5] hover:text-[#3A643C] transition-colors text-base"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-left px-3 py-3 rounded-lg hover:bg-[#F0EDD5] hover:text-[#3A643C] transition-colors text-base"
          >
            Testimonials
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
