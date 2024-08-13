import { formatNumber, getPercentSale } from "@/app/utils";
import Image from "next/image";
import Horizontal from "./horizontal";

interface ProductCardProps {
    src: string;
    title: string;
    price: number;
    oldPrice?: number;
    soldOut?: boolean;
    newItem?: boolean;
    horizontal?: boolean;
}

export default function ProductCard({
    src,
    title,
    price,
    oldPrice,
    soldOut,
    newItem,
    horizontal,
}: ProductCardProps) {
    return (
        <>
            {!horizontal && (
                <div className="cursor-pointer mb-4">
                    <div className="group mb-4 rounded-lg overflow-hidden relative">
                        <Image
                            className="object-cover transition duration-500 ease-in-out transform group-hover:scale-110"
                            src={src}
                            width={500}
                            height={500}
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
                    <div className="capitalize">
                        <p className="truncate">{title}</p>
                        <div className="flex gap-1 md:gap-3 justify-center items-center">
                            <span className="text-sm md:text-base text-[#c80204] font-semibold">
                                {formatNumber(price)} ₫
                            </span>
                            {oldPrice && (
                                <span className="line-through text-xs md:text-sm">
                                    {formatNumber(oldPrice)} ₫
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {horizontal && (
                <Horizontal
                    src={src}
                    title={title}
                    price={price}
                    oldPrice={oldPrice}
                    soldOut={soldOut}
                    newItem={newItem}
                />
            )}
        </>
    );
}
