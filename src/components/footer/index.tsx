"use client";
import { useEffect, useRef, useState } from "react";
import { handleScroll } from "./handleEvent/handleScroll";

import FooterTitle from "./ui/title";
import FooterContact from "./ui/contact";
import FooterLocation from "./ui/location";
import FooterSocialMedia from "./ui/socialMedia";

import "./footer.css";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [transform, setTransform] = useState(
    "translate(0%, 0%) translate3d(0px, 0px, 0px)"
  );

  const hotline = "0585818645";
  const email = "huynhminhteo@gmail.com";
  const address = "381/hem bít/hem nhớ Q.Bình Tân, TP.HCM";
  const googleMaps =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4590476572394!2d106.602166974555!3d10.776110489372618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c6b39affa79%3A0x3a7a9be6872f9744!2zMzgxLzIzLzYvMTYgxJAuIEzDqiBWxINuIFF14bubaSwgQsOsbmggVHLhu4sgxJDDtG5nIEEsIELDrG5oIFTDom4sIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1722436353533!5m2!1svi!2s";
  const facebook =
    "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFairyShopPerfume&tabs&width=300&height=250&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2275651639155720";
  //Vào đây để nhận pugin fb https://developers.facebook.com/docs/plugins/page-plugin

  useEffect(() => {
    const handleScrollWrapper = () => {
      handleScroll({
        setTransform,
        footerRef,
        lastScrollTop,
        setLastScrollTop,
      });
    };
    window.addEventListener("scroll", handleScrollWrapper);

    return () => {
      window.removeEventListener("scroll", handleScrollWrapper);
    };
  }, [lastScrollTop, setTransform, footerRef, setLastScrollTop]);

  return (
    <footer className="overflow-hidden w-full bg-black">
      <div
        className="p-10 bg-center bg-no-repeat bg-cover bg-[url('/footer.jpeg')] text-slate-300 footer"
        ref={footerRef}
        style={{ transform }}
      >
        <FooterTitle title="Fashion" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Thông tin liên hệ */}
          <FooterContact hotline={hotline} email={email} address={address} />
          {/* Hệ thống cửa hàng */}
          <FooterLocation googleMaps={googleMaps} />
          {/* Kết nối với Fashion */}
          <FooterSocialMedia facebook={facebook} />
        </div>
      </div>
    </footer>
  );
}
