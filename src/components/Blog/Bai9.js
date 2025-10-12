

const Bai9 = () => {

    return (
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Ngành y tế ứng dụng ZNS như thế nào?
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Nov 9, 2023 3:23 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card9.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <p>
                    Trong bối cảnh cạnh tranh như hiện nay, việc thu hút và nâng cao trải nghiệm người dùng luôn là một trong những yếu tố tiên quyết để giữ chân
                    khách hàng. Thấu hiểu được lẽ đó, các trung tâm, đơn vị y tế, xét nghiệm đã tin tưởng và chọn lựa sử dụng ZNS để tối ưu hóa dịch vụ của mình.
                    Các cơ sở y tế này thường tập trung ứng dụng ZNS để gửi thông báo đặt lịch khám, nhắc lịch khám, tặng voucher, và gửi kết quả xét nghiệm,...
                    Một số thông báo thường được gửi thông qua ZNS như:
                </p>
                <p>
                    <strong>Thông báo lịch xét nghiệm, báo giá dịch vụ: </strong>
                    Sử dụng ZNS để gửi thông báo đặt lịch xét nghiệm qua Zalo cá nhân. Khách hàng có thể dễ dàng xác nhận hoặc thay đổi lịch khám bằng cách trả lời
                    hoặc phản hồi tin nhắn Zalo. Nhận các thông tin về báo giá dịch vụ y tế và các thông tin liên quan khác trước khi khám, xét nghiệm.
                </p>
                <p>
                    <strong>Nhắc lịch xét nghiệm, lịch thực hiện các chỉ định y tế khác: </strong>
                    Hệ thống ZNS tự động gửi nhắc nhở đến khách hàng trước ngày hẹn xét nghiệm, đảm bảo khách hàng không bỏ lỡ lịch hẹn tái khám hoặc đảm bảo thực
                    hiện đúng các chỉ định y tế cần thiết liên quan.
                </p>

                <img
                    src="/svg/bloggrid/baiviet/image9_1.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
            </div>



            <div className="prose font-manrope max-w-none space-y-4">
                <p>
                    <strong>Tặng voucher, ưu đãi: </strong>
                    ZNS hỗ trợ trung tâm xét nghiệm gửi voucher giảm giá hoặc ưu đãi đặc biệt đến khách hàng thông qua các thông báo với nhiều format đa dạng.
                    Từ đó giúp cơ sở y tế tăng mức độ trung thành, tái khám của người dùng.
                </p>
                <p>
                    <strong>Gửi kết quả xét nghiệm hoặc các chỉ định y tế: </strong>
                    Khi kết quả xét nghiệm đã sẵn sàng, hệ thống tự động gửi kết quả đến khách hàng thông qua ZNS. Khách hàng có thể dễ dàng truy cập và lưu trữ
                    thông tin trên điện thoại, từ đó có thể nhanh chóng tương tác với bác sĩ để thảo luận hoặc được giải đáp về kết quả của mình.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image9_2.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />

                <p>
                    <strong>Gửi khảo sát, đánh giá chất lượng dịch vụ: </strong>
                    Từ đó giúp các cơ sở y tế tối ưu, nâng cao chất lượng của các dịch vụ y tế, cải thiện, xử lí những vấn đề tiêu cực ảnh hưởng đến trải nghiệm khách hàng.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image9_3.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />

                <p>Cùng nhiều định dạng, nội dung thông báo liên quan khác. </p>
                <p>Sau khi áp dụng tính năng ZNS, các trung tâm xét nghiệm y tế đã gặt thu về được những điều sau:</p>
                <b className="italic">
                    1. Giảm thời gian chờ đợi: Khách hàng không còn phải chờ đợi lâu để đặt lịch và nhận kết quả xét nghiệm, tạo ra một trải nghiệm tích cực và thoải mái. <br />
                    2. Tăng tính chính xác: Lịch hẹn khám trở nên chính xác hơn, giúp tránh xáo trộn và chậm trễ vì có thông báo nhắc nhở kịp lúc. <br />
                    3. Tạo sự trung thành: Khách hàng cảm thấy được quan tâm và chăm sóc, dẫn đến sự trung thành và tiếp tục sử dụng dịch vụ y tế tại trung tâm. <br />
                    4. Tích hợp dễ dàng: Hệ thống ZNS tích hợp một cách dễ dàng vào hệ thống hiện có, mang lại lợi ích ngay lập tức mà không đòi hỏi đầu tư lớn.
                </b>
                <p>
                    Bằng cách áp dụng Zalo Notification Service (ZNS) cho việc gửi thông báo đặt lịch khám, nhắc lịch khám, tặng voucher, và gửi kết quả xét nghiệm, trung tâm
                    xét nghiệm y tế đã tối ưu hóa dịch vụ của họ và tạo ra một trải nghiệm tích cực cho khách hàng.
                </p>
            </div>
        </main>
    );
};

export default Bai9;