"use client";
import { useState } from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import WindowSharpIcon from "@mui/icons-material/WindowSharp";
import {
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";

interface FilterProps {
    title?: string;
    setShowProductByList?: (e: boolean) => void | undefined;
}

export default function Filter({
    title,
    setShowProductByList,
}: FilterProps): React.ReactElement {
    const [sort, setSort] = useState("Mặc định");

    const handleSortChange = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };

    const handleShowGrid = () => {
        setShowProductByList && setShowProductByList(false);
    };

    const handleShowList = () => {
        setShowProductByList && setShowProductByList(true);
    };

    return (
        <>
            <div
                className={`${
                    title && "border-b sm:border-0 border-red-800"
                } mb-5 p-2 sm:p-0 text-center sm:text-left sm:mb-0`}
            >
                {title && (
                    <div className="uppercase font-semibold text-red-800 text-xl sm:text-2xl md:text-3xl block sm:hidden mb-2">
                        {title}
                    </div>
                )}
                <div
                    className={`flex gap-1/2 items-center justify-center md:justify-end ${
                        title && "sm:float-end"
                    }`}
                >
                    <div className="text-sm font-medium">Sắp xếp:</div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            onChange={handleSortChange}
                            className="text-sm"
                        >
                            <MenuItem value={"Mặc định"}>Mặc định</MenuItem>
                            <MenuItem value={"Mới nhất"}>Mới nhất</MenuItem>
                            <MenuItem value={"Xem nhiều"}>Xem nhiều</MenuItem>
                            <MenuItem value={"Mua nhiều"}>Mua nhiều</MenuItem>
                            <MenuItem value={"Giá giảm dần"}>
                                Giá giảm dần
                            </MenuItem>
                            <MenuItem value={"Giá tăng dần"}>
                                Giá tăng dần
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <div
                        className="cursor-pointer transition ease-in-out duration-300 h-9 w-9 rounded-full hover:text-red-800 hover:bg-rose-50 relative flex items-center justify-center bg-inherit hover:scale-110"
                        onClick={handleShowList}
                    >
                        <ListAltIcon className="text-[26px]" />
                    </div>
                    <div
                        className="cursor-pointer transition ease-in-out duration-300 h-9 w-9 rounded-full hover:text-red-800 hover:bg-rose-50 relative flex items-center justify-center bg-inherit hover:scale-110"
                        onClick={handleShowGrid}
                    >
                        <WindowSharpIcon className="text-[26px]" />
                    </div>
                </div>
            </div>
            {title && (
                <div className="hidden sm:block border-b md:border-b-2 border-red-800 mb-5 font-medium text-red-800 text-xl sm:text-2xl md:text-3xl p-2 sm:pd-4 text-center sm:text-left">
                    {title}
                </div>
            )}
        </>
    );
}
