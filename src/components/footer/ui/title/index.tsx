import { pinyon_script } from "../../../../app/fonts";

interface FooterTitleProps {
  title: string;
}

export default function FooterTitle({ title }: FooterTitleProps) {
  return (
    <p
      className={`${pinyon_script.className} capitalize text-[80px] text-center text-slate-200`}
    >
      {title}
    </p>
  );
}
