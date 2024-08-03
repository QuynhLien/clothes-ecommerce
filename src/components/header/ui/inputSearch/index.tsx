import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function HeaderInputSearch() {
  return (
    <TextField
      className="hidden md:block"
      placeholder="Tìm kiếm..."
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon className="hover:text-red-800 cursor-pointer" />
          </InputAdornment>
        ),
        style: {
          backgroundColor: "white",
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
        },
      }}
    />
  );
}
