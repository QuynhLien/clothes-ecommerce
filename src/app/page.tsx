import Link from "next/link";
import ProductCard from "@/components/productCard";
import Carousel from "@/components/carousel";
import MenuImage from "@/components/menuImage";
import RunText from "@/components/runText";
import Slogan from "@/components/slogan";
import { getRandomNumber } from "./utils";

export default function Home() {
    const randomSoldOut = getRandomNumber(1, 8);
    const randomNew = getRandomNumber(1, 8);
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const maxItems = 8;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Carousel />
            <div className="w-full flex items-center flex-col px-10 lg:px-36 lg:py-10 py-5">
                <div className="w-fit border-b-2 border-red-800 mb-5 font-medium text-red-800 text-xl sm:text-2xl md:text-3xl p-2 sm:pd-4">
                    Thời trang hot nhất
                </div>
                <div className="grid gap-4 lg:gap-10 grid-cols-2 md:grid-cols-4">
                    {items.slice(0, maxItems).map((item) => (
                        <Link key={item} href={"/product/detail"}>
                            <ProductCard
                                src={`/mock_img/img${getRandomNumber(
                                    1,
                                    5
                                )}.jpg`}
                                title="áo Polo Cá Sấu Thêu Chữ Ký Form Regular PO087 Màu Xám"
                                price={item === randomSoldOut ? 315000 : 220000}
                                oldPrice={
                                    item === randomSoldOut || item === randomNew
                                        ? undefined
                                        : 315000
                                }
                                soldOut={item === randomSoldOut}
                                newItem={
                                    item === randomNew && item !== randomSoldOut
                                }
                            />
                        </Link>
                    ))}
                </div>
                {items.length > maxItems && (
                    <Link
                        href=""
                        className="mt-2 p-4 py-2 border border-black hover:text-red-800 hover:border-red-800"
                    >
                        Xem thêm
                    </Link>
                )}
            </div>
            <MenuImage />
            <div className="w-full flex items-center flex-col px-10 lg:px-36 lg:py-10 py-5">
                <div className="w-fit border-b-2 border-red-800 mb-5 font-medium text-red-800 text-xl sm:text-2xl md:text-3xl p-2 sm:pd-4">
                    Thời trang mới nhất
                </div>
                <div className="grid gap-4 lg:gap-10 grid-cols-2 md:grid-cols-4">
                    {items.slice(0, maxItems).map((item) => (
                        <Link key={item} href={"/product/detail"}>
                            <ProductCard
                                src={`/mock_img/img${getRandomNumber(
                                    1,
                                    5
                                )}.jpg`}
                                title="áo Polo Cá Sấu Thêu Chữ Ký Form Regular PO087 Màu Xám"
                                price={315000}
                                newItem={true}
                            />
                        </Link>
                    ))}
                </div>
                {items.length > maxItems && (
                    <Link
                        href=""
                        className="mt-2 p-4 py-2 border border-black hover:text-red-800 hover:border-red-800"
                    >
                        Xem thêm
                    </Link>
                )}
            </div>
            <RunText text={["give us your best shot!", "on the gram"]} />
            <Slogan />
        </main>
    );
}
