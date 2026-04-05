const Wallet = () => {
  return (
    <section className="w-full bg-[#FFF7E2] py-10 sm:py-12 lg:py-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[60px]">
        {/* Text Content */}
        <div className="max-w-full lg:max-w-[508px] text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-2xl sm:text-[28px] font-bold leading-[36px] text-[#3A643C] mb-3 sm:mb-4">
            Smart Wallet
          </h2>
          <p className="text-base sm:text-[18px] font-medium leading-[23px] text-[#666666]">
            We understand the need for seamless transactions. With Amrutam
            Wallet, you can easily withdraw payments, and for your security, a
            one-time password is sent to your registered mobile number during
            withdrawals.
          </p>
        </div>

        {/* Visuals — stack vertically on mobile/iPad, use relative layout on desktop */}
        <div className="order-1 lg:order-2 w-full max-w-[480px] lg:max-w-none lg:w-[639px] mx-auto lg:mx-0">
          {/* Mobile & iPad: simple stacked cards */}
          <div className="flex flex-col gap-4 lg:hidden">
            {/* Recent Withdrawals */}
            <div className="bg-white rounded-[7.7px] p-[16px] shadow-md w-full">
              <h4 className="text-[14px] font-bold text-black mb-4 tracking-[0.3px]">
                Recent Withdrawals
              </h4>
              <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-2">
                <div>
                  <p className="text-[14px] font-medium text-[#101018]">
                    28th July 2024
                  </p>
                  <p className="text-[13px] text-[#A0A0A0]">Money Withdrawal</p>
                </div>
                <span className="text-[13px] font-bold text-[#101018]">
                  ₹44,000.00
                </span>
              </div>
            </div>

            {/* Account Card */}
            <div className="bg-white rounded-[6.4px] p-[20px] shadow-lg w-full">
              <span className="text-[13.2px] font-semibold text-[#3A643B]">
                Amrutam Account
              </span>
              <h3 className="text-[19.8px] font-bold text-[#3A643B] mt-2 mb-5">
                ₹12,000.00
              </h3>
              <button className="w-full sm:w-auto bg-[#3A643B] text-white py-[10px] px-6 rounded-[9.9px] text-[13.2px] font-semibold">
                Request Withdrawal
              </button>
            </div>
          </div>

          {/* Desktop: original absolute layout */}
          <div className="hidden lg:block relative w-[639px] h-[305px]">
            <div className="absolute w-[270px] h-[293px] left-[165px] top-0 bg-[#FFEEC3] rounded-full opacity-60 blur-2xl" />

            {/* Main Account Card */}
            <div className="absolute w-[271px] h-[156px] left-0 top-[149px] bg-white rounded-[6.4px] p-[20px] shadow-lg z-20">
              <span className="text-[13.2px] font-semibold text-[#3A643B]">
                Amrutam Account
              </span>
              <h3 className="text-[19.8px] font-bold text-[#3A643B] mt-2 mb-6">
                ₹12,000.00
              </h3>
              <button className="w-full bg-[#3A643B] text-white py-[10px] rounded-[9.9px] text-[13.2px] font-semibold">
                Request Withdrawal
              </button>
            </div>

            {/* Recent Withdrawals */}
            <div className="absolute w-[353px] h-[115px] left-[286px] top-0 bg-white rounded-[7.7px] p-[16px] shadow-md z-10">
              <h4 className="text-[14px] font-bold text-black mb-4 tracking-[0.3px]">
                Recent Withdrawals
              </h4>
              <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-2">
                <div>
                  <p className="text-[14px] font-medium text-[#101018]">
                    28th July 2024
                  </p>
                  <p className="text-[13px] text-[#A0A0A0]">Money Withdrawal</p>
                </div>
                <span className="text-[13px] font-bold text-[#101018]">
                  ₹44,000.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
