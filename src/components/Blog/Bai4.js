import react from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../../contexts/MenuContext';

const Bai4 = () => {
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
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Ứng dụng ZNS nâng cao trải nghiệm mua sắm thời trang
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Dec 27, 2023 4:40 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card4.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <p>
                    Hành trình mua sắm thời trang tưởng chừng như rất đơn giản, tuy nhiên để giúp cho trải nghiệm khách hàng được tối ưu và tăng tỉ lệ quay lại mua sắm của
                    khách hàng thì ZNS có thể đóng một vai trò quan trọng, không chỉ mang lại trải nghiệm tiện lợi và dễ dàng cho khách hàng mà còn tạo ra một liên kết mạnh
                    mẽ giữa thương hiệu thời trang và người tiêu dùng. Từ đó hình thành những điểm chạm phù hợp để doanh nghiệp tiếp cận và truyền tải những thông điệp cần
                    thiết đến khách hàng của mình.
                </p>
                <p>
                    Một số ZNS đang được các doanh nghiệp, hệ thống kinh doanh thời trang gửi đến khách hàng:
                </p>
                <p><strong>Mã xác thực cho quá trình đăng nhập và đặt hàng</strong></p>
                <p>
                    Khách hàng bắt đầu hành trình mua hàng bằng việc đăng nhập hoặc đăng ký tài khoản trên website của thương hiệu thời trang. ZNS được tích hợp để gửi mã
                    xác thực an toàn, đảm bảo thông tin cá nhân của khách hàng được bảo vệ chặt chẽ.
                </p>
            </div>


            <div className="flex justify-center mb-8">
                <img
                    src="/svg/bloggrid/baiviet/image4_1.jpg"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
            </div>

            <div className="prose font-manrope max-w-none space-y-4">
                <p><strong>Thông báo đặt hàng và giao hàng thành công</strong></p>
                <p>
                    Sau khi chọn sản phẩm và thực hiện thanh toán, thông báo ZNS sẽ ngay lập tức được gửi về Zalo cá nhân của khách hàng về việc đặt hàng thành công. Ngoài ra,
                    khi đơn hàng được giao đến địa chỉ đã thiết lập, khách hàng cũng sẽ nhận được thông báo về quá trình giao hàng thành công, bao gồm cả thông tin chi tiết về
                    sản phẩm, ngày giờ đã nhận hàng,...
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image4_2.jpg"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />

                <p><strong>Thông báo hủy đơn hàng</strong></p>
                <p>
                    Trong trường hợp khách hàng muốn hủy đơn hàng, quá trình này trở nên dễ dàng và thuận tiện nhờ vào việc ứng dụng ZNS. Khách hàng chỉ cần truy cập vào ứng
                    dụng, chọn đơn hàng cần hủy, và chọn hủy đơn hàng. Ngay sau đó, ZNS sẽ gửi một thông báo xác nhận về việc hủy đơn hàng, đồng thời cung cấp hướng dẫn chi
                    tiết về các bước tiếp theo cần phải thực hiện nếu có.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image4_3.jpg"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />

                <p><strong>Thông báo về sản phẩm mới và bộ sưu tập mới</strong></p>
                <p>
                    Khi có sản phẩm hoặc bộ sưu tập mới, ZNS sẽ được gửi đến người dùng phù hợp, mô tả đầy đủ về những xu hướng mới, kiểu dáng thời trang độc đáo, và các chi tiết
                    đặc biệt mà khách hàng không nên bỏ qua. Thông báo có thể bao gồm hình ảnh, mô tả chi tiết về sản phẩm, cũng như các ưu đãi đặc biệt nếu khách hàng đặt hàng
                    trong khoảng thời gian nhất định. Điều này không chỉ tạo ra một trải nghiệm mua sắm hấp dẫn mà còn giúp sản phẩm mới nhanh chóng tiếp cận được đến khách hàng,
                    từ đó gia tăng sự kích thích, thúc đẩy sự quan tâm và tăng cường tương tác của khách hàng với thương hiệu.
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image4_4.jpg"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />

                <p><strong>Thông báo hạng thẻ và điểm tích lũy</strong></p>
                <p>
                    Thông báo về hạng thẻ sẽ cung cấp cho khách hàng chi tiết về các ưu đãi và quyền lợi mới mà họ sẽ được trải nghiệm. Ngoài ra, ZNS cũng có thông báo về điểm
                    tích lũy, tạo cho khách hàng cảm giác được ghi nhận và có sự đồng hành cùng thương hiệu. Thông báo sẽ bao gồm cách tích điểm, số lượng điểm hiện tại và cách
                    sử dụng điểm để nhận các ưu đãi đặc biệt,...
                </p>
                <img
                    src="/svg/bloggrid/baiviet/image4_5.jpg"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
            </div>
        </main>
    );
};

export default Bai4;