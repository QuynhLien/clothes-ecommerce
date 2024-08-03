import Link from "next/link";
import { pinyon_script } from "../../../../app/fonts";

interface HeadererTitleProps {
  title: string;
}

export default function HeaderTitle({ title }: HeadererTitleProps) {
  return (
    <Link href="/">
      <div
        className={`${pinyon_script.className} capitalize text-[40px] -mb-2`}
      >
        {title}
      </div>
    </Link>
  );
}
