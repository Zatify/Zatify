

const Bai5 = () => {

    return (
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Phân biệt Thông báo ZNS và Tin UID
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Jun 3, 2024 4:57 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card5.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <h2 className='font-bold font-roboto text-2xl'>I. Định nghĩa cơ bản</h2>
                <p>
                    <strong>Thông báo ZNS (ZNS) là thông báo Chăm sóc khách hàng</strong> được gửi từ Zalo Official Account Doanh nghiệp đến khách hàng của Doanh nghiệp
                    <strong>bằng Số điện thoại có sử dụng Zalo</strong>
                </p>
                <p>
                    Mặt khác, <strong>Tin nhắn UID là tin nhắn gửi từ Official Account Doanh nghiệp đến Khách hàng đã có tương tác với OA</strong> của Doanh nghiệp có
                    sử dụng Zalo thông qua định danh User ID (UID)
                </p>
                <p><strong>Mã xác thực cho quá trình đăng nhập và đặt hàng</strong></p>
                <p>
                    *UID trong Zalo Official Account là định danh của một người dùng xác định đối với một tài khoản OA xác định. Với mỗi cặp User-OA khác nhau sẽ tồn tại
                    UID khác nhau
                </p>
                <p>
                    *Tương tác với OA được định nghĩa là một trong các hành động sau: Quan tâm OA, Gửi tin nhắn đến OA, Gọi đến OA hoặc chấp nhận cuộc gọi từ OA, Nhấn menu
                    tương tác nhanh / menu Dịch vụ / CTA của OA Chatbot
                </p>
            </div>


            <div className="flex justify-center mb-8">
                <img
                    src="/svg/bloggrid/baiviet/image5_1.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
            </div>

            <div className="prose font-manrope max-w-none space-y-4">
                <h2 className='font-bold font-roboto text-2xl'>II. Phân biệt theo chi tiết</h2>
                <p>
                    Dịch vụ thông báo ZNS và Tin UID cung cấp dịch vụ đa dạng để Doanh nghiệp có thể sử dụng từng loại dịch vụ tùy theo nhu cầu và mục đích sử dụng:
                </p>
                {/* Table phân biệt ZNS và Tin UID */}
                <div className="overflow-x-auto">
                    <div className="overflow-x-auto">
                        <table className="border border-gray-200 text-sm md:text-base w-full table-fixed">
                            <thead>
                                <tr>
                                    <th
                                        className="border px-2 py-6 text-center align-middle font-semibold w-[15%] md:w-[10%]"
                                        rowSpan={2}
                                    ></th>
                                    <th
                                        className="border px-2 py-6 text-center align-middle font-semibold"
                                        rowSpan={2}
                                    >
                                        Thông báo ZNS
                                    </th>
                                    <th
                                        className="border px-2 py-6 text-center align-middle font-semibold"
                                        colSpan={3}
                                    >
                                        Tin UID
                                    </th>
                                </tr>
                                <tr>
                                    <th className="border px-2 py-6 text-center font-semibold w-[22%]">
                                        Tin Tư vấn
                                    </th>
                                    <th className="border px-2 py-6 text-center font-semibold w-[25%]">
                                        Tin Giao dịch
                                    </th>
                                    <th className="border px-2 py-6 text-center font-semibold w-[22%]">
                                        Tin Truyền thông
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* Mục đích */}
                                <tr>
                                    <td className="border px-2 py-6 align-top font-medium">Mục đích</td>
                                    <td className="border px-2 py-6 align-top">
                                        Thông báo đến KH <span className="underline">đã tồn tại giao dịch</span> với doanh nghiệp với nhiều mục đích:
                                        <ul className="list-disc pl-5 mt-2">
                                            <li>Giao dịch (mã xác thực, xác nhận giao dịch,…)</li>
                                            <li>Chăm sóc khách hàng, cập nhật chính sách, tài khoản, quyền lợi thành viên,…</li>
                                            <li>Hậu mãi (chương trình khuyến mãi, giới thiệu sản phẩm mới)</li>
                                        </ul>
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        Tư vấn cho khách hàng về sản phẩm, dịch vụ
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        Thông báo, cập nhật thông tin tới khách hàng về trạng thái của một giao dịch hoặc trao đổi về sản phẩm, dịch vụ, như xác nhận lịch hẹn, thông báo hóa đơn,…
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        Cập nhật đến khách hàng những thông tin quảng cáo về sản phẩm, dịch vụ, hoặc thông tin chung về doanh nghiệp
                                    </td>
                                </tr>

                                {/* Đối tượng nhận */}
                                <tr>
                                    <td className="border px-2 py-6 align-top font-medium">Đối tượng nhận</td>
                                    <td className="border px-2 py-6 align-top">
                                        Số điện thoại của Khách hàng của doanh nghiệp có sử dụng Zalo
                                    </td>
                                    <td className="border px-2 py-6 align-top"
                                        colSpan={2}>
                                        Người dùng Zalo đã tương tác với OA (Theo UID)
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        Người Quan tâm OA
                                    </td>
                                </tr>

                                {/* Điều kiện cần có */}
                                <tr>
                                    <td className="border px-2 py-6 align-top font-medium">
                                        Điều kiện cần có (Opt-in Condition)
                                    </td>
                                    <td className="border px-2 py-6 align-top">Không</td>
                                    <td className="border px-2 py-6 align-top">
                                        OA có được UID người dùng, và Người dùng có phát sinh tương tác* hoặc cho phép tương tác. Tương tác* cuối của người dùng trong khoảng thời gian cho phép (07 ngày).
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        OA có được UID người dùng, và
                                        Người dùng có phát sinh tương tác* hoặc cho phép tương tác.
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        OA có được UID người dùng, và Người dùng đang quan tâm OA.
                                    </td>
                                </tr>

                                {/* Công cụ gửi */}
                                <tr>
                                    <td className="border px-2 py-6 align-top font-medium">Công cụ gửi</td>
                                    <td className="border px-2 py-6 align-top">
                                        API<br />
                                        Gửi theo chiến dịch<br />
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        <ul className="list-disc pl-5">
                                            <li>OA OpenAPI</li>
                                            <li>OA Manager</li>
                                        </ul>
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        <ul className="list-disc pl-5">
                                            <li>OA OpenAPI</li>
                                            <li>OA Manager (coming soon)</li>
                                        </ul>
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        <ul className="list-disc pl-5">
                                            <li>OA OpenAPI</li>
                                            <li>OA Manager</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* Hình thức */}
                                <tr>
                                    <td className="border px-2 py-6 align-top font-medium">Hình thức (Format)</td>
                                    <td className="border px-2 py-6 align-top">
                                        Theo template ZNS đã được xét duyệt
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        Theo định dạng Tư vấn.
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        Theo định dạng Giao dịch.
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        Theo định dạng Truyền thông.
                                    </td>
                                </tr>

                                {/* Chi phí */}
                                <tr>
                                    <td className="border px-2 py-6 align-top font-medium">
                                        Chi phí (Chưa gồm VAT)
                                    </td>
                                    <td className="border px-2 py-6 align-top">
                                        ZNS Xác thực: 300 VND / ZNS<br />
                                        ZNS Khác: 200 VND / ZNS<br />
                                        <span className="italic">*Chưa gồm các tùy chọn bổ sung</span><br />
                                    </td>
                                    <td className="border px-2 py-6 align-top">50 VND/tin</td>
                                    <td className="border px-2 py-6 align-top">150 VND/tin</td>
                                    <td className="border px-2 py-6 align-top">Miễn phí</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
            <div className="prose font-manrope max-w-none my-8 space-y-4">
                <h2 className='font-bold font-roboto text-2xl'>III. Một số trường hợp ứng dụng ZNS</h2>
                <img
                    src="/svg/bloggrid/baiviet/image5_2.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
                <img
                    src="/svg/bloggrid/baiviet/image5_3.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
                <img
                    src="/svg/bloggrid/baiviet/image5_4.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />

            </div>

            <div className="prose font-manrope max-w-none my-8 space-y-4">
                <h2 className='font-bold font-roboto text-2xl'>IV. Một số trường hợp sử dụng Tin UID</h2>
                <img
                    src="/svg/bloggrid/baiviet/image5_5.webp"
                    alt="Zalo OA minh họa"
                    className=" shadow max-w-full"
                />
            </div>
        </main>
    );
};

export default Bai5;