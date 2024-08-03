import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface FooterContactProps {
  hotline: string;
  email: string;
  address: string;
}

export default function FooterContact({
  hotline,
  email,
  address,
}: FooterContactProps) {
  return (
    <div>
      <p className="py-5 text-2xl italic underline">Thông tin liên hệ</p>
      <div className="divide-y divide-dashed divide-slate-500">
        <p className="py-4">
          <PhoneIcon /> Hotline:{" "}
          <a
            href={`tel:${hotline}`}
            rel="nofollow"
            title="FASHION HOTLINE"
            className="hover:text-red-700"
          >
            {hotline}
          </a>
        </p>
        <p className="py-4">
          <EmailIcon /> Email:{" "}
          <a
            href={`mailto:${email}`}
            rel="nofollow"
            title="FASHION EMAIL"
            className="hover:text-red-700"
          >
            {email}
          </a>
        </p>
        <p className="py-4">
          <LocationOnIcon /> Địa chỉ: {address}
        </p>
      </div>
    </div>
  );
}
