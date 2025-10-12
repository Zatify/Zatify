import react from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../../contexts/MenuContext';

const Bai2 = () => {
    const navigate = useNavigate();
    const { setActiveIndex } = useMenu();

    const handleBangGiaClick = (e) => {
        e.preventDefault();
        setActiveIndex(3);
        const pathname = '/pricing';
        const hash = 'zns-estimate';
        navigate(pathname);
        setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
                const y = window.pageYOffset + el.getBoundingClientRect().top - 40;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 150);
    };
    return (
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Zalo Notification Service (ZNS) – Giải pháp chăm sóc khách hàng trực tuyến từ Zalo
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Aug 11, 2021 7:50 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card2.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <h2 className='font-bold text-2xl'>Zalo Notification Service là gì?</h2>
                <p>
                    Zalo Notification Service (ZNS) là dịch vụ gửi thông báo chăm sóc khách hàng trên Zalo. Dịch vụ nằm
                    trong bộ giải pháp dành cho nhóm tài khoản Official Account (OA). Thông qua kênh ZNS, các tài khoản OA có thể gửi thông báo,
                    thông tin giao dịch và các thông tin chăm sóc khách hàng khác đến tất cả khách hàng có sử dụng Zalo.
                </p>
                <p>
                    ZNS vận hành theo phương thức gọi API giữa các máy chủ. Với độ mở của phương thức này,
                    ZNS có thể dễ dàng được kết nối và tương thích với hạ tầng công nghệ sẵn có của các doanh nghiệp lớn. Với các doanh nghiệp quy mô vừa và nhỏ,
                    mạng lưới đối tác đang liên tục được phát triển của ZNS giúp các doanh nghiệp có thể nhanh chóng thiết lập và đưa vào sử dụng.
                </p>
                <h2 className='font-bold text-2xl'>Ứng dụng của ZNS dành cho doanh nghiệp</h2>
                <p>
                    Với mục đích cung cấp một kênh thông tin chính thống trên Zalo cho doanh nghiệp,
                    ZNS hỗ trợ việc gửi thông báo cho các hoạt động giao dịch, chăm sóc khách hàng, hậu mãi,…
                </p>
                <p>
                    Một số ứng dụng nổi bật và phổ biến của ZNS ở các ngành hàng như:
                </p>
            </div>
            {/* Ảnh minh họa bên dưới */}
            <div className="flex justify-center mb-8">
                <img
                    src="/svg/bloggrid/baiviet/image2_1.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
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
                    src="/svg/bloggrid/baiviet/image2_2.webp"
                    alt="Bảng giá OA xác thực"
                    className="max-w-full"
                />
                <p>Để đảm bảo hiệu quả gửi thông báo và tính chính thống của doanh nghiệp trên Zalo, nội dung ZNS được kiểm duyệt chặt chẽ.</p>
                <h2 className='font-bold text-2xl'>4 ưu điểm của ZNS dành cho doanh nghiệp</h2>
                <h3 className='font-bold text-lg'>1. Tiếp cận tệp khách hàng rộng khắp Việt Nam</h3>
                <p>
                    Zalo hiện tại là một trong những ứng dụng giao tiếp trực tuyến nội địa phổ biến nhất Việt Nam. Với lợi thế của một sản phẩm trực thuộc Zalo,
                    ZNS cho phép các doanh nghiệp tiếp cận dễ dàng đến tệp khách hàng rộng lớn và trải dài khắp cả nước.
                </p>
                <h3 className='font-bold text-lg'>2. Nội dung thông báo đa dạng và được cá nhân hóa</h3>
                <p>
                    Với số lượng ký tự giới hạn cho mỗi thông báo lên đến 400 ký tự có dấu, thông báo được gửi qua ZNS sẽ được thiết kế trọn vẹn và có thể truyền tải chính xác nội dung đến khách hàng.
                    Mẫu ZNS có thể đính kèm nhiều tiện ích như đường dẫn truy cập và gọi điện nhanh, giúp doanh nghiệp tối ưu hiệu quả của thông báo. Bên cạnh đó,
                    thông qua kênh ZNS doanh nghiệp có thể dễ dàng tăng độ nhận diện thương hiệu của mình với khả năng đính kèm logo thương hiệu trong các ZNS gửi đến khách hàng.
                </p>
                <h3 className='font-bold text-lg'>3. Chi phí tối ưu, minh bạch</h3>
                <p>
                    Khi sử dụng ZNS, doanh nghiệp chỉ phải thanh toán cho những lệnh ZNS được xử lý thành công, dựa theo báo cáo kết quả xử lý chi tiết.
                    Đây chính là ưu điểm nổi trội giúp việc sử dụng ZNS có chi phí được tối ưu hóa.
                </p>
                <h3 className='font-bold text-lg'>4. Đo lường hiệu quả</h3>
                <img
                    src="/svg/bloggrid/baiviet/image2_3.webp"
                    alt="Bảng giá OA xác thực"
                    className="w-full h-auto"
                />
                <p>
                    Hệ thống báo cáo của ZNS giúp ghi nhận kết quả của tất cả hoạt động xử lý lệnh ZNS đã thực hiện.
                    Doanh nghiệp luôn có thể theo dõi kết quả các lệnh đã tạo, trạng thái đã nhận từ phía khách hàng và lý do xử lý không thành công (nếu có)
                    của từng lệnh ZNS. Các kết quả này cung cấp nguồn số liệu quan trọng để đo lường hiệu quả của hoạt động CSKH.
                </p>
                <p>
                    Bên cạnh đó, các báo cáo có thể được truy xuất chính xác theo từng mốc thời gian giúp đáp ứng nhu cầu báo cáo nội bộ của từng doanh nghiệp.
                </p>
                <h2 className='font-bold text-2xl'>Chi phí của dịch vụ ZNS</h2>
                <p>Công thức tính giá ZNS</p>
                <img
                    src="/svg/bloggrid/baiviet/image2_4.webp"
                    alt="Bảng giá OA xác thực"
                    className="w-full h-auto"
                />
                <p>
                    Với nhóm tài khoản OA Hành chính công và Tiện ích thiết yếu (điện, nước, internet,…), đơn giá chuẩn của ZNS dạng văn bản và dạng bảng có giá là 120đ/tin.
                </p>
                <p>
                    Bạn có thể xem thêm về quy định tính phí ZNS tại:  <a
                        className='text-blue-700 '
                        href="/pricing#zns-estimate"
                        onClick={handleBangGiaClick}
                    >TẠI ĐÂY</a>.
                </p>
                <p>
                    <strong>Lưu ý:</strong> Zalo Notification Service (ZNS) là dịch vụ gửi thông báo chăm sóc khách hàng qua API tới số điện thoại đang sử dụng Zalo. Vì vậy, doanh nghiệp cần mua gói OA để tích hợp API và tiến hành gửi ZNS.
                </p>

            </div>
        </main>
    );
};

export default Bai2;