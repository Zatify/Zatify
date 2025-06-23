import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ServicePage = () => {

    return (
        <div className="relative w-full min-h-screen font-sans">
            {/* Hero Section */}
            <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />
            <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-[450vh] rounded-bl-3xl rounded-br-3xl pointer-events-none z-50" />

            <section className="relative p-4 top-36 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
                <div
                    className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: 'url(https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/typography-bg-min.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Services</h1>
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
                        >Neural</span>
                    </div>


                    {/* Breadcrumb */}
                    {/* Circle div bottom-right */}
                    <div className="absolute left-[255px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    {/* Circle div top-left */}
                    <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    <div className="justify-center items-center w-64 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
                        <span className="text-sm mb-1">Home / Services</span>
                    </div>


                    {/* Decoration-tl */}

                    {/* Circle div top-right */}
                    <div className="hidden md:block absolute left-[95px] top-[-1px] w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
                    {/* Circle div bottom-left */}
                    <div className="hidden md:block absolute left-[-1px] top-[63px]  w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
                    <div className="hidden md:block justify-center items-center w-24 h-16 absolute left-0 top-0 bg-white rounded-br-3xl px-8 py-4 text-black text-base font-sans flex-col"></div>

                    {/* Decoration-br */}
                    {/* Circle div top-right */}
                    <div className="hidden md:block absolute right-[69px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
                    {/* Circle div bottom-left */}
                    <div className="hidden md:block absolute right-[-11px] top-[231px]  w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
                    <div className="hidden md:block justify-center items-center h-72 w-20 absolute right-0 bottom-0 bg-white rounded-tl-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex-col shadow-md"></div>
                </div>
            </section>


            {/* Services Cards Section */}
            <section className="relative mt-64 px-6 max-w-full mx-auto mb-20">
                <div className=" flex flex-col 0.5xl:flex-row justify-center gap-6 ">
                    {/* Card 1 */}
                    <div className="md:col-span-2 rounded-3xl md:row-span-2 bg-gradient-to-br from-cyan-300 via-cyan-500 to-cyan-700 col-span-full relative 0.5xl:h-[500px] h-[378px] w-[456px]">
                        <div
                            className="rounded-3xl overflow-hidden cursor-pointer group bg-cover bg-center h-full"
                            style={{ backgroundImage: "url('https://demo.artureanec.com/themes/aiero/wp-content/uploads/2024/12/sphere_4-1-min.png ')" }}
                        >
                            <div className="absolute inset-0 p-6 flex flex-col justify-end rounded-3xl">
                                <h4 className="text-white text-xl font-semibold mb-2">Zalo Official Account - ZOA</h4>
                                <p className="text-white text-sm w-[90%] mb-8">
                                    Dịch vụ gửi thông báo chăm sóc khách hàng đến số điện thoại khách hàng trên Zalo
                                </p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-3xl rounded-br-[16px]">
                            {/* Circle div top-right */}
                            <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>

                            {/* Circle div bottom-left */}
                            <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>

                            <div className="bg-black rounded-[18px] p-2 hover:bg-gray-700 transition cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="md:col-span-2 md:row-span-2 col-span-full rounded-3xl rounded-br-[0px]  overflow-hidden relative cursor-pointer group bg-[#ad8de0] p-6 flex flex-col justify-between 0.5xl:h-[500px] h-[378px] w-[456px]">
                        <div>
                            <h4 className="text-white text-xl font-semibold mb-4">Zalo Notification Service ZNS</h4>
                            <p className="text-white text-sm mb-4">
                                Tài khoản chính thức của doanh nghiệp trên nền tảng Zalo, giúp doanh nghiệp kết nối và tương tác với người dùng Zalo
                            </p>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-3xl rounded-br-0]">
                            {/* Circle div top-right */}
                            <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>

                            {/* Circle div bottom-left */}
                            <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>

                            <div className="bg-black rounded-[18px] p-2 hover:bg-gray-700 transition cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                        {/* Replace globe SVG with dotted circles and 3 X letters */}
                        <svg className="absolute bottom-6 left-2 w-72 h-40 opacity-80" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Dotted circles pattern */}
                            <g opacity="0.6" fill="#FFFFFF">
                                {Array.from({ length: 6 }).map((_, row) =>
                                    Array.from({ length: 8 }).map((_, col) => (
                                        <circle
                                            key={row + '-' + col}
                                            cx={10 + col * 18}
                                            cy={10 + row * 18}
                                            r="2"
                                        />
                                    ))
                                )}
                            </g>
                            {/* 3 X letters replaced with image */}
                            <image
                                href="/svg/3x.png"
                                x="0"
                                y="40"
                                width="140"
                                height="80"
                                opacity="0.8" />
                        </svg>
                    </div>

                    {/* Card 3 */}
                    <div className="md:col-span-2 md:row-span-1 col-span-full gap-4 rounded-3xl rounded-br-[0px] overflow-hidden relative cursor-pointer group flex flex-col h-[500px] w-[456px]">
                        {/* Top part */}
                        <div className="bg-blue-50 rounded-3xl p-6 relative flex-[0.3] flex items-center justify-center">
                            <h4 className=" text-black text-xl font-semibold mb-2 absolute left-20 top-4 -translate-x-1/2">Zalo Ads</h4>
                            <img
                                src="https://demo.artureanec.com/themes/aiero/wp-content/uploads/2024/12/Group-18418.png"
                                alt="Zalo Ads"
                                className="absolute top-0 right-0 max-h-32  w-auto object-contain "
                            />
                        </div>
                        {/* Bottom part */}
                        <div className=" rounded-3xl p-6 flex flex-col justify-between flex-[0.7] relative text-white">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#bcaaff] via-[#7ec8e3] to-[#a0c4ff] opacity-80 rounded-bl-3xl rounded-3xl pointer-events-none"></div>

                            <div className="relative z-10">
                                <h4 className="text-xl font-semibold mb-2">Zalo Mini App</h4>
                                <p>
                                    Những App nhỏ chạy trực tiếp trên nền tảng Zalo, một giải pháp hiệu quả dành cho doanh nghiệp.
                                </p>
                            </div>
                            <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-3xl">
                                {/* Circle div top-right */}
                                <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>

                                {/* Circle div bottom-left */}
                                <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>

                                <div className="bg-black rounded-[18px] p-2 hover:bg-gray-700 transition cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                            <img
                                src="https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/communication-care-366x206.jpg"
                                alt="Background"
                                className="absolute bottom-0 left-0 w-full h-full object-cover rounded-3xl -z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="labelrunning w-full h-[115px] overflow-hidden flex items-center relative">
                <div className="marquee flex whitespace-nowrap" style={{ animation: 'marquee 15s linear infinite' }}>
                    <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
                        / Neural Networks in shaping the future of technology.
                    </span>
                    <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
                        / Neural Networks in shaping the future of technology.
                    </span>
                </div>
            </section>

            {/* features Section */}
            <section className="relative 0.5xl:mt-20 flex-row max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 py-16">
                <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-48 rounded-bl-3xl rounded-br-3xl pointer-events-none opacity-60" />
                {/* Heading */}
                <h2 className="text-3xl sm:text-7xl w-full 0.5xl:w-[55%] leading-tight mb-16 font-roboto text-gray-800">
                    The unique selling
                    points &amp; advantages
                    of our service
                </h2>

                {/* Features grid */}
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 gap-x-12">

                    {/* Feature 1 */}
                    <article className="flex flex-col items-start space-y-4 max-w-xs">
                        <span className="material-icons-outlined text-indigo-500 text-4xl">integration_instructions</span>
                        <h3 className="text-[20px] font-semibold font-manrope">AI Technology</h3>
                        <p className="text-gray-600 leading-relaxed font-manrope">
                            Emphasize the expertise and knowledge of your team in developing and implementing neural networks
                        </p>
                    </article>

                    {/* Feature 2 */}
                    <article className="flex flex-col items-start space-y-4 max-w-xs">
                        <span className="material-icons-outlined text-indigo-500 text-4xl">grid_view</span>
                        <h3 className="text-[20px] font-semibold font-manrope">Tailored solutions</h3>
                        <p className="text-gray-600 leading-relaxed font-manrope">
                            Mention your ability to customize solutions based on specific business requirements
                        </p>
                    </article>

                    {/* Feature 3 */}
                    <article className="flex flex-col items-start space-y-4 max-w-xs">
                        <span className="material-icons-outlined text-indigo-500 text-4xl">smart_display</span>
                        <h3 className="text-[20px] font-semibold font-manrope">Cutting-edge technology</h3>
                        <p className="text-gray-600 leading-relaxed font-manrope">
                            Highlight your use of the latest tools and techniques in neural network development
                        </p>
                    </article>

                    {/* Feature 4 */}
                    <article className="flex flex-col items-start space-y-4 max-w-xs">
                        <span className="material-icons-outlined text-indigo-500 text-4xl">shield</span>
                        <h3 className="text-[20px] font-semibold font-manrope">Modern development</h3>
                        <p className="text-gray-600 leading-relaxed font-manrope">
                            Showcase successful case studies or client testimonials that demonstrate the effectiveness of your services
                        </p>
                    </article>

                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative z-50 flex p-6 flex-col md:mt-24 md:flex-row gap-6 rounded-3xl h-auto overflow-hidden">
                {/* Left Card - Testimonial */}
                <div className="relative bg-[#1f1f1f] rounded-3xl text-gray-300 p-10 md:w-[60%] md:h-[790px] h-[472px] flex flex-col justify-around items-center">
                    <div className='0.5xl:w-[80%] mb-10 0.5xl:mb-0'>
                        <div className="text-4xl text-white ">❝</div>
                        <p className="text-[18px] 0.5xl:text-2xl text-white leading-relaxed font-roboto">
                            Working with Aiero has been a game-changer for our business. Their AI
                            solutions have revolutionized our operations, enabling us to automate
                            repetitive tasks and make data-driven decisions with ease. We couldn't
                            be happier with the results."
                        </p>
                        <p className=" text-[14px] 0.5xl:text-[16px] w-[80%] font-manrope mt-10 0.5:mt-20">
                            - John Anderson, CEO of XYZ Company
                        </p>
                    </div>
                    {/* Arrows */}
                    <div className="flex items-center gap-4 absolute bottom-0 left-[30%] 0.5xl:left-[20%] transform -translate-x-1/2 bg-white rounded-t-[32px] px-4 py-2">
                        {/* Circle div bottom-right */}
                        <div class="absolute bottom-[-4px] right-[-31px]  w-8 h-8 bg-white mask-rounded-hole-testimonial-right"></div>

                        {/* Circle div bottom-left */}
                        <div class="absolute bottom-[-4px] left-[-28px]  w-8 h-8 bg-white mask-rounded-hole-testimonial-left"></div>
                        <button className="w-12 h-12 flex items-center justify-center rounded-l-[32px] rounded-r-none font-thin text-black text-[30px] bg-white hover:text-cyan-400">
                            ←
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center rounded-r-[32px] rounded-l-none font-thin text-black text-[30px] bg-white hover:text-cyan-400">
                            →
                        </button>
                    </div>
                </div>

                {/* Right Card - Overview */}
                <div className="text-white p-10 md:w-[40%] rounded-3xl md:h-[790px] h-[472px] flex flex-col justify-around"
                    style={{ backgroundImage: "url('/svg/Testimonial.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h2 className="0.5xl:text-6xl text-4xl leading-snug mb-8 font-roboto">
                        Discover what our clients have to say about our AI solutions
                    </h2>
                    <div>
                        <p className="outlined-text mb-1">250+</p>
                        <p className="text-lg text-white">Happy clients</p>
                    </div>
                </div>
            </section>

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
                                <button className="justify-center text-sm bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                                    Get started<span className="ml-1">→</span>
                                </button>
                            </div>
                        </div>
                        {/* Vertical bar 1 */}
                        <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('https://demo.artureanec.com/themes/aiero/wp-content/uploads/2024/12/abstract-geometric-wavy-min.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
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
                        <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('https://demo.artureanec.com/themes/aiero/wp-content/uploads/2024/12/abstract-3d-rendering-geometric-surface-2-min.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
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
                            <div className="gradient-border rounded-md inline-block p-[1px]">
                                <button className="justify-center text-sm text-white bg-[#3ed6c5]  rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                                    Get started<span className="ml-1">→</span>
                                </button>
                            </div>
                        </div>
                        {/* Vertical bar 3 */}
                        <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('https://demo.artureanec.com/themes/aiero/wp-content/uploads/2024/12/structure-with-wavy-blue-elements-min.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>
                </div>
            </section>

            {/* Explore Services Section */}
            <section className="relative mt-24 mb-24 px-0 max-w-none w-full flex justify-center items-center min-h-[420px] h-[70vh] bg-white overflow-hidden">
                <div className="absolute inset-0 w-[0%] 0.5xl:w-[18%]  bg-gradient-to-r from-[#bcaaff] via-[#a0c4ff] to-[#fff] opacity-10 pointer-events-none"></div>
                {/* Pattern bên trái */}
                <div className="absolute left-[-140px] top-0 h-full w-0 sm:w-auto pointer-events-none select-none z-0 flex items-center">
                    <img src="/svg/elements-X.png" alt="Pattern X" className="h-full w-full opacity-90" />
                </div>
                {/* Nội dung chính */}
                <div className="relative z-10 flex flex-col items-center w-full">
                    <h2 className="text-5xl sm:text-6xl w-auto 2xl:text-8xl xl:text-8xl font-light leading-tight text-center font-roboto mb-10 max-w-5xl">
                        Khám phá các dịch vụ của Zatify ngay để nắm bắt được toàn bộ{' '}
                        <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-normal">
                            Hệ sinh thái Zalo
                        </span>
                    </h2>
                    {/* Logos */}
                    <div className="hidden sm:flex flex-row items-center justify-center gap-12 mt-2 opacity-80">
                        {[
                            { src: 'svg/logos/zalozns.jpg', alt: 'Zalo ZNS' },
                            { src: 'svg/logos/zaloaccout.jpg', alt: 'Zalo Offical Account' },
                            { src: 'svg/logos/zaloads.jpg', alt: 'Zalo ADS' },
                            { src: 'svg/logos/miniapp.jpg', alt: 'Zalo Miniapp' },
                        ].map((logo) => (
                            <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-20" />
                        ))}
                    </div>
                    <div className="sm:hidden w-full">
                        <div className="swiper-container-wrapper">
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
                                loop={true}
                                className="w-full"
                            >
                                {[
                                    { src: 'svg/logos/zalozns.jpg', alt: 'Zalo ZNS' },
                                    { src: 'svg/logos/zaloaccout.jpg', alt: 'Zalo Offical Account' },
                                    { src: 'svg/logos/zaloads.jpg', alt: 'Zalo ADS' },
                                    { src: 'svg/logos/miniapp.jpg', alt: 'Zalo Miniapp' },
                                ].map((logo) => (
                                    <SwiperSlide key={logo.alt} className="flex justify-center items-center w-full">
                                        <img src={logo.src} alt={logo.alt} className="h-20 mx-auto" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="custom-swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
