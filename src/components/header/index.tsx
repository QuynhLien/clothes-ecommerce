import HeaderTitle from "./ui/title";
import HeaderMenuItems from "./ui/menuItems";
import HeaderInputSearch from "./ui/inputSearch";
import HeaderMenuIcons from "./ui/menuIcons";
import { Menus } from "../menu/interfaces";

export default function Header() {
  const menus: Menus[] = [
    {
      menu: "áo",
      link: "/",
      list: [
        {
          menu: "áo croptop",
          link: "/",
        },
        {
          menu: "áo sơ mi",
          link: "/",
        },
        {
          menu: "áo thun",
          link: "/",
        },
      ],
    },
    {
      menu: "đầm",
      link: "/",
      list: [
        {
          menu: "đầm dài",
          link: "/",
        },
        {
          menu: "đầm ngắn",
          link: "/",
        },
        {
          menu: "đầm dạ hội",
          link: "/",
        },
      ],
    },
    {
      menu: "giày dép",
      link: "/",
      list: [
        {
          menu: "giày",
          link: "/",
        },
        {
          menu: "dép",
          link: "/",
        },
      ],
    },
    {
      menu: "phụ kiện",
      link: "/",
      list: [
        {
          menu: "dây chuyền",
          link: "/",
        },
        {
          menu: "bông tai",
          link: "/",
        },
        {
          menu: "túi xách",
          link: "/",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#fafafa] border-b border-[#f5f5f5] sticky top-0 z-10">
      <div className="relative min-h-[60px] flex flex-wrap items-center justify-between gap-4 p-2 px-4">
        <HeaderTitle title="Fashion" />
        <div className="flex flex-wrap items-center gap-8 cursor-pointer">
          <HeaderMenuItems menus={menus} />
          <HeaderInputSearch />
          <HeaderMenuIcons menus={menus} />
        </div>
      </div>
    </div>
  );
}
