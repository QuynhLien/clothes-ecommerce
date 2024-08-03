import { MutableRefObject } from "react";

interface HandleScrollProps {
  setTransform: (transform: string) => void;
  footerRef: MutableRefObject<HTMLDivElement | null>;
  lastScrollTop: number;
  setLastScrollTop: (scrollTop: number) => void;
}

export const handleScroll = ({
  setTransform,
  footerRef,
  lastScrollTop,
  setLastScrollTop,
}: HandleScrollProps) => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
  const footerHeight = footerRef.current?.getBoundingClientRect().height || 0;
  const hidePercentOfFooter = 50;
  const ratio = hidePercentOfFooter / footerHeight;

  if (distanceFromBottom <= footerHeight && scrollTop > lastScrollTop) {
    const fixDistance = distanceFromBottom * ratio;
    setTransform(
      "translate(0%, -" + fixDistance + "%) translate3d(0px, 0px, 0px)"
    );
  } else {
    const fixDistance =
      distanceFromBottom > footerHeight
        ? hidePercentOfFooter
        : distanceFromBottom * ratio;
    setTransform(
      "translate(0%, -" + fixDistance + "%) translate3d(0px, 0px, 0px)"
    );
  }

  setLastScrollTop(scrollTop);
};
