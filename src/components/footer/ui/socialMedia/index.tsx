import Image from "next/image";

interface FooterSocialMediaProps {
  facebook: string;
}

export default function FooterSocialMedia({
  facebook,
}: FooterSocialMediaProps) {
  return (
    <div>
      <p className="py-5 text-2xl italic underline">Kết nối với Fashion</p>
      <iframe
        src={facebook}
        width="300"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <div className="flex flex-inline gap-8">
        <a
          className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 hover:scale-75"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/tiktok.png"
            alt="TIKTOK FASHION"
            width={30}
            height={30}
          />
        </a>
        <a
          className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 hover:scale-75"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/instagram.png"
            alt="INSTAGRAM FASHION"
            width={30}
            height={30}
          />
        </a>
        <a
          className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 hover:scale-75"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/zalo.png" alt="ZALO FASHION" width={30} height={30} />
        </a>
      </div>
    </div>
  );
}
