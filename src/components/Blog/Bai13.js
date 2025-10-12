

const Bai13 = () => {

    return (
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Gửi thông báo giao vận bằng ZNS
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Nov 8, 2023 9:39 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card13.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <p>
                    ZNS (Zalo Notification Service) là một giải pháp toàn diện giúp doanh nghiệp tối ưu hóa và nâng cao trải nghiệm của người dùng đặc biệt là trong ngành giao hàng. Vậy đâu là những yếu tố giúp ZNS được ưa chuộng và sử dụng rộng rãi trong ngành hàng này?
                </p>
                <p>
                    Dưới đây là một số dạng nội dung thông báo và lợi ích mà ZNS mang lại, hỗ trợ doanh nghiệp trong ngành hàng vận chuyển, tạo ra sự tương tác, thông tin và tiện ích tối ưu cho khách hàng của mình:
                </p>

                <p>
                    <strong>Thông báo giao hàng và theo dõi hành trình:    </strong>
                    ZNS giúp doanh nghiệp gửi thông báo chính xác và kịp thời về tình trạng đơn hàng và hành trình giao hàng đến khách hàng. Nhờ vào tính năng này, khách hàng có thể dễ dàng theo dõi tình trạng đơn hàng của họ một cách chính xác và thuận tiện, từ lúc đặt hàng cho đến khi nhận hàng. Điều này tạo ra sự tin tưởng và thúc đẩy sự hài lòng của khách hàn
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image13_1.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
                <p>
                    <strong>Tối ưu hóa thời gian giao hàng: </strong>
                    Với ZNS, doanh nghiệp giao hàng có thể thông báo chính xác thời gian giao hàng dự kiến cho khách hàng. Điều này giúp khách hàng dễ dàng sắp xếp thời gian nhận hàng và tối ưu hóa lịch trình cá nhân của họ.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image13_2.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
            </div>



            <div className="prose font-manrope max-w-none space-y-4">
                <p>
                    <strong>Tương tác hai chiều và hỗ trợ CSKH:  </strong>
                    ZNS tạo ra môi trường để doanh nghiệp và khách hàng có thể tương tác qua lại, tương tác hai chiều giữa doanh nghiệp và khách hàng. Khách hàng có thể trực tiếp trả lời thông báo ZNS để đặt câu hỏi, yêu cầu hỗ trợ hoặc thậm chí thay đổi thời gian giao hàng. Điều này giúp doanh nghiệp nắm bắt nhanh chóng nhu cầu của khách hàng và đảm bảo rằng họ sẽ nhận được sự chăm sóc tốt nhất.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image13_3.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
                <p>
                    <strong>Giảm rủi ro lừa đảo:</strong>
                    Thông qua ZNS, doanh nghiệp có thể gửi các thông báo xác thực, mã xác thực cho khách hàng để đảm bảo tính bảo mật trong giao dịch và tránh rủi ro lừa đảo.
                </p>
                <p>
                    <strong>Tạo trải nghiệm tốt hơn cho khách hàng: </strong>
                    Nhờ vào ZNS, ngành giao hàng có thể cung cấp trải nghiệm khách hàng tốt hơn, giúp khách hàng cảm thấy tự tin và hài lòng hơn về quá trình mua sắm và nhận hàng của họ.
                </p>
                <p>
                    Tóm lại, ZNS là một công cụ quan trọng và mạnh mẽ trong việc hỗ trợ ngành giao hàng tạo ra trải nghiệm tốt hơn cho khách hàng và tối ưu hóa quy trình giao hàng. Điều này đã được chứng minh khi ngày càng nhiều những doanh nghiệp, đơn vị vận chuyển đã ứng dụng, triển khai ZNS trong thực tế và nhận được những kết quả tối ưu cũng như những phản hồi tích cực từ người dùng.
                </p>
            </div>
        </main>
    );
};

export default Bai13;