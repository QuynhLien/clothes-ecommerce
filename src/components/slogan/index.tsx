import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PaymentIcon from "@mui/icons-material/Payment";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

export default function Slogan() {
    return (
        <div className="w-full lg:py-10 py-5 px-10 bg-slate-50 ">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="group">
                    <div className="flex items-center">
                        <LocalAirportIcon className="text-5xl text-red-800 rotate-45 group-hover:text-red-600" />
                        <span className="uppercase text-red-800 group-hover:text-red-600 font-medium ml-1">
                            GIAO HÀNG
                        </span>
                    </div>
                    <div className="mt-2">
                        Miễn phí vận chuyển cho đơn hàng trên 399.000 VNĐ
                        <br />- Giao hàng và thu tiền tận nơi
                        <br />- Chuyển khoản và giao hàng
                        <br />- Mua hàng tại shop
                    </div>
                </div>
                <div className="group">
                    <div className="flex items-center">
                        <FavoriteBorderIcon className="text-5xl text-red-800 group-hover:text-red-600" />
                        <span className="uppercase text-red-800 group-hover:text-red-600 font-medium ml-1">
                            chăm sóc tận tình
                        </span>
                    </div>
                    <div className="mt-2">
                        Luôn sẵn sàng tư vấn cho khách hàng
                        <br />- Tất cả các ngày trong tuần
                        <br />- Các mẫu áo thịnh hành bây giờ
                        <br />- Kích thước, màu sắc áo phù hợp
                    </div>
                </div>
                <div className="group">
                    <div className="flex items-center">
                        <PaymentIcon className="text-5xl text-red-800 group-hover:text-red-600" />
                        <span className="uppercase text-red-800 group-hover:text-red-600 font-medium ml-1">
                            thanh toán online an toàn
                        </span>
                    </div>
                    <div className="mt-2">
                        Cổng thanh toán trực tuyến
                        <br />- Tài khoản ngân hàng
                        <br />- Visa/MasterCard
                        <br />- Momo
                    </div>
                </div>
                <div className="group">
                    <div className="flex items-center">
                        <HeadsetMicIcon className="text-5xl text-red-800 group-hover:text-red-600" />
                        <span className="uppercase text-red-800 group-hover:text-red-600 font-medium ml-1">
                            hỗ trợ 24/7
                        </span>
                    </div>
                    <div className="mt-2">
                        Gọi ngay cho chúng tôi khi bạn có thắc mắc
                        <br />- 0868.444.644
                    </div>
                </div>
            </div>
        </div>
    );
}
