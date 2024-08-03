"use client";
import { useState } from "react";
import Link from "next/link";
import { MenusProps } from "../interfaces";
import "../menu.css";

export default function MenuHorizontal({ menus }: MenusProps) {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const open = Boolean(menuOpen);

  const handleMouseEnter = (menu: string) => {
    setMenuOpen(menu);
  };

  const handleMouseLeave = () => {
    setMenuOpen(null);
  };

  return (
    <div className="flex-wrap uppercase font-medium text-sm hidden lg:flex">
      {menus?.map((menu, indexMenu) => (
        <div
          key={indexMenu}
          className="relative "
          onMouseEnter={() => handleMouseEnter(menu.menu)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={menu.link} className="hover:text-red-800 p-4">
            {menu.menu}
          </Link>
          {open && menuOpen == menu.menu && (
            <ul className="divide-y divide-dashed divide-slate-100 menu-list">
              {menu.list.map((menuItem, indexMenuItem) => (
                <li
                  key={indexMenuItem}
                  className="py-3 px-6 cursor-pointer hover:text-red-800"
                >
                  <Link href={menuItem.link}>{menuItem.menu}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
