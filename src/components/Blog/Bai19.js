

const Bai19 = () => {

    return (
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Báo xấu mẫu thông báo ZNS được ghi nhận khi nào?
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Sep 24, 2025 10:54 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card19.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <p>Để đảm bảo trải nghiệm của người dùng cuối (end-user), user có quyền lựa chọn báo xấu các mẫu thông báo Zalo Notification Service (ZNS) đã nhận để phản ánh chất lượng dịch vụ.</p>
                <h2 className='font-bold text-xl xl:text-2xl'>1. Cơ chế Báo xấu (Report): </h2>
                <p className="ml-4 md:ml-16">
                    <strong>A. Thay Đổi Entry Point Báo Xấu:</strong> người dùng có thể báo xấu thông qua 1 trong 2 cách sau:
                    <ul className="list-disc list-outside pl-6 md:pl-8">
                        <li>
                            Nút 3 chấm phía trên bên phải của mẫu thông báo ZNS
                        </li>
                        <li>
                            Bong bóng <strong>“Bạn cảm thấy phiền? Báo xấu”</strong> bên dưới ZNS
                            (Bong bóng sẽ tồn tại trong 48 giờ từ lúc user nhận ZNS.
                            Sau thời gian này, bong bóng sẽ biến mất.)
                        </li>
                    </ul>

                </p>
                <p className="ml-4 md:ml-16">
                    <strong>B. Hành động Báo xấu và ngừng nhận ZNS được xác định là hai hành động độc lập:</strong>
                    <ul class="list-disc list-outside pl-6 md:pl-8">
                        <li>
                            Khi user báo xấu 1 ZNS từ OA Brand A, hệ thống sẽ <b class="underline"><i>KHÔNG tự động</i></b> ngừng nhận ZNS từ OA này.
                            Nếu user muốn ngừng nhận ZNS từ OA này, user có thể chủ động thao tác
                            <b><i>“Ngừng nhận thông báo từ doanh nghiệp này”.</i></b>
                        </li>
                        <li>
                            Xem thêm tại phần 2 (bên dưới) Cơ chế ngừng nhận ZNS từ OA. <br />
                            Nếu user chọn “Nội dung tin không hiển thị hoặc hiển thị lỗi” hoặc “Lý do khác =&gt; <b><i>Không tính vào tỉ lệ báo xấu (report rate) của OA.</i></b>
                        </li>
                    </ul>
                </p>
                <p className="italic inline-block ml-2 md:ml-10 bg-yellow-200 rounded">Các lượt báo xấu sau 48 giờ từ lúc user nhận ZNS sẽ không ảnh hưởng đến tỉ lệ report và chất lượng của OA</p>
                <ul class="list-disc pl-6">
                    <li>Ngoài ra, giao diện báo xấu mới sẽ được đồng bộ với giao diện báo xấu của tin UID, bao gồm danh sách lý do báo xấu.</li>
                </ul>
                <p className="text-lg"><strong>Giao diện báo xấu và ngừng nhận thông báo ZNS của người dùng</strong></p>
                <img
                    src="/svg/bloggrid/baiviet/image19_1.webp"
                    alt="Zalo OA minh họa"
                    className="max-w-full mx-auto"
                />
                <p className="text-sm text-center">Giao diện khi bấm vào nút "..." góc phải thông báo ZNS</p>
                <img
                    src="/svg/bloggrid/baiviet/image19_2.webp"
                    alt="Zalo OA minh họa"
                    className="max-w-full mx-auto"
                />
                <p className="italic"><b className=" underline">Lưu ý:</b> Sản phẩm và giao diện thực tế có thể được điều chỉnh để đáp ứng yêu cầu vận hành và cải thiện trải nghiệm của người dùng cuối.</p>

                <h2 className='font-bold text-xl xl:text-2xl'>2. Cơ chế Ngừng nhận thông báo ZNS từ OA:  </h2>
                <ul className="list-disc list-outside pl-6 md:pl-8">
                    <li>Khi đã thiết lập thành công việc cài đặt ngừng nhận thông báo từ OA, nếu muốn nhận lại thông báo ZNS, người dùng cần chủ động truy cập trang Quản lý tương tác OA và bật lại nút đồng ý nhận Thông báo từ OA.</li>
                    <li className="list">Các điểm (Entry point) Ngừng nhận thông báo/Nhận lại thông báo: Người dùng có thể truy cập tính nắng ngừng nhận/nhận lại thông báo ZNS tại hai điểm: <br />
                        1. Nút 3 chấm phía trên bên phải của mẫu thông báo ZNS<br />
                        2. Bong bóng “Bạn cảm thấy phiền? Báo xấu
                    </li>
                    <li>Ngoài ra, giao diện Ngừng nhận thông báo ZNS sẽ được đồng bộ với giao diện Ngừng nhận tin UID từ OA, nhằm mang đến trải nghiệm đồng nhất.</li>
                </ul>
                <img
                    src="/svg/bloggrid/baiviet/image19_3.webp"
                    alt="Zalo OA minh họa"
                    className="max-w-full mx-auto"
                />
                <p className="text-sm text-center">Giao diện mở nhận lại thông báo tại Trang cài đặt của Official Account (OA)</p>
                <p className="italic underline"><b>Ghi chú</b></p>
                <ul className="list-disc list-outside pl-6 md:pl-8">
                    <li>User có thể tự thao tác trên thiết bị di động bất kì lúc nào (Zalo Business Solution không hỗ trợ việc can thiệp quyền ngừng nhận ZNS của user).</li>
                    <li className="list">
                        Khi OA gửi thông báo ZNS đến người dùng đã ngừng nhận thông báo ZNS từ OA, hệ thống sẽ trả về mã lỗi: <b>-141 User refused to receive ZNS.</b> Mã lỗi này cho biết người dùng đã từ chối nhận ZNS từ Official Account.
                    </li>
                    <li>Từ ngày <p className="italic inline-block bg-yellow-200 rounded"><b>07/01/2025</b></p><b>, bỏ cơ chế ngừng nhận thông báo theo Tag:</b> người dùng đã cài đặt ngừng nhận thông báo ZNS của một số Tag hoặc toàn bộ Tag trước ngày 07/01 sẽ được chuyển đổi như sau:</li>
                </ul>

                <table className="w-full xl:w-[85%] mx-auto border-black mb-8">
                    <thead>
                        <tr>
                            <th className="border text-center px-4 py-2 w-[40%] md:w-[30%]" colSpan={2}>Cài đặt Ngừng nhận thông báo ZNS của User</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2 md:px-4 md:py-2">Trước 07/01/2025</td>
                            <td className="border p-2 md:px-4 md:py-2">Từ 07/01/2025</td>
                        </tr>
                        <tr>
                            <td className="border p-2 md:px-4 md:py-2">Ngừng nhận bao gồm Tag 1 hoặc Tag 2 </td>
                            <td className="border p-2 md:px-4 md:py-2">Ngừng nhận toàn bộ ZNS ở tất cả các Tag</td>
                        </tr>
                        <tr>
                            <td className="border p-2 md:px-4 md:py-2">Ngừng nhận chỉ ZNS Tag 3
                                <br />
                                <br />
                                Và không có ngừng nhận Tag 1 hoặc Tag 2
                            </td>
                            <td className="border p-2 md:px-4 md:py-2">Tự động bỏ cài đặt ngừng nhận ZNS
                                <br />
                                <br />
                                User có thể chủ động thao tác tắt mở cài đặt này tùy theo nhu cầu. <br />
                                Xem thêm tại phần 2 - Cơ chế ngừng nhận thông báo ZNS
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Bai19;