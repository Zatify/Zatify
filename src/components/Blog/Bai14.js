

const Bai14 = () => {

    return (
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Use Case: Các doanh nghiệp quản lí chung cư, căn hộ ứng dụng ZNS để gửi thông báo đến cư dân như thế nào?
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Oct 14, 2024 6:48 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card14.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <p>
                    Ngày nay tại các thành phố lớn, đông dân cư, nhu cầu mua và ở chung cư ngày càng nhiều. Nhiều khu chung cư, căn hộ có sức chứa lên đền hàng ngàn hộ dân và hàng chục ngàn cư dân sinh sống. Điều nàu đòi hỏi các doanh nghiệp quản lí chung cư, căn hộ cần có những công cụ, hệ thống công nghệ để hộ trợ quản lí một cách hiệu quả. Trong đó hoạt động tương tác và thông báo từ Ban quản lí đến cư dân là một trong những yếu tố quan trọng để tăng hiệu quả quản lí. Việc tìm kiếm và ứng dụng một kênh thông báo, tương tác đến cư dân được nhiều doanh nghiệp chú trọng và đầu tư. Trong số đó, Zalo trở thành một nền tảng được ưu tiên sử dụng. Và Zalo Notification Service (ZNS) là một giải pháp hiệu quả, giúp ban quản lí dễ dàng tương tác với cư dân qua nền tảng Zalo. ?
                </p>
                <p>
                    Dưới đây là một số cách mà ZNS có thể được ứng dụng trong việc thông báo quản lí cư dân.
                </p>
                <br />
                <p>
                    <strong>1. Thông báo phí quản lí và các chi phí khác </strong> <br />
                    Trước đây, việc gửi giấy thông báo hoặc email thường dẫn đến sự chậm trễ, thất lạc thông tin và tốn kém thời gian. Với ZNS, ban quản lí có thể:
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image14_1.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
                <p>
                    Gửi trực tiếp thông báo phí quản lí hàng tháng dưới dạng thông báo qua Zalo, giúp cư dân dễ dàng nhận và theo dõi thông tin và đặc biệt là khả năng bấm thanh toán ngay và deeplink trực tiếp đến các ứng dụng ngân hàng của cư dân để tự động điền khi thao tác thanh toán.
                </p>
                <br />
                <p>
                    <strong>2. Cập nhật thông tin quan trọng cho dân cư</strong> <br />
                    Ban quản lí có thể sử dụng ZNS để gửi thông tin quan trọng và cần thiết đến cư dân, bao gồm:
                </p>
                <ul className='ml-8 list-disc space-y-1'>
                    <li>Cập nhật các quy định mới liên quan đến an ninh, an toàn và vệ sinh chung cư.</li>
                    <li>Thông báo sự kiện nội bộ như họp cư dân, hội nghị chung cư.</li>
                    <li>Gửi nhắc nhở về việc kiểm tra đồng hồ điện, nước hoặc các vấn đề pháp lí khác.</li>
                    <li>...</li>
                </ul>
                <img
                    src="/svg/bloggrid/baiviet/image14_2.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
                <p>
                    Bên cạnh đó, Một vài vấn đề nhạy cảm và gây phiền toái cho cư dân là việc bị cúp nước, cúp điện đột ngột, hoặc thang máy cần bảo trì mà không có thông báo trước. ZNS cũng giúp ban quản lí giải quyết vấn đề này một cách hiệu quả:
                </p>
                <ul className='ml-8 list-disc space-y-1'>
                    <li>Gửi lịch cúp nước, cúp điện có kế hoạch đến từng cư dân thông qua Zalo, giúp cư dân chủ động chuẩn bị.</li>
                    <li>Thông báo về việc bảo trì thang máy hoặc các thiết bị công cộng khác trong chung cư.</li>
                    <li>Cập nhật tình trạng sửa chữa, bảo trì một cách liên tục và minh bạch.</li>
                    <li>...</li>
                </ul>
            </div>



            <div className="prose font-manrope max-w-none space-y-4">
                <p>
                    <strong>3. Ưu đãi dịch vụ cho dân cư</strong> <br />
                    Ngoài những thông tin cơ bản về quản lí, ZNS còn là công cụ để ban quản lí cung cấp các chương trình ưu đãi dành riêng cho cư dân:
                </p>
                <ul className='ml-8 list-disc space-y-1'>
                    <li>Gửi thông tin về các dịch vụ tiện ích như phòng gym, hồ bơi, siêu thị, bãi đỗ xe, và các chương trình ưu đãi đặc biệt cho cư dân.</li>
                </ul>
                <img
                    src="/svg/bloggrid/baiviet/image14_3.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
                <ul className='ml-8 list-disc space-y-1'>
                    <li>Đưa ra các chương trình khuyến mãi từ các đối tác của chung cư, ví dụ như dịch vụ giặt ủi, siêu thị mini, nhà hàng, hoặc các hoạt động giải trí.</li>
                    <li>Việc cung cấp các ưu đãi này không chỉ tăng cường sự hài lòng của cư dân mà còn góp phần xây dựng cộng đồng gắn kết trong chung cư.</li>
                </ul>
                <p>
                    Ứng dụng ZNS trong quản lí cư dân tại chung cư/căn hộ là một bước tiến quan trọng trong việc tối ưu hóa quy trình quản lí, nâng cao chất lượng dịch vụ và tăng cường sự hài lòng của cư dân. Với khả năng gửi thông báo nhanh chóng, chính xác và tiết kiệm chi phí, ZNS đang trở thành công cụ không thể thiếu cho các ban quản lí chung cư trong thời đại công nghệ số.
                </p>
            </div>
        </main>
    );
};

export default Bai14;