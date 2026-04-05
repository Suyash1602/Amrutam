import React, { useState } from "react";
import phone1 from "../assets/images/phone1.png";
import phone from "../assets/images/phone.png";
import phone3 from "../assets/images/phone3.png";

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState("consultations");

  return (
    <section className="w-full bg-[#FFF7E2] py-8 sm:py-10 lg:py-[10px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center px-4 sm:px-8 lg:px-0">
        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-[36px] mb-8 sm:mb-10 lg:mb-[60px] w-full sm:w-auto">
          {[
            { key: "consultations", label: "Consultations" },
            { key: "payment", label: "Payment withdrawal" },
            { key: "schedule", label: "Schedule" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full sm:w-auto px-5 sm:px-[30px] py-[10px] sm:py-[12px] rounded-[8px] text-base sm:text-[20px] font-nunito transition-all border
                ${
                  activeTab === key
                    ? "bg-[#3A643C] text-white border-[#3A643C]"
                    : "bg-[#FFF7E2] text-[#3A643C] border-[#3A643C]/50"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Phone Grid */}
        <div className="flex flex-col sm:flex-row items-end justify-center gap-6 sm:gap-6 lg:gap-[40px] w-full px-4 sm:px-8 lg:px-[100px] mb-8 sm:mb-10 lg:mb-[60px]">
          {/* Left */}
          <div className="flex flex-col items-center gap-4 sm:gap-[24px]">
            <h3 className="text-lg sm:text-[22px] lg:text-[24px] font-bold text-[#3A643C] leading-[31px] text-center">
              Value Your Practice
            </h3>
            <img
              src={phone1}
              className="w-[180px] sm:w-[220px] lg:w-[280px] object-contain shadow-2xl rounded-[30px]"
              alt="Consultation Fee UI"
            />
          </div>

          {/* Center */}
          <div className="flex flex-col items-center gap-4 sm:gap-[24px]">
            <img
              src={phone}
              className="w-[200px] sm:w-[240px] lg:w-[300px] object-contain shadow-2xl rounded-[30px]"
              alt="Appointments List UI"
            />
            <h3 className="text-lg sm:text-[22px] lg:text-[24px] font-bold text-[#3A643C] leading-[31px] text-center">
              Today's Healing Journey
            </h3>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center gap-4 sm:gap-[24px]">
            <h3 className="text-lg sm:text-[22px] lg:text-[24px] font-bold text-[#3A643C] leading-[31px] text-center">
              Consultation Details
            </h3>
            <img
              src={phone3}
              className="w-[180px] sm:w-[220px] lg:w-[280px] object-contain shadow-2xl rounded-[30px]"
              alt="Appointment Details UI"
            />
          </div>
        </div>

        {/* CTA */}
        <button className="bg-[#3A643C] text-white px-[28px] sm:px-[36px] py-[10px] sm:py-[12px] rounded-[12px] text-base sm:text-[20px] font-bold shadow-lg hover:brightness-110 transition-all">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default AppShowcase;
