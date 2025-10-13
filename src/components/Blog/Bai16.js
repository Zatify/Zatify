

const Bai16 = () => {

    return (
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Ứng dụng ZNS trong lĩnh vực kinh doanh nhà hàng (F&B)
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Mar 14, 2024 7:46 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card16.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <p>
                    Dưới đây là một số nội dung thông báo ZNS được các nhà hàng, quán ăn thường xuyên sử dụng để gửi cho Khách hàng và đem lại hiệu quả.
                </p>
                <p>
                    <strong>Thông báo xác nhận đặt bàn: </strong>
                    Khách hàng đặt bàn thông qua website, hotline, mini apps hay ứng dụng của nhà hàng sẽ nhận được thông báo xác nhận ngay lập tức từ thông báo ZNS. Thông báo này không chỉ cung cấp thông tin chi tiết về đặt bàn mà còn giúp khách hàng cảm thấy yên tâm và nhắc nhớ khách hàng mỗi khi đến “lịch hẹn”
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image16_1.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
                <p>
                    <strong> Thông báo khuyến mãi và voucher:</strong> ZNS được tích hợp để thông báo về các chương trình khuyến mãi hoặc voucher vào những ngày lễ, sự kiện đặc biệt như Ưu đãi sinh nhật, khai trương, hôn lễ,... Thông báo được gửi một cách nhanh chóng và hiệu quả, vừa kích thích nhu cầu mua sắm vừa tăng khả năng quay lại sử dụng dịch vụ tại nhà hàng.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image16_2.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />

                <p>
                    <strong>Thông báo tích điểm, đổi điểm:</strong> Thông qua các thông báo, khách hàng sẽ được cập nhật về số điểm tích lũy của họ và các phần quà hấp dẫn mà họ có thể đổi được. Từ đó, khách hàng sẽ nhận được những món quà mang dấu ấn riêng của nhà hàng, như móc khóa, gấu bông có logo hoặc linh vật của nhà hàng. Điều này không chỉ tạo ra sự hứng thú từ phía khách hàng mà còn là một cách tuyệt vời để thể hiện lòng biết ơn và tăng cường mối quan hệ giữa nhà hàng và khách hàng.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image16_3.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
                <p>
                    Với Zalo Notification Service, lĩnh vực F&B - Kinh Doanh Nhà Hàng có thể dễ dàng tiếp cận và tương tác với khách hàng của mình, giúp tăng cường sự thân thiện và tận tâm đến từ doanh nghiệp. Đồng thời, việc ứng dụng ZNS cũng giúp tăng cường sự nhận thức về thương hiệu và tạo ra một kênh giao tiếp hiệu quả giữa doanh nghiệp và khách hàng. Điều này không chỉ giúp tăng doanh số bán hàng mà còn tạo ra một môi trường kinh doanh lâu dài và bền vững.
                </p>
            </div>
        </main>
    );
};

export default Bai16;