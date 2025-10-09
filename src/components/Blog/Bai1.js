import react from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../../contexts/MenuContext';

const Bai1 = () => {
    const navigate = useNavigate();
    const { setActiveIndex } = useMenu();

    const handleBangGiaClick = (e) => {
        e.preventDefault();
        setActiveIndex(3); 
        const pathname = '/pricing';
        const hash = 'pricing-oa';
        navigate(pathname);
        setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
                const y = window.pageYOffset + el.getBoundingClientRect().top - 120;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 150);
    };
    return (
        <main className="mt-40 max-w-[85rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Zalo OA xác thực là gì?
                        Hướng dẫn liên kết Zalo OA vào tài khoản ZCA
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Aug 15, 2022 8:02 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card1.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <p>
                    Để sử dụng tối ưu các tính năng của Zalo Official Account (Zalo OA), Doanh nghiệp cần xác thực tài khoản OA cũng như tiến hành mua Gói dịch vụ tương ứng. Đây cũng là một trong những điều kiện sử dụng dịch vụ Zalo Notification Service (ZNS).
                </p>
                <p>
                    Vậy thế nào là một OA đã xác thực? Và làm thế nào để liên kết OA vào tài khoản ZCA? Trong bài viết này, đội ngũ hỗ trợ khách hàng của Zalo Cloud sẽ hướng dẫn quý khách chi tiết về những câu hỏi trên để doanh nghiệp có thể thực hiện nhanh chóng và tiếp tục các bước sau đó để tiến hành gửi ZNS.                </p>
                <h2 className='font-bold text-2xl'>Zalo Official Account (OA) xác thực là gì?</h2>
                <p>
                    OA xác thực là tài khoản OA được xác thực bởi Zalo, hiển thị dấu tích xanh và được ưu tiên hiển thị và tăng độ tin cậy với khách hàng.
                </p>
                <ul className='ml-8 list-disc space-y-1'>
                    <li> Dành cho các Doanh nghiệp, Hộ kinh doanh đã nộp Giấy chứng nhận đăng ký kinh doanh đã được xác thực.</li>
                    <li> Sử dụng được các tính năng của OA: Quảng cáo, Nhắn tin, Broadcast và Bài viết.</li>
                    <li> Có thể nâng cấp hạn mức tính năng đang có và mở khóa các tính năng nâng cao: Chatbot, Gọi thoại và kết nối API.</li>
                </ul>
            </div>
            {/* Ảnh minh họa bên dưới */}
            <div className="flex justify-center mb-8">
                <img
                    src="/svg/bloggrid/bai1/image1.jpg"
                    alt="Zalo OA minh họa"
                    className="rounded-lg shadow max-w-full"
                />
            </div>
            {/* Bảng giá và tính năng */}
            <div className="prose font-manrope max-w-none space-y-4">
                <h2 className='font-bold text-2xl'>Các gói dịch vụ dành cho OA xác thực</h2>
                <p>
                    <strong>Gói miễn phí</strong> Bất kỳ Doanh nghiệp, Thương hiệu, Hộ kinh doanh muốn tạo tài khoản OA xác thực để trải nghiệm các tính năng, dịch vụ cơ bản của Zalo OA.
                </p>
                <p>
                    <strong>Gói trả phí:</strong> bao gồm:
                </p>
                <ul className='ml-8 list-disc space-y-1'>
                    <li>Gói Dùng thử: Dành cho các OA muốn thử nghiệm đầy đủ các tính năng.</li>
                    <li>Gói Nâng cao: Dành cho các OA là các doanh nghiệp vừa và nhỏ, có nhu cầu truyền thông và chăm sóc khách hàng. Mở ra nhiều cơ hội để OA xác thực chủ động tiếp cận khách hàng tiềm năng trong hệ sinh thái Zalo với hơn 70 triệu người dùng.</li>
                    <li>Gói Premium: Được thiết kế linh hoạt theo nhu cầu của các doanh nghiệp có quy mô lớn.</li>
                </ul>
                <p>Nhằm mang lại nhiều giá trị, đảm bảo lợi ích và trải nghiệm cho doanh nghiệp và khách hàng của doanh nghiệp, từ ngày <strong>20/06/2023, chính sách dịch vụ tài khoản Zalo OA Doanh nghiệp</strong> sẽ có những thay đổi chính như sau:</p>
                <img
                    src="/svg/bloggrid/bai1/image2.jpg"
                    alt="Bảng giá OA xác thực"
                    className="max-w-full"
                />
                <p>
                    Chi tiết quyền lợi vui lòng tham khảo <strong>Bảng giá tại <a
                        className='text-purple-800 underline'
                        href="/pricing#pricing-oa"
                        onClick={handleBangGiaClick}
                    >đây</a>.</strong>
                </p>
                <p>
                    <strong>Lưu ý:</strong> Zalo Notification Service (ZNS) là dịch vụ gửi thông báo chăm sóc khách hàng qua API tới số điện thoại đang sử dụng Zalo. Vì vậy, doanh nghiệp cần mua gói OA để tích hợp API và tiến hành gửi ZNS.
                </p>

            </div>
        </main>
    );
};

export default Bai1;