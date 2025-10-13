

const Bai18 = () => {

    return (
        <main className="mt-40 max-w-[75rem] mx-auto px-4">
            {/* Tiêu đề và ảnh bên phải */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-1 my-auto">
                    <h1 className="text-3xl md:text-5xl font-roboto font-bold mb-2">
                        Cách sử dụng và ứng dụng của mẫu tin ZNS xác thực
                    </h1>
                    <div className="text-gray-400 md:pt-4 font-manrope text-md mb-4">Jul 18, 2024 9:20 am</div>
                </div>
                <img
                    src="/svg/bloggrid/card18.jpg"
                    alt="Zalo OA xác thực là gì?"
                    className="w-[100%] md:w-[50%] object-cover"
                />
            </div>
            {/* Nội dung chính */}
            <div className="prose font-manrope max-w-none mb-8 space-y-4">
                <p>
                    <span>Với tinh thần luôn luôn lắng nghe và thấu hiểu nhu cầu của khách hàng muốn trải nghiệm mua sắm thuận tiện và dễ dàng, đội ngũ nghiên cứu và phát triển sản phẩm Zalo Notification Service (ZNS) chính thức ra mắt mẫu ZNS Xác thực như một </span>công cụ tối ưu hỗ trợ người dùng bảo vệ tài khoản và nâng cao trải nghiệm của mình.
                </p>
                <br />
                <h2 className='font-bold text-wxl'>1. ZNS Xác thực là gì? Cách ứng dụng ZNS Xác thực:</h2>
                <p>ZNS Xác thực là mã xác thực một lần được gửi đến người dùng Zalo thông qua dịch vụ Zalo Notification Service (ZNS). Với mục đích xác nhận đăng nhập các ứng dụng online, thông báo về quá trình tạo hoặc thay đổi trạng thái người dùng (gửi mã xác thực cho khách hàng tạo tài khoản mới, xác nhận đổi mật khẩu, xác thực tài khoản, xác thực giao dịch,…)</p>
                <img
                    src="/svg/bloggrid/baiviet/image18_1.webp"
                    alt="Zalo OA minh họa"
                    className="max-w-full mx-auto"
                />
                <h2 className='font-bold text-wxl'> 2. Cấu trúc của một mẫu tin ZNS Xác thực: </h2>
                <p>Doanh nghiệp sử dụng mẫu ZNS Xác thực mặc định trên tài khoản Zalo Cloud Account và cấu trúc mặc định của 1 mẫu tin ZNS Xác thực bao gồm: </p>
                <ul className="list-disc list-inside pl-4 md:pl-6 ">
                    <li>Logo OA </li>
                    <li>Thông tin: <strong>“Mã xác thực của bạn là (otp)”</strong> </li>
                </ul>
                <p>Doanh nghiệp có thể sao chép mã xác thực từ thông báo ZNS.</p>
                <p>Bên cạnh những nội dung mặc định, doanh nghiệp cũng có thể chỉnh sửa nội dung ZNS gửi kèm mã xác thực. </p>
                <table className="w-full xl:w-[85%] mx-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2 text-left w-[30%] md:w-[28%]"></th>
                            <th className="border px-4 py-2 text-left w-[35%] md:w-[36%]">Phần cố định của hệ thống</th>
                            <th className="border px-4 py-2 text-left">Phần có thể chỉnh sửa theo nhu cầu sử dụng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2 md:px-4 md:py-2"><p className="pt-3"><strong>Logo đăng ký </strong></p><br />
                                <img
                                    src="/svg/bloggrid/baiviet/table18_1.webp"
                                    alt="Zalo OA minh họa"
                                    className="max-w-full"
                                />
                            </td>
                            <td className="border p-2 md:px-4 md:py-2">
                                <img
                                    src="/svg/bloggrid/baiviet/no.webp"
                                    alt="Zalo OA minh họa"
                                    className="max-w-14 m-auto"
                                />
                            </td>
                            <td className="border p-2 md:px-4 md:py-2">
                                <img
                                    src="/svg/bloggrid/baiviet/yes.webp"
                                    alt="Zalo OA minh họa"
                                    className="max-w-14 m-auto"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2 md:px-4 md:py-2"><strong> Nội dung:</strong><br /><p className="py-4"> Mã xác thực của bạn là<br /> (otp)</p>
                                <img
                                    src="/svg/bloggrid/baiviet/table18_2.webp"
                                    alt="Zalo OA minh họa"
                                    className="max-w-full"
                                />
                            </td>
                            <td className="border p-2 md:px-4 md:py-2">
                                <img
                                    src="/svg/bloggrid/baiviet/yes.webp"
                                    alt="Zalo OA minh họa"
                                    className="max-w-14 m-auto"
                                />
                            </td>
                            <td className="border p-2 md:px-4 md:py-2">
                                <img
                                    src="/svg/bloggrid/baiviet/no.webp"
                                    alt="Zalo OA minh họa"
                                    className="max-w-14 m-auto"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2 md:px-4 md:py-2"><p className="py-4"><strong>Nội dung gửi kèm mã xác thực:</strong></p>
                                <img
                                    src="/svg/bloggrid/baiviet/table18_3.webp"
                                    alt="Zalo OA minh họa"
                                    className="max-w-full"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <img
                                    src="/svg/bloggrid/baiviet/no.webp"
                                    alt="Zalo OA minh họa"
                                    className="max-w-14 m-auto"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <img
                                    src="/svg/bloggrid/baiviet/yes.webp"
                                    alt="Zalo OA minh họa"
                                    className="max-w-14 m-auto"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><strong>Lưu ý:</strong> Mẫu tin ZNS Xác thực không hỗ trợ sử dụng nút CTA. Trong trường hợp xác thực tài khoản, doanh nghiệp có thể ngoại lệ gửi thông báo đến khách hàng chưa phát sinh giao dịch với OA.  </p>
                <img
                    src="/svg/bloggrid/baiviet/image18_2.webp"
                    alt="Zalo OA minh họa"
                    className="md:w-[70%] w-full mx-auto"
                />
                <p className="text-center"><i>(Hình ảnh minh hoạ mẫu tin ZNS Xác thực ở cả 2 giao diện sáng và tối)</i> </p>
            </div>
        </main>
    );
};

export default Bai18;