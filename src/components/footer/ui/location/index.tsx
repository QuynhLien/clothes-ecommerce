interface FooterLocationProps {
  googleMaps: string;
}

export default function FooterLocation({ googleMaps }: FooterLocationProps) {
  return (
    <div>
      <p className="py-5 text-2xl italic underline">Hệ thống cửa hàng</p>
      <iframe src={googleMaps} width="300" height="200" loading="lazy"></iframe>
    </div>
  );
}
