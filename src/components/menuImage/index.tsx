import Link from "next/link";
import Image from "next/image";

export default function MenuImage() {
    return (
        <div className="w-full flex items-center justify-center flex-wrap gap-4 lg:py-10 py-5 bg-slate-50">
            {/* Link hiển thị toàn bộ áo sơ mi or something */}
            <Link href={"/product/all"} className="hidden md:block">
                <div className="overflow-hidden">
                    <Image
                        className="object-cover w-36 h-40 lg:w-64 lg:h-72 xl:w-72 xl:h-80 transition duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                        src="/danhmuc/left.jpg"
                        width={300}
                        height={400}
                        alt=""
                    />
                </div>
            </Link>
            {/* Tất cả sản phẩm */}
            <Link href={"/product/all"}>
                <div className="overflow-hidden">
                    <Image
                        className="object-cover w-[300px] h-40 lg:w-[400px] lg:h-72 xl:w-[600px] xl:h-80 transition duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                        src="/danhmuc/all.jpg"
                        width={600}
                        height={400}
                        alt=""
                    />
                </div>
            </Link>
            {/* Link hiển thị toàn bộ áo polo or something */}
            <Link href={"/product/all"} className="hidden md:block">
                <div className="overflow-hidden">
                    <Image
                        className="object-cover w-36 h-40 lg:w-64 lg:h-72 xl:w-72 xl:h-80 transition duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"
                        src="/danhmuc/right.jpg"
                        width={300}
                        height={400}
                        alt=""
                    />
                </div>
            </Link>
        </div>
    );
}
