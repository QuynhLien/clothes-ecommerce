"use client";
import { useState } from "react";
import Link from "next/link";
import { Menus } from "../interfaces";
import "../menu.css";

interface MenuVerticalProps {
  children: React.ReactNode;
  menus: Menus[];
}

export default function MenuVeritical({ children, menus }: MenuVerticalProps) {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const open = Boolean(menuOpen);

  const handleMouseEnter = (menu: string) => {
    setMenuOpen(menu);
  };

  const handleMouseLeave = () => {
    setMenuOpen(null);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => handleMouseEnter("menu")}
      onMouseLeave={handleMouseLeave}
    >
      <button className="transition ease-in-out duration-300 h-9 w-9 rounded-full focus:bg-rose-50 focus:text-red-800 focus:scale-110 group-hover:text-red-800 group-hover:bg-rose-50 group-hover:scale-110 relative flex items-center justify-center bg-inherit lg:hidden">
        {children}
      </button>
      {open && (
        <ul className="divide-y divide-dashed divide-slate-100 menu-list menu-icon">
          {menus?.map((menu, indexMenu) => (
            <div key={indexMenu}>
              <li className="py-3 px-6 cursor-pointer text-red-800 bg-rose-50 hover:italic hover:underline">
                <Link href={menu.link}>{menu.menu}</Link>
              </li>
              {menu.list.map((menuItem, indexMenuItem) => (
                <li
                  key={indexMenuItem}
                  className="py-3 px-6 cursor-pointer hover:text-red-800"
                >
                  <Link href={menuItem.link}>{menuItem.menu}</Link>
                </li>
              ))}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
