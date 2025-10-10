import react from 'react';


const Bai3 = () => {



    return (
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        4 điểm nổi bật trong tính năng của ZNS
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Oct 8, 2025 5:06 pm</div>
                </div>
                <img
                    src="/svg/bloggrid/card3.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <p>Nằm trong bộ giải pháp dành cho nhóm tài khoản Zalo Official Account, ZNS sở hữu nhiều ưu điểm nổi
                    bật giúp doanh nghiệp xây dựng kênh giao tiếp mới với khách hàng ngay trên Zalo.
                </p>
                <h2 className='font-bold text-2xl'>Zalo Notification Service là gì?</h2>
                <p>
                    Zalo Notification Service (ZNS) là dịch vụ gửi thông báo chăm sóc khách hàng trên Zalo. Dịch vụ nằm
                    trong bộ giải pháp dành cho nhóm tài khoản Official Account (OA). Thông qua kênh ZNS, các tài khoản OA có thể gửi thông báo,
                    thông tin giao dịch và các thông tin chăm sóc khách hàng khác đến tất cả khách hàng có sử dụng Zalo.
                </p>
                <h2 className='font-bold text-2xl'>4 tính năng nổi bật của ZNS</h2>
                <p>
                    ZNS được gửi theo phương thức Over-the-top (OTT), giải pháp gửi nội dung trực tuyến trên nền tảng internet. Đây là phương thức gửi
                    tin quen thuộc với người dùng smartphone khi sử dụng các ứng dụng như Facebook Messenger, Viber, Zalo,… Với ưu điểm này, ZNS hỗ trợ
                    những tính năng vượt trội để doanh nghiệp có thể tối ưu hóa hiệu quả chăm sóc khách hàng của mình thông qua Zalo.…
                </p>
            </div>

            {/* Bảng giá và tính năng */}
            <div className="prose font-manrope max-w-none space-y-4">
                <h3 className='font-bold text-lg'>1. Gửi thông báo trực tiếp đến khách hàng qua ứng dụng Zalo</h3>
                <p>
                    Doanh nghiệp có thể chủ động gửi thông báo đến khách hàng đang sử dụng Zalo dưới tên của tài khoản OA. ZNS được truyền
                    đến máy của người dùng qua ứng dụng Zalo và hiển thị tại danh sách hội thoại với tỷ lệ mở thông báo cao.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image3_1.jpg"
                    alt="Bảng giá OA xác thực"
                    className="md:w-[60%] w-[75%] h-auto mx-auto"
                />
                <h3 className='font-bold text-lg'>2. Thiết kế nội dung đa dạng, đẹp mắt</h3>
                <p>
                    ZNS hỗ trợ các định dạng và loại nội dung đa dạng, đáp ứng nhiều nhu cầu gửi thông báo riêng biệt của doanh nghiệp. Bên cạnh đó, ZNS được
                    gắn kèm logo thương hiệu để tăng độ nhận diện và tin tưởng đến khách hàng. Doanh nghiệp cũng có thể tăng tương tác và tối ưu hiệu quả gửi
                    thông báo với các nút call-to-action (CTA) tùy biến ở từng mẫu ZNS.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image3_2.jpg"
                    alt="Bảng giá OA xác thực"
                    className="md:w-[70%] w-[80%] mx-auto h-auto"
                />
                <h3 className='font-bold text-lg'>3. Thời gian xử lý thông báo nhanh chóng và được cam kết</h3>
                <p>
                    Zalo cam kết thời gian gửi thông báo ZNS dựa theo SLA được quy định rõ cho từng loại ZNS. Cụ thể, ZNS có thời gian gửi nhanh nhất dưới 15 giây cho loại thông
                    báo gửi mã xác thực OTP và không quá 2 giờ cho các loại thông báo khác. Doanh nghiệp sẽ không phải thanh toán cho các mẫu ZNS có thời gian xử lý vượt quá thời
                    gian cam kết này.
                </p>
                <h3 className='font-bold text-lg'>4. Hỗ trợ báo cáo chi tiết, minh bạch</h3>
                <p>
                    Sau khi gửi ZNS, doanh nghiệp có thể kiểm soát toàn bộ kết quả xử lý lệnh ZNS đã thực hiện thông qua hệ thống báo cáo của ZNS. Kết quả thành công/thất bại, thời
                    gian gửi thông báo và thời gian người dùng nhận thông báo là những chỉ số quan trọng doanh nghiệp có thể xem được từ báo cáo. Kết quả này giúp doanh nghiệp đo
                    lường hiệu quả gửi ZNS và đưa ra các điều chỉnh cần thiết cho quy trình CSKH của mình.
                </p>
                </div>
        </main>
    );
};

export default Bai3;