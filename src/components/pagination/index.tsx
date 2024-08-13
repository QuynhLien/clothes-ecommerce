"use client";
import { Pagination } from "@mui/material";
import { useState } from "react";

interface ProductPaginationProps {
    onChange?: (page: number) => void;
}

export default function ProductPagination({
    onChange,
}: ProductPaginationProps): React.ReactElement {
    const [page, setPage] = useState(1);

    const handleChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ): void => {
        setPage(value);
        onChange && onChange(value);
    };

    return (
        <div className="w-full py-6 flex justify-center">
            <Pagination
                count={100}
                page={page}
                onChange={handleChange}
                color="primary"
            />
        </div>
    );
}
