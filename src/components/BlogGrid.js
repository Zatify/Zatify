import React from 'react';
import { useNavigate } from 'react-router-dom';

const blogCards = [
    {
        id: 1,
        img: "/svg/bloggrid/card1.jpg",
        title: "Zalo OA xác thực là gì? Hướng dẫn liên kết Zalo OA vào tài khoản ZCA",
        date: "Aug 15, 2022 / 8:02 am",
        desc: "Doanh nghiệp cần xác thực Zalo Official Account (Zalo OA) để có thể liên kết vào tài khoản ZCA "
    },
    {
        id: 2,
        img: "/svg/bloggrid/card2.jpg",
        title: "Zalo Notification Service (ZNS) – Giải pháp chăm sóc khách hàng trực tuyến từ Zalo",
        date: "Aug 11, 2021 / 7:50 am",
        desc: "Tổng quan về dịch vụ ZNS của Zalo – Gửi tin chăm sóc khách hàng giá tiết kiệm.				"
    },
    {
        id: 3,
        img: "/svg/bloggrid/card3.jpg",
        title: "4 điểm nổi bật trong tính năng của ZNS",
        date: "Aug 11, 2021 / 3:21 am",
        desc: "  Nằm trong bộ giải pháp dành cho nhóm tài khoản Zalo Official Account, ZNS sở hữu nhiều ưu điểm nổi bật giúp doanh nghiệp xây dựng kênh giao tiếp mới với khách hàng ngay trên Zalo."
    },
    {
        id: 4,
        img: "/svg/bloggrid/card4.jpg",
        title: "Ứng dụng ZNS nâng cao trải nghiệm mua sắm thời trang",
        date: "Dec 27, 2023 / 4:40 am",
        desc: "Ngành kinh doanh thời trang tối ưu trải nghiệm trong hành trình mua sắm khách hàng với Zalo Notification Service (ZNS)"
    },
    {
        id: 5,
        img: "/svg/bloggrid/card5.jpg",
        title: "Phân biệt Thông báo ZNS và Tin UID",
        date: "Jun 3, 2024 / 4:57 am",
        desc: "Cách phân biệt và nhận biết giữa Thông báo ZNS & Tin UID"
    },
    {
        id: 6,
        img: "/svg/bloggrid/card6.jpg",
        title: "Ứng dụng ZNS trong lĩnh vực kinh doanh Trang sức",
        date: "Dec 20, 2023 / 3:47 am",
        desc: "Sử dụng Zalo Notification Service (ZNS) để tối ưu hóa trải nghiệm mua hàng tại các hệ thống, cửa hàng kinh doanh trang sức"
    },
    {
        id: 7,
        img: "/svg/bloggrid/card7.jpg",
        title: "Ứng dụng ZNS trong lĩnh vực kinh doanh ô tô",
        date: "Nov 20, 2023 / 8:48 am",
        desc: "Sử dụng Zalo Notification Service (ZNS) để tối ưu hóa trải nghiệm khách hàng trong trong thị trường kinh doanh xe ô tô"
    },
    {
        id: 8,
        img: "/svg/bloggrid/card8.jpg",
        title: "Ứng dụng gửi thông báo ZNS trong lĩnh vực Giáo dục",
        date: "Nov 13, 2023 / 3:59 am",
        desc: "Tối ưu thông tin học tập đến Học sinh và Phụ huynh với thông báo ZNS. Dưới đây là một số nội dung thông báo ZNS được ứng dụng trong lĩnh vực giáo dục"
    },
    {
        id: 9,
        img: "/svg/bloggrid/card9.jpg",
        title: "Ngành y tế ứng dụng ZNS như thế nào?",
        date: "Nov 9, 2023 / 3:23 am",
        desc: "Ứng dụng ZNS để gửi thông báo lịch khám, kết quả xét nghiệm, tặng voucher, khảo sát dịch vụ y tế"
    },
    {
        id: 10,
        img: "/svg/bloggrid/card10.jpg",
        title: "Thông báo cước phí dịch vụ sinh hoạt bằng ZNS",
        date: "Nov 9, 2023 / 3:04 am",
        desc: "ZNS là một giải pháp tối ưu trong việc gửi thông báo cước phí đến hàng triệu người dùng."
    },
    {
        id: 11,
        img: "/svg/bloggrid/card11.jpg",
        title: "Gửi thông báo liên quan đến hoạt động tổ chức sự kiện bằng ZNS",
        date: "Nov 8, 2023 / 10:15 am",
        desc: "Một số mẫu thông báo ZNS hiện đang được ứng dụng trong tổ chức sự kiện"
    },
    {
        id: 12,
        img: "/svg/bloggrid/card12.jpg",
        title: "Gửi thông báo trong lĩnh vực E-commerce bằng ZNS",
        date: "Nov 8, 2023 / 10:01 am",
        desc: "Một số ví dụ về cách ZNS được ứng dụng trong ngành e-commerce:"
    },
    {
        id: 13,
        img: "/svg/bloggrid/card13.jpg",
        title: "Gửi thông báo giao vận bằng ZNS",
        date: "Nov 8, 2023 / 9:39 am",
        desc: "ZNS (Zalo Notification Service) là một giải pháp toàn diện giúp doanh nghiệp tối ưu hóa và nâng cao trải nghiệm của người dùng đặc biệt là trong ngành giao vận. Vậy đâu là những yếu tố giúp ZNS được ưa chuộng và sử dụng rộng rãi trong ngành hàng này?   "
    },
    {
        id: 14,
        img: "/svg/bloggrid/card14.jpg",
        title: "Use Case: Các doanh nghiệp quản lí chung cư, căn hộ ứng dụng ZNS để gửi thông báo đến cư dân như thế nào?S",
        date: "Oct 14, 2024 / 6:48 am",
        desc: "Ngày nay tại các thành phố lớn, đông dân cư, nhu cầu mua và ở chung cư ngày càng nhiều. Nhiều khu chung cư, căn hộ có sức chứa lên đền hàng ngàn hộ dân và hàng chục ngàn cư dân sinh sống. Điều nàu đòi hỏi các doanh nghiệp quản lí chung cư, căn hộ cần có những công cụ, hệ thống công nghệ để hộ trợ quản lí một cách hiệu quả. Trong đó hoạt động tương tác và thông báo từ Ban quản lí đến cư dân là một trong những yếu tố quan trọng để tăng hiệu quả quản lí. Việc tìm kiếm và ứng dụng một kênh thông báo, tương tác đến cư dân được nhiều doanh nghiệp chú trọng và đầu tư. Trong số đó, Zalo trở thành một nền tảng được ưu tiên sử dụng. Và Zalo Notification Service (ZNS) là một giải pháp hiệu quả, giúp ban quản lí dễ dàng tương tác với cư dân qua nền tảng Zalo.   Dưới đây là một số cách mà ZNS có thể được ứng dụng trong việc thông báo quản lí cư dân."
    },
    {
        id: 15,
        img: "/svg/bloggrid/card15.jpg",
        title: "Ngành đường sắt ứng dụng hệ sinh thái Zalo tăng cường trải nghiệm cho hàng khách",
        date: "Aug 28, 2024 / 4:33 am",
        desc: "Một trong số yếu tố tác động lớn đến sự “hồi sinh” này là chiến lược chăm sóc khách hàng từ trải nghiệm số. Đây chính là cơ hội giúp Đường sắt VN (trở lại đường ray) và chứng minh vị thế"
    },
    {
        id: 16,
        img: "/svg/bloggrid/card16.jpg",
        title: "Ứng dụng ZNS trong lĩnh vực kinh doanh nhà hàng (F&B)",
        date: "Mar 14, 2024 / 7:46 am",
        desc: "Trong lĩnh vực F&B - Kinh Doanh Nhà Hàng, việc giữ chân khách hàng và tạo ra trải nghiệm tốt trở nên khó khăn hơn bao giờ hết. Trong bối cảnh này, Zalo Notification Service (ZNS) đã trở thành một công cụ đơn giản không chỉ giúp gửi các thông báo cần thiết đến khách hàng mà còn là kênh hiệu quả để tăng cường tương tác, chăm sóc Khách hàng, từ đó tạo trải nghiệm tốt để tăng doanh thu và lòng trung thành của Khách hàng cũ.",
    },
    {
        id: 17,
        img: "/svg/bloggrid/card17.jpg",
        title: "BEST Express tối ưu hoạt động giao hàng nhờ Zalo Notification Service",
        date: "Feb 2, 2024 / 7:58 am",
        desc: "Sau một năm triển khai hình thức gửi thông báo từ tài khoản Zalo OA của doanh nghiệp - Zalo Notification Service, BEST Express ghi nhận nhiều số liệu ấn tượng.",
    },
    {
        id: 18,
        img: "/svg/bloggrid/card18.jpg",
        title: "Cách sử dụng và ứng dụng của mẫu tin ZNS xác thực",
        date: "Jul 18, 2024 / 9:20 am",
        desc: "Với tinh thần luôn luôn lắng nghe và thấu hiểu nhu cầu của khách hàng muốn trải nghiệm mua sắm thuận tiện và dễ dàng, đội ngũ nghiên cứu và phát triển sản phẩm Zalo Notification Service (ZNS) chính thức ra mắt mẫu ZNS Xác thực như một công cụ tối ưu hỗ trợ người dùng bảo vệ tài khoản và nâng cao trải nghiệm của mình. "
    },
    {
        id: 19,
        img: "/svg/bloggrid/card19.jpg",
        title: "Báo xấu mẫu thông báo ZNS được ghi nhận khi nào?",
        date: "Sep 24, 2025 / 10:54 am",
        desc: "Một trong số yếu tố tác động lớn đến sự “hồi sinh” này là chiến lược chăm sóc khách hàng từ trải nghiệm số. Đây chính là cơ hội giúp Đường sắt VN (trở lại đường ray) và chứng minh vị thế"
    },
    {
        id: 20,
        img: "/svg/bloggrid/card20.jpg",
        title: "Làm thế nào để giảm tỷ lệ báo xấu (report) khi gửi mẫu thông báo ZNS",
        date: "Nov 25, 2022 / 3:31 am",
        desc: "Mẫu thông báo ZNS khi gửi đến người nhận nếu bị báo xấu (report) sẽ ảnh hưởng đến quyền lợi gửi ZNS của doanh nghiệp sau đó   "
    },

];

