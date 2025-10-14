

const Bai20 = () => {

    return (
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Làm thế nào để giảm tỷ lệ báo xấu (report) khi gửi mẫu thông báo ZNS
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Nov 25, 2022 3:31 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card20.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <p>Tỷ lệ báo xấu (report - phản hồi tiêu cực) của người nhận thông báo ZNS sẽ ảnh hưởng đến quyền lợi của doanh nghiệp vì liên quan trực tiếp đến số lượng ZNS gửi mỗi ngày cũng như loại nội dung thông báo có thể gửi và có thể khiến mẫu thông báo bị vô hiệu hóa. Trong bài viết này, đội ngũ hỗ trợ và chăm sóc khách hàng Zalo Cloud sẽ giải thích chi tiết hơn về vấn đề này nhằm giúp doanh nghiệp giảm thiểu tỷ lệ báo xấu (report) khi gửi mẫu thông báo ZNS. </p>
                <h2 className=' text-xl xl:text-2xl'>Một số lý do phản hồi từ người nhận</h2>
                <p className="font-bold">Nội dung làm phiền </p>
                <p>Các nội dung không mang lại những thông tin mà người nhận quan tâm thường sẽ được người nhận liệt kê vào mục “làm phiền” và được đánh giá là spam. </p>
                <p>Đồng thời, mẫu thông báo ZNS của doanh nghiệp cũng sẽ bị đánh giá là làm phiền nếu thời gian gửi không hợp lý. </p>
                <p><span className="italic underline">Ví dụ:</span> Nếu thông báo ZNS được gửi quá trễ hoặc quá sớm, sẽ có thể ảnh hưởng đến thời gian nghỉ ngơi riêng tư, hoặc thời điểm nhận thông tin không còn hiệu lực/quá xa so với thời điểm xảy ra giao dịch. </p>
                <h2 className=' text-xl xl:text-2xl'>Không có giao dịch với doanh nghiệp/Không đúng người nhận </h2>
                <p>Trường hợp này xảy ra có thể là do dữ liệu từ tệp danh sách đối tượng nhận ZNS (file data) truyền sai số điện thoại người nhận. Đồng thời, nguyên nhân còn có thể là do sai sót đối với dữ liệu truyền vào tham số định danh khách hàng khiến cho khách hàng chưa định hình được các thông tin liên quan đến giao dịch vừa xảy ra.</p>
                <p>Đặc biệt lưu ý, doanh nghiệp <b>cần tránh sử dụng dữ liệu khách hàng đã không có quan hệ giao dịch sau 06 tháng</b> để gửi các thông báo khuyến mãi, ưu đãi, quảng cáo liên tục vì sẽ gây khó chịu cho người nhận. </p>
                <h2 className=' text-xl xl:text-2xl'>Nội dung không hiển thị hoặc hiển thị lỗi </h2>
                <p>Để tránh hiển thị lỗi khi gửi mẫu thông báo ZNS tới người nhận, doanh nghiệp cần đảm bảo các yêu cầu về logo ở cả giao diện sáng (light mode) và giao diện tối (dark mode) cũng như đường dẫn liên kết (link CTA) không bị lỗi trước khi gửi đi. </p>
                <p>Ngoài ra, trường hợp này còn có thể là do nguyên nhân khách quan từ đường truyền dữ liệu của người nhận.  </p>
                <p><b>Tóm lại,</b> để giảm tỷ lệ báo xấu (report) khi gửi mẫu thông báo ZNS, doanh nghiệp cần:</p>
                <ul className="list-disc pl-6 md:pl-10">
                    <li>Đảm bảo nội dung gửi mang mục đích chăm sóc và hỗ trợ khách hàng, giúp khách hàng nắm bắt được các thông tin một cách nhanh và chính xác nhất.</li>
                    <li>Doanh nghiệp cần xem lại thật kỹ nội dung thông báo trước khi gửi để tránh nhầm lẫn nội dung các biến truyền vào nội dung thông báo không đúng thứ tự.</li>
                    <li>Đồng thời, hạn chế các mẫu ZNS liên quan đến hậu mãi liên tục,…</li>

                </ul>
            </div>
        </main>
    );
};

export default Bai20;