import { formatNumber, getPercentSale } from "@/app/utils";
import Image from "next/image";

interface HorizontalProps {
    src: string;
    title: string;
    price: number;
    oldPrice?: number;
    soldOut?: boolean;
    newItem?: boolean;
}

export default function Horizontal({
    src,
    title,
    price,
    oldPrice,
    soldOut,
    newItem,
}: HorizontalProps) {
    return (
        <div className="cursor-pointer mb-4 flex items-start gap-4 lg:gap-10 w-full">
            <div className="group mb-4 rounded-lg overflow-hidden relative">
                <Image
                    className="object-cover transition duration-500 ease-in-out transform group-hover:scale-110"
                    src={src}
                    width={300}
                    height={400}
                    alt={title}
                />
                {soldOut && (
                    <div className="w-24 h-24 xl:w-36 xl:h-36 font-medium rounded-full flex items-center justify-center bg-opacity-70 bg-gray-700 text-slate-200 text-md xl:text-lg absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
                        Hết hàng
                    </div>
                )}
                {oldPrice && (
                    <div className="w-11 h-11 xl:w-16 xl:h-16 font-medium rounded-full flex items-center justify-center bg-opacity-70 bg-gray-900 text-slate-200 text-sm xl:text-base absolute top-2 right-2">
                        -{getPercentSale(price, oldPrice)}%
                    </div>
                )}
                {newItem && (
                    <div className="w-10 h-14 xl:w-12 xl:h-16 font-medium rounded-lg flex items-center justify-center bg-opacity-90 bg-red-700 text-slate-200 text-sm xl:text-base absolute top-0 left-0 capitalize">
                        new
                    </div>
                )}
            </div>
            <div className="truncate">
                <p className="text-wrap capitalize font-normal md:font-semibold text-xl lg:text-2xl ">
                    {title}
                </p>
                <p className="hidden md:block text-wrap mt-4 text-slate-600">
                    Áo polo PO133 form regular kết hợp giữa cổ điển và thanh
                    lịch, nổi bật với biểu tượng số và chữ thêu tinh tế ở một
                    bên ngực. Bo cổ dệt sọc 3 tone màu chính của bộ sưu tập, tạo
                    điểm nhấn thanh lịch và dễ dàng phối hợp với nhiều trang
                    phục khác nhau.
                </p>
                <div className="flex gap-1 md:gap-3 items-center mt-4">
                    <span className="text-lg md:text-xl text-[#c80204] font-semibold">
                        {formatNumber(price)} ₫
                    </span>
                    {oldPrice && (
                        <span className="line-through text-sm md:text-base">
                            {formatNumber(oldPrice)} ₫
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
