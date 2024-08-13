"use client";
import { useState } from "react";
import Link from "next/link";
import ProductPagination from "@/components/pagination";
import ProductCard from "@/components/productCard";
import Breadcrumb from "@/components/breadcrumb";
import { getRandomNumber } from "../../utils";
import Filter from "@/components/filter";

export default function Product(): React.ReactElement {
    const [showProductsByList, setShowProductByList] = useState(false);
    const randomSoldOut = getRandomNumber(1, 100);
    const randomNew = getRandomNumber(1, 100);
    const items: number[] = [];
    for (let index = 1; index <= 40; index++) {
        items.push(index);
    }

    const handlePageChange = (page: number) => {
        // alert(page);
    };

    return (
        <div className="px-5 py-5 lg:px-20">
            <Breadcrumb />
            <Filter
                title="Tất cả sản phẩm"
                setShowProductByList={setShowProductByList}
            />
            {showProductsByList && (
                <div className="grid gap-4 lg:gap-10 grid-cols-1">
                    {items.map((item, index) => (
                        <Link key={index} href={"/product/detail"}>
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
                                horizontal={true}
                            />
                        </Link>
                    ))}
                </div>
            )}
            {!showProductsByList && (
                <div className="grid gap-4 lg:gap-10 grid-cols-2 md:grid-cols-4">
                    {items.map((item, index) => (
                        <Link key={index} href={"/product/detail"}>
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
            )}
            <ProductPagination onChange={handlePageChange} />
        </div>
    );
}
