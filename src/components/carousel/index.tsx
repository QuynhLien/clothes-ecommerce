"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "./styles.css";
import Link from "next/link";

export default function Carousel() {
    const images = [1, 2, 3];
    const [startSlider, setStartSlider] = useState<boolean>(false);
    const [slide, setSlide] = useState<number>(1);
    const [intervalId, setIntervalId] = useState<ReturnType<
        typeof setInterval
    > | null>(null);

    const changeNextSlide = useCallback(() => {
        if (slide >= images.length) {
            setSlide(1);
        } else {
            setSlide(slide + 1);
        }
    }, [images.length, slide]);

    const changePrevSlide = () => {
        if (slide <= 1) {
            setSlide(images.length);
        } else {
            setSlide(slide - 1);
        }
    };

    const changeSlide = (image: number) => {
        setSlide(image);
    };

    const startAnimation = useCallback(() => {
        const newIntervalId = setInterval(() => {
            changeNextSlide();
        }, 1000);
        setIntervalId(newIntervalId);
    }, [changeNextSlide]);

    const stopAnimation = useCallback(() => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }, [intervalId]);

    useEffect(() => {
        const delayedStart = setTimeout(() => {
            setStartSlider(true);
            startAnimation();
        }, 2000);

        return () => {
            clearTimeout(delayedStart);
            stopAnimation();
        };
    }, [startAnimation, stopAnimation, setStartSlider]);

    return (
        <div className="group relative w-full mb-2 bg-rose-50">
            {/* Các hình ảnh của slider */}
            <Link href={"/product/all"}>
                <div className="images">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`${
                                startSlider
                                    ? slide === image
                                        ? ""
                                        : "hidden"
                                    : index > 0
                                    ? "block ml-[100%]"
                                    : "block"
                            } images`}
                        >
                            <Image
                                src={`/banner/slide_${image}.jpeg`}
                                alt="BANNER FASHION"
                                width={10000}
                                height={500}
                                priority
                            />
                        </div>
                    ))}
                </div>
            </Link>
            {/* Hai mũi tên chuyển hình */}
            <div
                className="absolute top-1/2 -translate-y-1/2 left-4 group-hover:flex px-2 lg:px-6 flex lg:hidden arrow cursor-pointer transition ease-in-out duration-300 h-9 w-9 rounded-full hover:text-red-800 hover:bg-rose-50/[0.5] items-center justify-center bg-inherit hover:scale-125"
                onClick={changePrevSlide}
            >
                <ArrowBackIosNewRoundedIcon />
            </div>
            <div
                className="absolute top-1/2 -translate-y-1/2 right-4 group-hover:flex px-2 lg:px-6 flex lg:hidden arrow cursor-pointer transition ease-in-out duration-300 h-9 w-9 rounded-full hover:text-red-800 hover:bg-rose-50/[0.5] items-center justify-center bg-inherit hover:scale-125"
                onClick={changeNextSlide}
            >
                <ArrowForwardIosRoundedIcon />
            </div>
            {/* Mấy cái chấm chuyển hình */}
            <div className="dots absolute w-full flex items-center justify-center gap-2 bottom-2 lg:bottom-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${
                            slide === image ? "bg-white/[0.5]" : ""
                        } cursor-pointer transition ease-in-out duration-300 h-4 w-4 rounded-full hover:bg-white bg-white/[.06] hover:scale-125 dot`}
                        onClick={() => changeSlide(image)}
                    ></div>
                ))}
            </div>
        </div>
    );
}
