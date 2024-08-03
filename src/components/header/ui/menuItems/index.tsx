import { MenusProps } from "@/components/menu/interfaces";
import MenuHorizontal from "@/components/menu/menuHorizontal";

export default function HeaderMenuItems({ menus }: MenusProps) {
  return <MenuHorizontal menus={menus} />;
}
