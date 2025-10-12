

const Bai6 = () => {

    return (
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Ứng dụng ZNS trong lĩnh vực kinh doanh Trang sức
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Dec 20, 2023 3:47 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card6.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <p>
                    Tối ưu trải nghiểm Khách hàng trước, trong và sau khi mua hàng đóng vai trò cực kì quan trọng trong ngành kinh doanh các sản phẩm có giá trị cao điển
                    hình là Trang sức cao cấp. Việc này yêu cầu doanh nghiệp cần phải tìm kiếm nhiều giải pháp để tạo ra cho khách hàng một trải nghiệm ngày càng tốt hơn.
                    Nhiều đơn vị kinh doanh trang sức đã ứng dụng ZNS như một công cụ quan trọng để chăm sóc khách hàng và tăng tỉ lệ quay lại mua sắm của người dùng cũ.
                </p>
                <p>
                    Dưới đây là một số thông báo ZNS được ứng dụng trong lĩnh vực kinh doanh trang sức:
                </p>
                <p><strong>Gửi mã xác thực đăng nhập tài khoản Khách hàng</strong></p>
                <p>
                    Trong ngành kinh doanh trang sức, việc bảo vệ thông tin và giao dịch của khách hàng luôn là việc được ưu tiên hàng đầu. ZNS có thể được ứng dụng để gửi
                    mã xác thực khi khách hàng đăng nhập, đặt hàng, hoặc thực hiện các giao dịch quan trọng. Điều này đảm bảo tính an toàn và bảo mật, giúp tăng cường niềm
                    tin của khách hàng đối với thương hiệu trang sức.
                </p>
            </div>


            <div className="flex justify-center mb-8">
                <img
                    src="/svg/bloggrid/baiviet/image6_1.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
            </div>

            <div className="prose font-manrope max-w-none space-y-4">
                <p><strong>Thông báo đặt hàng thành công</strong></p>
                <p>
                    Một trong những use case quan trọng và phổ biến nhất của ZNS trong lĩnh vực này là thông báo về việc đặt hàng thành công. Ngay khi khách hàng hoàn tất quy
                    trình mua sắm, ZNS sẽ ngay lập tức gửi thông báo xác nhận việc đặt hàng, cung cấp thông tin chi tiết về đơn hàng và dự kiến thời gian giao hàng.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image6_2.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />

                <p><strong>Thông báo chúc mừng sinh nhật</strong></p>
                <p>
                    ZNS có thể được ứng dụng để gửi những lời chúc mừng sinh nhật đặc biệt đến khách hàng. Việc này không chỉ tạo ra một trải nghiệm mua sắm mang tính cá nhân
                    hóa mà còn tăng cường mối quan hệ giữa thương hiệu trang sức và khách hàng, đồng thời doanh nghiệp có thể kèm thêm một số ưu đãi để tri ân khách hàng
                    trong dịp đặc biệt này.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image6_3.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />

                <p><strong>Thông báo khuyến mãi đến Khách hàng cũ</strong></p>
                <p>
                    Khi có các chương trình khuyến mãi hoặc sự kiện đặc biệt, ZNS được ứng dụng để gửi thông báo về mã voucher, deal khuyến mãi độc quyền đến khách hàng. Với
                    thông báo được gửi nhanh chóng và cực kì tiện lợi này, không những khách hàng được kích thích mua sắm mà doanh nghiệp còn có thể gia tăng và thúc đẩy doanh
                    số bán hàng.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image6_4.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />

                <p><strong>Thông báo khảo sát ý kiến Khách hàng</strong></p>
                <p>
                    ZNS không chỉ là công cụ để thông báo mà còn là kênh tương tác thuận tiện để thực hiện khảo sát và lắng nghe ý kiến của khách hàng. Việc gửi khảo sát bằng
                    tính năng ZNS vừa giúp doanh nghiệp thu thập thông tin phản hồi ngay lập tức từ người tiêu dùng vừa là cơ hội để cải thiện chất lượng sản phẩm và dịch vụ
                    trong lĩnh vực kinh doanh trang sức.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image6_5.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
            </div>
        </main>
    );
};

export default Bai6;