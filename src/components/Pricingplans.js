import React from "react";

const Pricingplans = () => {
  // Nội dung mẫu cho từng loại ZNS
  const znsContents = [
    {
      title: 'Xác nhận đơn hàng',
      message: 'Cảm ơn <customer_name> đã tin tưởng. Chúng tôi đã nhận được yêu cầu đặt hàng từ bạn.',
      details: [
        'Mã đơn: <order_code>',
        'Trạng thái: <payment_status>',
        'Giá tiền: <cost>',
        'Ghi chú: <note>'
      ]
    },
    {
      title: 'Mã OTP của bạn là',
      message: '220298',
      details: [
        'Tuyệt đối không chia sẻ OTP này cho bất kỳ ai dưới bất kỳ hình thức nào (có hiệu lực 2 phút).'
        
      ]
    },
    {
      title: 'Đánh giá đơn hàng',
      message: 'Xin chào <customer_name>, đơn hàng <order_id> đã được giao thành công. Bạn có hài lòng về sản phẩm của bên <shop_name> không? Bạn vui lòng để lại đánh giá cho <shop_name> biết nhé!',
      details: []
    },
    {
      title: 'Thông tin thanh toán',
      message: 'Quý khách <customer_name> vui lòng kiểm tra thông tin vé xe và thanh toán đúng hạn theo thông tin bên dưới. Mã vé <ticket_code> .',
      details: [
        'Mã giao dịch: <transaction_code>',
        'Số tiền: <amount>',
        'Trạng thái: <payment_status>'
      ]
    },
    {
      title: 'Gửi khách hàng mã giảm giá',
      message: 'Gửi <customer_name> với mã thành viên <member_code> , khi đặt hàng trực tiếp tại shop, giảm trực tiếp lên đến 70.000đ từ nay cho đến hết <expire_date> .',
      details: []
    }
  ];
  const [selected, setSelected] = React.useState(0);
  const znsTypes = [
    { label: 'ZNS tuỳ chỉnh', price: 200 },
    { label: 'ZNS xác thực', price: 300 },
    { label: 'ZNS đánh giá dịch vụ', price: 200 },
    { label: 'ZNS yêu cầu thanh toán', price: 300 },
    { label: 'ZNS voucher', price: 300 },
  ];
  return (
    <div className="relative min-h-screen bg-gray-50 py-8 px-2 sm:py-12 sm:px-4 flex flex-col items-center font-roboto">
    {/* Hero Section */}
    <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />
    <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-[450vh] rounded-bl-3xl rounded-br-3xl pointer-events-none z-50" />
    <section className="relative mt-16 sm:mt-24 w-full max-w-full" style={{ zIndex: 1 }}>
      <div
        className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[540px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(svg/background/contact.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-white text-[32px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Bảng giá</h1>
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
          >Zatify</span>
        </div>

        {/* Breadcrumb & Decorations */}
        <div className="absolute left-[255px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
        <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
        <div className="justify-center items-center w-64 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
          <span className="text-sm mb-1">Trang chủ / Bảng giá</span>
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
    {/*
    <section className="w-full max-w-[1400px] mx-auto px-0 sm:px-4 md:px-8 py-0 md:py-16 flex flex-col md:flex-row md:items-start md:space-x-12 min-h-[220px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[540px] font-roboto" style={{ minHeight: '220px', marginTop: '60px' }}>
      ...existing code...
    </section>
    */}

  {/* PRICING SECTION - ĐÃ CHỈNH JSX GIỐNG HÌNH MẪU */}
    <section className="min-h-[80vh] w-full flex flex-col md:flex-row items-center justify-center px-2 sm:px-6 md:px-20 py-8 sm:py-16 gap-8 sm:gap-10 bg-gradient-to-r from-white via-white to-purple-200 font-roboto">
      {/* Left Text Content */}
      <div className="flex-1 flex flex-col justify-center h-full min-h-[320px] sm:min-h-[420px] md:min-h-[480px] max-w-[540px] px-4 sm:px-8 py-8 md:py-0 md:px-0 font-roboto">
        <h2 className="text-[56px] md:text-[64px] font-medium leading-tight mb-8 text-black font-roboto" style={{ lineHeight: '1.1' }}>	Phí sử dụng / <br />Tích hợp hệ thống</h2>
        <p className="text-lg leading-relaxed text-black mb-4 font-roboto font-normal">Chỉ với một nền tảng duy nhất – Zatify giúp doanh nghiệp tận dụng sức mạnh ZNS để nâng cao trải nghiệm khách hàng, giảm thiểu chi phí chăm sóc và tối ưu tỷ lệ chuyển đổi.</p>
        <p className="text-lg leading-relaxed text-black mb-8 font-roboto font-normal">Từ tin nhắn giao dịch, OTP cho đến thông báo chăm sóc, tất cả đều được gửi nhanh chóng – chính xác – bảo mật. Zatify đồng hành cùng doanh nghiệp trong hành trình số hoá, mang đến giải pháp ZNS toàn diện và bền vững.</p>
        <ul className="flex flex-col gap-6 text-black text-xl font-medium font-roboto">
          <li className="flex items-center gap-4 font-roboto">
            <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="font-roboto">Kết nối API nhanh chóng – dễ dàng tích hợp vào hệ thống sẵn có</span>
          </li>
          <li className="flex items-center gap-4 font-roboto">
            <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="font-roboto">Hỗ trợ kỹ thuật 24/7 – đồng hành cùng doanh nghiệp</span>
          </li>
          <li className="flex items-center gap-4 font-roboto">
            <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="font-roboto">Bảo mật cao – an toàn dữ liệu khi truyền tải</span>
          </li>
        </ul>
      </div>
      {/* Right Pricing Cards */}
      <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl w-full flex-1 font-roboto">
        {/* Basic Card */}
        <div className="flex flex-col sm:flex-row items-center rounded-2xl border border-[#d1cfff] overflow-hidden bg-gradient-to-r from-white to-[#f3f0ff] shadow-sm p-6 sm:p-12 font-roboto">
          {/* Cột 1: Tiêu đề và mô tả */}
          <div className="flex flex-col flex-1 justify-center items-start max-w-[180px] font-roboto">
            <h3 className="text-4xl text-black font-roboto mb-2">Dùng thử</h3>
            <p className="text-lg font-normal font-roboto mt-2 text-black">15 ngày</p>
          </div>
          {/* Cột 2: List */}
          <ul className="flex flex-col gap-4 flex-1 px-8 text-gray-900 text-lg font-normal font-roboto min-w-[360px] max-w-[380px] break-words list-disc list-inside">
            <li>1 Tài khoản/ OA</li>
            <li>Giới hạn báo cáo</li>
            <li>Không kết nối được API</li>
            <li>Không hỗ trợ tư vấn tạo template</li>
          </ul>
          {/* Cột 3: Giá và nút */}
          <div className="flex flex-col items-center justify-center flex-1 min-w-[240px] pr-2 font-roboto">
            <h3 className="text-6xl font-extrabold font-roboto text-black leading-none text-center mb-6">Miễn phí</h3>
            <button className="px-8 py-4 rounded-xl border border-[#a689fa] text-black text-lg flex items-center gap-2 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition font-medium min-w-[180px] focus:outline-none font-roboto">
              Dùng thử ngay
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
        {/* Premium Card */}
        <div className="flex flex-col sm:flex-row items-center justify-between rounded-2xl overflow-hidden bg-[#f6f7f8] shadow-sm p-6 sm:p-12 font-roboto">
          {/* Cột 1: Tiêu đề và mô tả */}
          <div className="flex flex-col flex-1 justify-center items-start max-w-[180px] font-roboto">
            <h3 className="text-4xl font-roboto mb-2">Chính thức</h3>
            <p className="text-lg font-normal font-roboto">1 năm </p>
          </div>
          {/* Cột 2: List */}
          <ul className="flex flex-col gap-4 flex-1 px-8 text-gray-900 text-lg list-disc list-inside min-w-[360px] max-w-[380px] font-roboto">
            <li>Không giới hạn tài khoản</li>
            <li>Sử dụng đầy đủ tính năng</li>
            <li>Kết nối API</li>
            <li>Hỗ trợ tư vấn tạo template</li>
          </ul>
          {/* Cột 3: Giá và nút */}
          <div className="flex flex-col items-center justify-center flex-1 min-w-[220px] font-roboto">
            <div className="flex flex-col items-baseline gap-2 mb-6 font-roboto">
              <span className="text-6xl font-extrabold font-roboto text-black leading-none">2.000.000đ</span>
              <span className="w-full text-2xl text-center font-semibold font-roboto">/năm</span>
            </div>
            <button className="px-8 py-4 rounded-xl bg-gray-900 text-white text-lg flex items-center gap-2 hover:bg-gray-800 transition font-medium min-w-[180px] font-roboto">
              Đăng ký ngay
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* Price Section (ẩn, moved above grid section) */}
    {false && (
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
              <div className="rounded-md inline-block p-[1px]">
                <button className="justify-center text-sm bg-white border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[160px] h-[50px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white">
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
              <h3 className="text-[40px] text-white font-roboto mb-2">Premium</h3>
              <p className="mb-4 font-manrope font-semibold text-white">14 days free period</p>
              <ul className="mb-8 text-base font-manrope text-white space-y-2">
                <li>3 Users</li>
                <li>Unlimited Projects</li>
                <li>Download prototypes</li>
                <li>100 Gb workspace</li>
              </ul>
              <div className="text-4xl text-white font-bold mb-8">$99<span className="text-lg font-normal">/mo</span></div>
              <div className="rounded-md inline-block p-[1px]">
                <button className="justify-center text-sm text-white bg-[#333333] #333333 rounded-[0.65rem] px-4 py-2 hover:bg-[#3ed6c5] hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                  Get started<span className="ml-1">→</span>
                </button>
              </div>                        </div>
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
              <div className="text-4xl text-white font-bold mb-8">$199<span className="text-lg font-normal">/mo</span></div>
              <div className="rounded-md inline-block p-[1px]">
                <button className="justify-center text-sm bg-[#3ed6c5] border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[160px] h-[50px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white">
                  Get started<span className="ml-1">→</span>
                </button>
              </div>
            </div>
            {/* Vertical bar 3 */}
            <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/unlimited.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
        </div>
      </section>
    )}
    {/* PRICING GRID SECTION - HTML chuyển JSX, TO HƠN (ẩn) */}
    {/*false && (
      <div className="min-h-[80vh] w-full sm:min-h-[120vh] flex flex-col md:flex-row items-center justify-center px-2 sm:px-8 md:px-32 py-12 sm:py-24 gap-8 sm:gap-16 bg-gradient-to-r from-white via-white to-purple-200 font-roboto -mt-8">
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-start text-black font-normal text-[32px]  leading-[40px]  max-w-[520px] sm:max-w-none sm:text-[72px] sm:leading-[72px] mb-2">
            Choose the plan<br />that fits your needs
          </h1>
          <div className="mt-8 sm:mt-14 w-full max-w-[1700px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 justify-center justify-items-center px-2 sm:px-4">
            {/* Card 1: Basi}
            <div className="flex flex-col h-[420px] sm:h-[480px] md:h-[555px] bg-white w-[90vw] max-w-[300px] rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-md relative z-10 items-start mx-auto">
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
            {/* Card 2: Premium }
            <div className="flex flex-col h-[420px] sm:h-[480px] md:h-[555px] w-[90vw] max-w-[300px] bg-white rounded-2xl p-6 sm:p-10 shadow-xl relative z-20 border border-gray-200 items-start mx-auto">
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
            {/* Card 3: Unlimited }
            <div className="flex flex-col h-[420px] sm:h-[480px] md:h-[555px] w-[90vw] max-w-[300px] bg-white rounded-2xl p-6 sm:p-10 shadow-md relative z-10 items-start mx-auto border border-gray-200">
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
            {/* Card 4: Ultimate }
            <div className="flex flex-col h-[420px] sm:h-[480px] md:h-[555px] w-[90vw] max-w-[300px] bg-white rounded-2xl p-6 sm:p-10 shadow-md relative z-10 items-start mx-auto border border-gray-200">
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
    )}
    {/* Price Section  */}
   <section
   id="pricing-oa"
   className="relative 0.5xl:mt-20 flex-row max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 py-16">
      <h2 className="text-3xl sm:text-7xl w-full 0.5xl:w-[55%] leading-tight mb-16 font-roboto text-gray-800">
        Bảng giá dịch vụ OA
      </h2>
      <div className="flex flex-col 0.5xl:flex-row items-star justify-center gap-6 w-full">
        {/* Card 1 */}
        <div className="flex flex-row gap-3  h-[555px]">
          <div className="flex-1 bg-white w-[330px] 0.5xl:pt-20 rounded-2xl border border-black p-10 flex flex-col items-start shadow-md relative z-10">
            <h3 className="text-[40px] font-roboto mb-2">Dùng thử</h3>
             <p className="mb-4 font-manrope font-semibold text-gray-800">1 Tháng</p>
             <ul className="mb-8 text-base font-manrope text-gray-800 space-y-2">
                <li>Tương tác cơ bản và nâng cao 2.000 tin Tư Vấn ngoài khung</li>
                <li>Không giới hạn</li>
                <li>Không tích hợp API</li>
            </ul>
            <div className="text-3xl font-bold mt-8">10.000Đ</div>
                <div className="gradient-border rounded-md inline-block p-[1px] mt-8">
                    <button className="justify-center text-sm bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                    Mua ngay<span className="ml-1">→</span>
                    </button>
            </div>
          </div>
          {/* Vertical bar 1 */}
          <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/basic.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-row gap-3  h-[555px]">
          <div className="flex-1 w-[330px] 0.5xl:pt-20 bg-[#bcaaff] rounded-2xl p-10 flex flex-col items-start shadow-xl relative z-20">
            <div className="absolute top-0 left-1/3 -translate-x-1/2 bg-white text-black px-6 py-2 rounded-b-2xl font-semibold text-sm">Phổ biến nhất</div>
            <h3 className="text-[40px] text-black font-roboto mb-2">Nâng cao</h3>
                <p className="mb-4 font-manrope font-semibold text-black">1 năm</p>
                    <ul className="mb-8 text-base font-manrope text-black space-y-2">
                        <li>Tương tác cơ bản và nâng cao 2.000 tin Tư Vấn ngoài khung</li>
                        <li>Có thể gia hạn và mua lại</li>
                        <li>Tích hợp API</li>
                        <li>Chia sẻ OA qua QR & URL</li>
                    </ul>
                <div className="text-3xl text-black font-bold mb-8">99.000Đ<span className="text-3xl text-black font-bold mb-8">/Tháng</span></div>
                <div className="rounded-md inline-block p-[1px]">
                    <button className="justify-center text-sm text-white bg-[#333333] #333333 rounded-[0.65rem] px-4 py-2 hover:bg-[#3ed6c5] hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                        Mua ngay<span className="ml-1">→</span>
                    </button>
                </div>                        
            </div>
          {/* Vertical bar 2 */}
          <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/premium.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-row gap-3  h-[555px]">
          <div className="flex-1 w-[330px] 0.5xl:pt-20 bg-[#3ed6c5] rounded-2xl p-10 flex flex-col items-start shadow-md relative z-10">
           <h3 className="text-[40px] text-black font-roboto mb-2">Premium</h3>
            <p className="mb-4 font-manrope font-semibold text-black">1 năm</p>
                <ul className="mb-8 text-base font-manrope text-black space-y-2">
                    <li>Tương tác cơ bản và nâng cao 9.000 tin Tư Vấn ngoài khung </li>
                    <li>Có thể gia hạn và mua lại</li>
                    <li>Tích hợp API</li>
                    <li>Chia sẻ OA qua QR & URL</li>
                </ul>
                <div className="text-3xl text-black font-bold mb-8">$399.000Đ<span className="text-3xl text-black font-bold mb-8">/Tháng</span></div>
                <div className="gradient-border rounded-md inline-block p-[1px]">
                    <button className="justify-center text-sm bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                        Mua ngay<span className="ml-1">→</span>
                    </button>
                </div>
          </div>
          {/* Vertical bar 3 */}
          <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/unlimited.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
      </div>
    </section>

    {/*Hình ảnh minh hoạ đơn giá ZNS */}
    <section className="mt-4 w-full flex justify-center py-8 bg-white">
  <img
    src="https://stc-oa.zdn.vn/uploads/2025/04/09/96b1056961624f7edfebbfab17910cfa.png"
    alt="Ước tính đơn giá mẫu ZNS"
    className="w-full max-w-[90rem] h-auto rounded-2xl shadow-md"
  />
</section>

    {/* Ước tính đơn giá mẫu ZNS */}
    <section 
    id="zns-estimate"
    className="w-full">
      <div className="w-full min-h-[600px] bg-gradient-to-br from-white via-white to-purple-50 py-12 px-2 sm:px-8 flex flex-col items-center mt-20">
        
        {/* Tiêu đề */}
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 w-full max-w-10xl">
          Ước tính đơn giá mẫu ZNS
        </h2>
        <p className="text-1xl sm:text-2xl text-gray-500 mb-6 w-full max-w-10xl">
          Chọn loại mẫu ZNS và nút thao tác tương ứng để ước tính chi phí dự kiến.
        </p>

        <div className="w-full max-w-7xl min-h-[700px] bg-white/80 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 p-6 md:p-10 border border-gray-200">
          
          {/* Chọn loại mẫu ZNS */}
          <div className="flex-1 min-w-[320px]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-lg text-gray-700">Chọn loại mẫu ZNS</span>
              <a href="#" className="text-sm text-blue-500 hover:underline">Xem bảng giá</a>
            </div>

            {/* Danh sách loại ZNS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {znsTypes.map((type, idx) => {
                const icons = [
                  "icon_zns_table_v2.svg",
                  "icon_zns_otp.svg",
                  "icon_zns_rating.svg",
                  "icon_zns_payment.svg",
                  "icon_zns_voucher.svg",
                ];

                const selectedIcon = (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-200 scale-100">
                    <circle cx="12" cy="12" r="12" fill="#2563eb"/>
                    <path d="M8 12.5L11 15.5L16 10.5"
                          stroke="white" strokeWidth="2.2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                );

                const defaultIcon = (
                  <img src={`https://stc-oa.zdn.vn/resources/zcloud-landing/images/price/${icons[idx]}`}
                      alt={`icon ${type.label}`}
                      className="w-6 h-6 transition-transform duration-200 scale-100"/>
                );

                return (
                  <button
                    key={idx}
                    onClick={() => setSelected(idx)}
                    className="relative group overflow-hidden w-full h-[240px] focus:outline-none"
                    style={{ border: 'none', background: 'none' }}
                  >
                    {/* Background */}
                    <img
                      src={[
                        '/imgdongia/znstuychinh.png',
                        '/imgdongia/znsxacthuc.png',
                        '/imgdongia/znsdanhgia.png',
                        '/imgdongia/znsyeucau.png',
                        '/imgdongia/znsvoucher.png',
                      ][idx]}
                      alt={type.label}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    {/* Nội dung */}
                    <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col items-start">
                      <div className="w-full bg-white bg-opacity-95 px-3 py-1 flex flex-col gap-1 border-t border-blue-100">
                        
                        {/* Icon + Label */}
                        <div className="flex items-center gap-2 mb-1">
                          {selected === idx ? selectedIcon : defaultIcon}
                          <span className="font-semibold text-lg text-gray-900 group-hover:text-blue-600">
                            {type.label}
                          </span>
                        </div>

                        {/* Giá */}
                        <span className="text-base text-blue-700 font-medium self-start">
                          Từ {type.price}đ/ZNS
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Nút thao tác */}
            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nút thao tác 
                <a href="#" className="text-xs text-blue-500 ml-2 hover:underline">Xem bảng giá</a>
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-200">
                <option>Thêm nút thao tác 1</option>
              </select>
            </div>

            {/* Thành phần đặc biệt */}
            <div className="mt-4 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                Thêm thành phần đặc biệt 
                <a href="#" className="text-xs text-blue-500 hover:underline">Xem bảng giá</a>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"/>
                <span className="ml-2 text-gray-600">Thêm hình ảnh</span>
              </label>
            </div>
          </div>

          {/* Xem trước mẫu ZNS */}

              <div className="w-full md:w-[340px] flex-shrink-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Xem trước mẫu ZNS
                </h3>

                {/* Box ngoài màu tím */}
                <div
                className="rounded-2xl p-4 min-h-[900px] flex"
                style={{ backgroundColor: "#c9cffcff" }}
              >
                  {/* Box trong màu trắng */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 flex flex-col gap-2 h-[520px]">

                    <div className="flex items-center">
                      <img
                        src="/svg/logos/zaloaccout.jpg"
                        alt="Zalo Official Account"
                        className="w-50 h-10 object-contain"
                      />
                    </div>
                    <div className="text-base font-semibold text-gray-800 mb-1">
                      {znsContents[selected].title}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      {znsContents[selected].message}
                    </div>
                    {/* Render details for all types except 'Thông tin thanh toán', 'Đánh giá đơn hàng', and 'Gửi khách hàng mã giảm giá' */}
                    {znsContents[selected].title !== 'Thông tin thanh toán' && znsContents[selected].title !== 'Đánh giá đơn hàng' && znsContents[selected].title !== 'Gửi khách hàng mã giảm giá' && (
                      <ul className="text-xs text-gray-700 space-y-0 ">
                        {znsContents[selected].details.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {/* Voucher image for 'Gửi khách hàng mã giảm giá' */}
                    {znsContents[selected].title === 'Gửi khách hàng mã giảm giá' && (
                      <div className="flex justify-center items-center mt-4">
                        <img
                          src="https://zalo.cloud/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Fvoucher_component.52d78d15203287934edd3be2c205b0fc.png&w=1920&q=75"
                          alt="Voucher Component"
                          className="w-full max-w-md rounded-xl shadow-md"
                        />
                      </div>
                    )}
                    {/* 5-star rating UI for 'Đánh giá đơn hàng' */}
                    {znsContents[selected].title === 'Đánh giá đơn hàng' && (
                      <div className="flex justify-center items-center -mt-2">
                        {[1,2,3,4,5].map((star) => (
                          <svg
                            key={star}
                            className="w-10 h-10 mx-1 cursor-pointer text-yellow-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke="currentColor"
                              strokeWidth="1.5"
                              d="M12 17.75l-6.16 3.24 1.18-6.88L2 9.51l6.92-1.01L12 2.75l3.08 5.75 6.92 1.01-5.02 4.6 1.18 6.88z"
                              fill="#fff"
                            />
                          </svg>
                        ))}
                      </div>
                    )}
                    {/* Payment info box for 'Thông tin thanh toán' */}
                    {znsContents[selected].title === 'Thông tin thanh toán' && (
                      <div className="mt-12">
                        <div className="rounded-xl border border-blue-100 bg-blue-50">
                          <div className="flex items-center justify-between px-4 py-2 border-b border-blue-100 bg-white rounded-t-xl">
                            <div className="flex items-center gap-2">
                              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" /></svg>
                              <span className="font-semibold text-blue-700">Thanh toán ngay</span>
                            </div>
                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                          </div>
                          <div className="px-4 py-3">
                            <div className="flex flex-col gap-2">
                              <div className="flex justify-between text-gray-500 text-sm">
                                <span>Ngân hàng</span>
                                <span className="text-blue-700 font-medium">Ngân hàng ZNS</span>
                              </div>
                              <div className="flex justify-between text-gray-500 text-sm">
                                <span>Tên tài khoản</span>
                                <span className="text-blue-700 font-medium">Zalo Notification Service</span>
                              </div>
                              <div className="flex justify-between text-gray-500 text-sm">
                                <span>Số tài khoản</span>
                                <span className="text-blue-700 font-medium">0123456789</span>
                              </div>
                              <div className="flex justify-between text-gray-500 text-sm">
                                <span>Số tiền (VND)</span>
                                <span className="text-blue-700 font-medium">{'<transfer_amount>'}</span>
                              </div>
                              <div className="flex justify-between text-gray-500 text-sm">
                                <span>Nội dung</span>
                                <span className="text-blue-700 font-medium">{'<bank_transfer_note>'}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Phần chi phí dự kiến đã tách ra ngoài khung này */}
                {/* Chi phí dự kiến - tách riêng ngoài khung preview */}
            {/* Chi phí dự kiến - tách riêng ngoài khung preview */}
            <div className="w-full flex flex-col gap-1 text-sm mt-4 px-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Loại mẫu ZNS</span>
                <span className="font-semibold text-gray-800">
                  {znsTypes[selected].price} VND
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Nút thao tác</span>
                <span className="font-semibold text-gray-800">0 VND</span>
              </div>
              <div className="flex justify-between font-bold text-blue-700 text-base mt-2">
                <span>Chi phí dự kiến</span>
                <span>{znsTypes[selected].price} VND/ZNS</span>
              </div>
            </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Pricingplans;
