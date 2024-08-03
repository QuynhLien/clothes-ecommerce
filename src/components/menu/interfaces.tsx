export interface MenusProps {
  menus: Menus[];
}

export interface Menus {
  menu: string;
  link: string;
  list: Menu[];
}

export interface Menu {
  menu: string;
  link: string;
}
