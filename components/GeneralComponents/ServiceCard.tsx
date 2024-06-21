import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Service } from "@prisma/client";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="rounded-lg max-w-full md:max-w-[350px] border border-gray-200 bg-white shadow"
    >
      <img
        style={{
          maxWidth: "100%",
          aspectRatio: 16 / 9,
          objectFit: "cover",
        }}
        className="rounded-t-lg"
        src={
          service.thumbnailImage ??
          "https://www.lumahealth.com/wp-content/uploads/2023/09/Chiang-Mai-hospitals.jpg"
        }
        alt=""
      />
      <div className="p-5">
        <Link href={`/services/${service.id}`}>
          <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
            {service.name}
          </h6>
        </Link>
        <p className="mb-3 break-words font-normal text-gray-700">
          {service.subDescription == null || service.subDescription == ""
            ? ""
            : service.subDescription}
        </p>
        <Link className="w-full" href={`/services/${service.id}`}>
          <Button className="w-full">See details</Button>
        </Link>
      </div>
    </div>
  );
}
