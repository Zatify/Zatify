import React from "react";

const Pricingplans = () => (
  <div className="relative min-h-screen bg-gray-50 py-16 px-4 flex flex-col items-center font-roboto">
    {/* Hero Section */}
    <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />
    <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-[450vh] rounded-bl-3xl rounded-br-3xl pointer-events-none z-50" />
    <section className="relative p-4 top-20 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
      <div
        className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(svg/background/contact.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Pricing plans</h1>
        {/* Vertical Neural text */}
        <div className="absolute right-24 bottom-5 items-center hidden md:block">
          <span
            className="font-sans select-none"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              fontSize: '90px',
              fontWeight: 650,
              color: 'transparent',
              WebkitTextStroke: '1px #fff',
              textStroke: '1px #fff',
              letterSpacing: '1px',
              lineHeight: 1,
              transform: 'rotate(180deg)'
            }}
          >Price</span>
        </div>
        {/* Breadcrumb & Decorations */}
        <div className="absolute left-[255px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
        <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
        <div className="justify-center items-center w-64 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
          <span className="text-sm mb-1">Home / Pricing plans</span>
        </div>
        <div className="hidden md:block absolute left-[95px] top-[-1px] w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
        <div className="hidden md:block absolute left-[-1px] top-[63px]  w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
        <div className="hidden md:block justify-center items-center w-24 h-16 absolute left-0 top-0 bg-white rounded-br-3xl px-8 py-4 text-black text-base font-sans flex-col"></div>
        <div className="hidden md:block absolute right-[69px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
        <div className="hidden md:block absolute right-[-11px] top-[231px]  w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
        <div className="hidden md:block justify-center items-center h-72 w-20 absolute right-0 bottom-0 bg-white rounded-tl-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex-col shadow-md"></div>
      </div>
    </section>
    {/* Pricing Section - DỄ SỬA */}
    <section className="w-full max-w-full mx-auto px-0 md:px-6 py-0 md:py-16 flex flex-col md:flex-row md:items-start md:space-x-20 min-h-[280px] md:min-h-[480px] lg:min-h-[540px] font-roboto" style={{ minHeight: '280px', marginTop: '120px' }}>
      {/* Left side text */}
      <div className="md:w-1/2 max-w-lg px-6 py-12 md:py-0 md:px-12 flex flex-col justify-center font-roboto">
        <div className="text-sm mb-2 select-none font-roboto">[ pricing ]</div>
        <h1 className="text-5xl font-normal leading-tight mb-8 font-roboto">
          Choose the plan <br />
          that fits your needs
        </h1>
        <p className="mb-6 text-base font-normal leading-relaxed font-roboto">
          Triggerfish bluntnose knifefish upside-down catfish <br />
          kfish convict cichlid cat shark saw shark trout cod.
        </p>
        <p className="mb-10 text-base font-normal leading-relaxed font-roboto">
          Pacific hake false trevally queen parrotfish black <br />
          prickleback moss really queen parrotfish black
        </p>
        <ul className="space-y-4 text-lg font-normal font-roboto">
          <li className="flex items-center space-x-3 font-roboto">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="font-roboto">Fine-tuning models</span>
          </li>
          <li className="flex items-center space-x-3 font-roboto">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="font-roboto">Embedding models</span>
          </li>
          <li className="flex items-center space-x-3 font-roboto">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="font-roboto">InstructGPT</span>
          </li>
        </ul>
      </div>
      {/* Right side pricing cards */}
      <div className="md:w-1/2 flex flex-col md:flex-row md:space-x-8 mt-12 md:mt-0 px-6 py-12 md:py-0 md:px-0 items-center justify-end ml-40 font-roboto">
        {/* Premium card */}
        <div className="flex flex-row gap-3 h-[555px] font-roboto">
          <div className="flex-1 w-[330px] 0.5xl:pt-20 bg-[#f5f6f7] rounded-2xl p-10 flex flex-col items-start shadow-xl relative z-20 font-roboto border border-gray-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold text-sm font-roboto">Popular</div>
            <h3 className="text-[40px] text-black font-roboto mb-2">Premium</h3>
            <p className="mb-4 font-roboto font-semibold text-black">14 days free period</p>
            <ul className="mb-8 text-base font-roboto text-black space-y-2">
              <li>3 Users</li>
              <li>Unlimited Projects</li>
              <li>Download prototypes</li>
              <li>100 Gb workspace</li>
            </ul>
            <div className="text-4xl text-black font-bold mb-8 font-roboto">$99<span className="text-lg font-normal font-roboto">/mo</span></div>
            <div className="rounded-md inline-block p-[1px] font-roboto">
              <button className="justify-center text-sm text-white bg-gray-900 rounded-[0.65rem] px-4 py-2 hover:bg-gray-800 transition flex items-center gap-1 w-[160px] h-[50px] font-roboto">
                Get started<span className="ml-1 font-roboto">→</span>
              </button>
            </div>
          </div>
        </div>
       
        {/* Card 4 */}
        <div className="flex flex-row gap-3  h-[555px]">
          <div className="flex-1 w-[330px] 0.5xl:pt-20 bg-white rounded-2xl p-10 flex flex-col items-start shadow-md relative z-10 border border-gray-200">
            <h3 className="text-[40px] text-black font-roboto mb-2">Ultimate</h3>
            <p className="mb-4 font-manrope font-semibold text-black">Best for large teams</p>
            <ul className="mb-8 text-base font-manrope text-black space-y-2">
              <li>500 Users</li>
              <li>Unlimited Projects</li>
              <li>Download prototypes</li>
              <li>1000 Gb workspace</li>
            </ul>
            <div className="text-4xl text-black font-bold mb-8">$399<span className="text-lg font_normal text-black">/mo</span></div>
            <div className="rounded-md inline-block p-[1px]">
              <button className="justify-center text-sm bg-white border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[160px] h-[50px] font-roboto hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white">
                Get started<span className="ml-1">→</span>
              </button>
            </div>
          </div>
          {/* Vertical bar 4 */}
          
        </div>
      </div>
    </section>
    {/* END Pricing Section */}
    {/* NOTE: Đoạn HTML pricing section mẫu của bạn đã được gửi ở các tin nhắn trước. Nếu cần sử dụng lại, hãy tìm theo từ khóa: HTML PRICING SECTION FROM USER */}
    
    {/* PRICING SECTION - ĐÃ CHỈNH JSX GIỐNG HÌNH MẪU */}
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 gap-10 bg-gradient-to-r from-white via-white to-purple-200 font-roboto">
      {/* Left Text Content - khôi phục lại như ban đầu */}
      <div className="flex-1 flex flex-col justify-center h-full min-h-[480px] max-w-[540px] px-8 py-12 md:py-0 md:px-0 font-roboto">
        <div className="text-sm mb-2 select-none font-roboto">[ pricing ]</div>
        <h2 className="text-[56px] md:text-[64px] font-medium leading-tight mb-8 text-black font-roboto" style={{lineHeight:'1.1'}}>Only pay for <br />what you use.</h2>
        <p className="text-lg leading-relaxed text-black mb-4 font-roboto font-normal">Triggerfish bluntnose knifefish upside-down catfish kfish convict cichlid cat shark saw shark trout cod.</p>
        <p className="text-lg leading-relaxed text-black mb-8 font-roboto font-normal">Pacific hake false trevally queen parrotfish black prickleback moss revally queen parrotfish black</p>
        <ul className="flex flex-col gap-6 text-black text-xl font-medium font-roboto">
          <li className="flex items-center gap-4 font-roboto">
            <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="font-roboto">Fine-tuning models</span>
          </li>
          <li className="flex items-center gap-4 font-roboto">
            <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="font-roboto">Embedding models</span>
          </li>
          <li className="flex items-center gap-4 font-roboto">
            <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="font-roboto">InstructGPT</span>
          </li>
        </ul>
      </div>
      {/* Right Pricing Cards */}
      <div className="flex flex-col gap-8 max-w-4xl w-full flex-1 font-roboto">
        {/* Basic Card - tinh chỉnh spacing, font, nút, layout cho giống hình mẫu nhất */}
        <div className="flex flex-row items-center rounded-2xl border border-[#d1cfff] overflow-hidden bg-gradient-to-r from-white to-[#f3f0ff] shadow-sm p-12 font-roboto">
          {/* Cột 1: Tiêu đề và mô tả */}
          <div className="flex flex-col flex-1 justify-center items-start min-w-[240px] font-roboto">
            <h3 className="text-[40px] text-black font-roboto mb-2">Basic</h3>
            <p className="text-lg font-normal font-roboto mt-2 text-black">Great for private individuals</p>
          </div>
          {/* Cột 2: List */}
          <ul className="flex flex-col gap-4 flex-1 px-8 text-gray-900 text-lg font-normal font-roboto min-w-[320px] max-w-[340px] break-words list-disc list-inside">
            <li>1 User</li>
            <li>Unlimited Projects</li>
            <li>Download prototypes</li>
            <li>1 Gb workspace</li>
          </ul>
          {/* Cột 3: Giá và nút */}
          <div className="flex flex-col items-center justify-center flex-1 min-w-[240px] pr-2 font-roboto">
            <h3 className="text-6xl font-extrabold font-roboto text-black leading-none text-center mb-6">Free</h3>
            <button className="px-8 py-4 rounded-xl border border-[#a689fa] text-black text-lg flex items-center gap-2 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition font-medium min-w-[180px] focus:outline-none font-roboto">
              Get started
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
        {/* Premium Card - chỉnh lại layout 3 cột, căn giữa, spacing, font-size, nút giống hình */}
        <div className="flex flex-row items-center justify-between rounded-2xl overflow-hidden bg-[#f6f7f8] shadow-sm p-12 font-roboto">
          {/* Cột 1: Tiêu đề và mô tả */}
          <div className="flex flex-col flex-1 justify-center items-start min-w-[220px] font-roboto">
            <h3 className="text-5xl font-roboto mb-2">Premium</h3>
            <p className="text-lg font-normal font-roboto">14 days free period</p>
          </div>
          {/* Cột 2: List */}
          <ul className="flex flex-col gap-4 flex-1 px-8 text-gray-900 text-lg list-disc list-inside min-w-[220px] font-roboto">
            <li>3 Users</li>
            <li>Unlimited Projects</li>
            <li>Download prototypes</li>
            <li>100 Gb workspace</li>
          </ul>
          {/* Cột 3: Giá và nút */}
          <div className="flex flex-col items-center justify-center flex-1 min-w-[220px] font-roboto">
            <div className="flex items-baseline gap-2 mb-6 font-roboto">
              <span className="text-6xl font-extrabold font-roboto text-black leading-none">$99</span>
              <span className="text-2xl font-semibold font-roboto">/mo</span>
            </div>
            <button className="px-8 py-4 rounded-xl bg-gray-900 text-white text-lg flex items-center gap-2 hover:bg-gray-800 transition font-medium min-w-[180px] font-roboto">
              Get started
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* PRICING GRID SECTION - HTML chuyển JSX, TO HƠN */}
    <div className="min-h-[120vh] flex flex-col md:flex-row items-center justify-center px-8 md:px-32 py-24 gap-16 bg-gradient-to-r from-white via-white to-purple-200 font-roboto -mt-8">
      <div className="flex-1 flex flex-col items-center">
        <div className="text-[13px] text-black mb-4 tracking-wide">[ pricing ]</div>
        <h1 className="text-center text-black font-normal text-[48px] leading-[56px] max-w-[520px] sm:max-w-none sm:text-[64px] sm:leading-[72px] mb-2">
          Choose the plan<br />that fits your needs
        </h1>
        <div className="mt-14 w-full max-w-[1700px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center justify-items-center px-4">
          {/* Card 1: Basic */}
          <div className="flex flex-col h-[555px] bg-white w-[300px] rounded-2xl border border-gray-200 p-10 shadow-md relative z-10 items-start mx-auto">
            <h3 className="text-[40px] font-roboto mb-2 text-black">Basic</h3>
            <p className="mb-4 font-manrope font-semibold text-gray-800">Great for private individuals</p>
            <ul className="mb-8 text-base font-manrope text-gray-800 space-y-2">
              <li>1 User</li>
              <li>Unlimited Projects</li>
              <li>Download prototypes</li>
              <li>1 Gb workspace</li>
            </ul>
            <div className="text-4xl font-bold mb-8 text-black">Free</div>
            <div className="gradient-border rounded-md inline-block p-[1px] mt-auto">
              <button className="justify-center text-sm bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px] text-black border border-[#a689fa] font-roboto">
                Get started<span className="ml-1">→</span>
              </button>
            </div>
          </div>
          {/* Card 2: Premium */}
          <div className="flex flex-col h-[555px] w-[300px] bg-white rounded-2xl p-10 shadow-xl relative z-20 border border-gray-200 items-start mx-auto">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold text-sm font-roboto rounded-b-2xl">Popular</div>
            <h3 className="text-[40px] text-black font-roboto mb-2">Premium</h3>
            <p className="mb-4 font-manrope font-semibold text-black">14 days free period</p>
            <ul className="mb-8 text-base font-manrope text-black space-y-2">
              <li>3 Users</li>
              <li>Unlimited Projects</li>
              <li>Download prototypes</li>
              <li>100 Gb workspace</li>
            </ul>
            <div className="text-4xl text-black font-bold mb-8">$99<span className="text-lg font_normal">/mo</span></div>
            <div className="rounded-md inline-block p-[1px] mt-auto">
              <button className="justify-center text-sm text-white bg-gray-900 rounded-[0.65rem] px-4 py-2 hover:bg-gray-800 transition flex items-center gap-1 w-[160px] h-[50px] font-roboto">
                Get started<span className="ml-1">→</span>
              </button>
            </div>
          </div>
          {/* Card 3: Unlimited */}
          <div className="flex flex-col h-[555px] w-[300px] bg-white rounded-2xl p-10 shadow-md relative z-10 items-start mx-auto border border-gray-200">
            <h3 className="text-[40px] text-black font-roboto mb-2">Unlimited</h3>
            <p className="mb-4 font-manrope font-semibold text-black">Great for private individuals</p>
            <ul className="mb-8 text-base font-manrope text-black space-y-2">
              <li>100 Users</li>
              <li>Unlimited Projects</li>
              <li>Download prototypes</li>
              <li>100 Gb workspace</li>
            </ul>
            <div className="text-4xl text-black font-bold mb-8">$199<span className="text-lg font_normal">/mo</span></div>
            <div className="gradient-border rounded-md inline-block p-[1px] mt-auto">
              <button className="justify-center text-sm bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px] text-black border border-[#a689fa] font-roboto">
                Get started<span className="ml-1">→</span>
              </button>
            </div>
          </div>
          {/* Card 4: Ultimate */}
          <div className="flex flex-col h-[555px] w-[300px] bg-white rounded-2xl p-10 shadow-md relative z-10 items-start mx-auto border border-gray-200">
            <h3 className="text-[40px] text-black font-roboto mb-2">Ultimate</h3>
            <p className="mb-4 font-manrope font-semibold text-black">Best for large teams</p>
            <ul className="mb-8 text-base font-manrope text-black space-y-2">
              <li>500 Users</li>
              <li>Unlimited Projects</li>
              <li>Download prototypes</li>
              <li>1000 Gb workspace</li>
            </ul>
            <div className="text-4xl text-black font-bold mb-8">$399<span className="text-lg font_normal text-black">/mo</span></div>
            <div className="rounded-md inline-block p-[1px] mt-auto">
              <button className="justify-center text-sm bg-white border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[160px] h-[50px] font-roboto hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white">
                Get started<span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Price Section  */}
    <section className="relative 0.5xl:mt-20 flex-row max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <h2 className="text-3xl sm:text-7xl w-full 0.5xl:w-[55%] leading-tight mb-16 font-roboto text-gray-800">
            Choose the plan that fits your needs
        </h2>
        <div className="flex flex-col 0.5xl:flex-row items-star justify-center gap-6 w-full">
            {/* Card 1 */}
            <div className="flex flex-row gap-3  h-[555px]">
                <div className="flex-1 bg-white w-[330px] 0.5xl:pt-20 rounded-2xl border border-black p-10 flex flex-col items-start shadow-md relative z-10">
                    <h3 className="text-[40px] font-roboto mb-2">Basic</h3>
                    <p className="mb-4 font-manrope font-semibold text-gray-800">Great for private individuals</p>
                    <ul className="mb-8 text-base font-manrope text-gray-800 space-y-2">
                        <li>1 User</li>
                        <li>Unlimited Projects</li>
                        <li>Download prototypes</li>
                        <li>1 Gb workspace</li>
                    </ul>
                    <div className="text-4xl font-bold mb-8">Free</div>
                    <div className="gradient-border rounded-md inline-block p-[1px]">
                        <button className="justify-center text-sm bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px] text-black border border-[#a689fa] font-roboto">
                            Get started<span className="ml-1">→</span>
                        </button>
                    </div>
                </div>
                {/* Vertical bar 1 */}
                <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/basic.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-row gap-3  h-[555px]">
                <div className="flex-1 w-[330px] 0.5xl:pt-20 bg-[#bcaaff] rounded-2xl p-10 flex flex-col items-start shadow-xl relative z-20">
                    <div className="absolute top-0 left-1/3 -translate-x-1/2 bg-white text-black px-6 py-2 rounded-b-2xl font-semibold text-sm">Popular</div>
                    <h3 className="text-[40px] text-black font-roboto mb-2">Premium</h3>
                    <p className="mb-4 font-manrope font-semibold text-black">14 days free period</p>
                    <ul className="mb-8 text-base font-manrope text-black space-y-2">
                        <li>3 Users</li>
                        <li>Unlimited Projects</li>
                        <li>Download prototypes</li>
                        <li>100 Gb workspace</li>
                    </ul>
                    <div className="text-4xl text-black font-bold mb-8">$99<span className="text-lg font_normal">/mo</span></div>
                    <div className="rounded-md inline-block p-[1px]">
                        <button className="justify-center text-sm text-white bg-[#333333] rounded-[0.65rem] px-4 py-2 hover:bg-[#3ed6c5] hover:text-white transition flex items-center gap-1 w-[160px] h-[50px] font-roboto">
                            Get started<span className="ml-1">→</span>
                        </button>
                   </div>
                </div>
                {/* Vertical bar 2 */}
                <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/premium.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-row gap-3  h-[555px]">
                <div className="flex-1 w-[330px] 0.5xl:pt-20 bg-[#3ed6c5] rounded-2xl p-10 flex flex-col items-start shadow-md relative z-10">
                    <h3 className="text-[40px] text-white font-roboto mb-2">Unlimited</h3>
                    <p className="mb-4 font-manrope font-semibold text-white">Great for private individuals</p>
                    <ul className="mb-8 text-base font-manrope text-white space-y-2">
                        <li>100 Users</li>
                        <li>Unlimited Projects</li>
                        <li>Download prototypes</li>
                        <li>100 Gb workspace</li>
                    </ul>
                    <div className="text-4xl text-white font-bold mb-8">$199<span className="text-lg font_normal">/mo</span></div>
                    <div className="gradient-border rounded-md inline-block p-[1px]">
                        <button className="justify-center text-sm text-white bg-[#3ed6c5]  rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                            Get started<span className="ml-1">→</span>
                        </button>
                    </div>
                </div>
                {/* Vertical bar 3 */}
                <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/unlimited.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
        </div>
    </section>
  </div>
);

export default Pricingplans;
