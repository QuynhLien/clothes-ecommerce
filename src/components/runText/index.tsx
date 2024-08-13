"use client";
import React, { useState, useEffect } from "react";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";

interface RunTextProps {
    text: string[];
}

const RunText: React.FC<RunTextProps> = ({ text }) => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => prev - 1);
        }, 300);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const renderString = (): React.ReactNode => {
        const texts: React.ReactNode[] = [];
        for (let index = 0; index < 100; index++) {
            texts.push(
                <span key={index}>
                    {index === 0 && (
                        <span>
                            &emsp;
                            <StarBorderPurple500OutlinedIcon className="-mt-2" />
                            &emsp;
                        </span>
                    )}
                    {renderText()}
                </span>
            );
        }
        return texts;
    };

    const renderText = (): React.ReactNode => {
        return text.map((txt) => (
            <span key={txt}>
                {txt}
                <span>
                    &emsp;
                    <StarBorderPurple500OutlinedIcon className="-mt-2" />
                    &emsp;
                </span>
            </span>
        ));
    };

    const marqueeStyle = {
        display: "inline-block",
        whiteSpace: "nowrap",
        transition: "transform 0.3s linear",
        transform: `translateX(${position}rem)`,
    };

    return (
        <div className="w-full overflow-hidden py-10 lg:py-12 border-slate-200 border">
            <div
                className="uppercase text-2xl lg:text-4xl font-sans font-extralight tracking-wide"
                style={marqueeStyle}
            >
                {renderString()}
            </div>
        </div>
    );
};

export default RunText;