const BlogGrid = () => {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const cardsPerPage = 9;
    const totalPages = Math.ceil(blogCards.length / cardsPerPage);
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const showCards = blogCards.slice(start, end);
    const gridRef = React.useRef(null);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        setTimeout(() => {
            if (gridRef.current) {
                const top = gridRef.current.getBoundingClientRect().top + window.scrollY - 150;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }, 0);
    };

    return (
        <>
            {/* Hero Section */}
            <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />


            <section className="relative p-4 top-36 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
                <div
                    className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: 'url(svg/background/contact.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Blog</h1>
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


                    {/* Breadcrumb */}
                    {/* Circle div bottom-right */}
                    <div className="absolute left-[255px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    {/* Circle div top-left */}
                    <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    <div className="justify-center items-center w-64 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
                        <span className="text-sm mb-1">Tin tức / Blog</span>
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

            {/* Blog Section */}
            <section className="w-full flex flex-col items-center mt-64 mb-24">
                <div ref={gridRef} className="flex flex-col items-center w-full max-w-7xl mx-auto">
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full justify-center"
                    >
                        {showCards.map((card, idx) => {

                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-3xl shadow-md overflow-hidden w-full flex flex-col relative group min-h-[450px] cursor-pointer"
                                    onClick={() => navigate(`/view-blog/bai${card.id}`)} // Thêm dòng này
                                >
                                    <div className="relative w-full flex-[0.65] overflow-hidden rounded-3xl">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                                            style={{ willChange: 'transform' }}
                                        />
                                        {/* Date and holes */}
                                        <div className="absolute left-1/3 bottom-0 -translate-x-1/2 flex items-end z-20">
                                            <div className="relative w-8 h-8 left-1 top-1.5 bg-white mask-rounded-hole-testimonial-left"></div>
                                            <div className="text-xs text-gray-500 w-40 h-12 flex justify-center items-center bg-white rounded-t-3xl z-50">
                                                {card.date}
                                            </div>
                                            <div className="relative w-8 h-8 right-[1px] top-1.5 bg-white mask-rounded-hole-testimonial-right"></div>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-[0.45] ml-2 0.5xl:ml-4">
                                        <h3 className="text-[22px] 0.5xl:text-[25px] mb-3 text-gray-900 font-roboto font-normal leading-snug line-clamp-3"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}
                                        >
                                            {card.title}
                                        </h3>
                                        <div className="text-xs text-gray-400 mt-auto line-clamp-2"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}
                                        >
                                            {card.desc}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Pagination Section */}
            <section className="w-full max-w-7xl mx-auto flex justify-center items-center mt-8 mb-16">
                <div className="flex gap-2">
                    {page > 1 && (
                        <button
                            className="border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none flex items-center gap-2 focus:outline-none transition-colors duration-300 text-[#222] bg-white"
                            style={{ boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)', borderWidth: 1.5 }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#222'; }}
                            onClick={() => handlePageChange(page - 1)}
                        >Previous <span aria-hidden>↗</span></button>
                    )}
                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            className={`border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none focus:outline-none transition-colors duration-300
                ${page === idx + 1 ? 'text-white' : 'text-[#222]'}
              `}
                            style={{
                                boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)',
                                borderWidth: 1.5,
                                background: page === idx + 1
                                    ? 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'
                                    : 'white',
                            }}
                            onMouseEnter={e => { if (page !== idx + 1) e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; if (page !== idx + 1) e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { if (page !== idx + 1) e.currentTarget.style.background = 'white'; if (page !== idx + 1) e.currentTarget.style.color = '#222'; }}
                            onClick={() => handlePageChange(idx + 1)}
                        >{idx + 1}</button>
                    ))}
                    {page < totalPages && (
                        <button
                            className="border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none flex items-center gap-2 focus:outline-none transition-colors duration-300 text-[#222] bg-white"
                            style={{ boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)', borderWidth: 1.5 }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#222'; }}
                            onClick={() => handlePageChange(page + 1)}
                        >Next <span aria-hidden>↗</span></button>
                    )}
                </div>
            </section>
            {/* End Blog Section */}
        </>
    );
};

export default BlogGrid;

