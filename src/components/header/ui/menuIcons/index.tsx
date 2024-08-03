import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Badge } from "@mui/material";
import { MenusProps } from "@/components/menu/interfaces";
import MenuVeritical from "@/components/menu/menuVertical";

export default function HeaderMenuIcons({ menus }: MenusProps) {
  return (
    <div className="icons-menu flex flex-wrap gap-2">
      <div className="transition ease-in-out duration-300 h-9 w-9 rounded-full hover:text-red-800 hover:bg-rose-50 relative flex items-center justify-center bg-inherit hover:scale-110">
        <Badge badgeContent={4} max={999} color="warning">
          <LocalMallOutlinedIcon />
        </Badge>
      </div>
      <div className="transition ease-in-out duration-300 h-9 w-9 rounded-full hover:text-red-800 hover:bg-rose-50 relative flex items-center justify-center bg-inherit hover:scale-110">
        <PersonOutlineIcon className="text-[26px]" />
      </div>
      <MenuVeritical menus={menus}>
        <MenuRoundedIcon />
      </MenuVeritical>
    </div>
  );
}
