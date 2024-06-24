import { cn } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  PhoneOutgoing,
  Twitter,
} from "lucide-react";
import { getWebsiteInfo } from "@/Controllers/Admin/Info/GetWebsiteInfo";
import { getTranslations } from "next-intl/server";

export default async function Footer({ className }: { className?: string }) {
  const info = await getWebsiteInfo();
  const t = await getTranslations("footer");
  return (
    <div
      className={cn("mt-20 rounded-xl bg-[#aed4ff] p-10 md:px-16", className)}
    >
      <div className="m-auto flex max-w-[1250px] flex-wrap justify-center gap-14 md:flex-nowrap">
        <div className="font-bold">
          <img className="w-[100px]" src="/images/logo2.png" alt="Logo" />
        </div>
        <div className="flex flex-col">
          {info.location && <p className="my-3">{info.location}</p>}
          <a
            className="text-blue-500 underline dark:text-blue-400"
            href={`tel:${info.phone}`}
          >
            {info.phone}
          </a>
        </div>
        <div className="flex justify-between gap-10">
          <ul className="flex flex-col gap-1">
            <a href="/">{t("home")}</a>
            <a href="/#services">{t("services")}</a>
            <a href="/blogs">{t("blogs")}</a>
            <a href="/contact">{t("contact")}</a>
          </ul>
        </div>
        <div className="max-w-xs">
          <p className="ml-1 max-w-[250px] font-bold">{t("socialMedia")}</p>

          <div className="my-3 ml-1 flex gap-3 text-2xl">
            {info.linkedIn && (
              <a target="_blank" href={info.linkedIn}>
                <Linkedin />
              </a>
            )}

            {info.facebook && (
              <a target="_blank" href={info.facebook}>
                <Facebook />
              </a>
            )}
            {info.instagram && (
              <a target="_blank" href={info.instagram}>
                <Instagram />
              </a>
            )}

            {info.twitter && (
              <a target="_blank" href={info.twitter}>
                <Twitter />
              </a>
            )}
            {info.whatsapp && (
              <a target="_blank" href={info.whatsapp}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 50 50"
                  className="w-6"
                >
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681C37.062,30.587,37.062,31.755,36.57,33.116z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
