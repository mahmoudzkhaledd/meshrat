import { BodyContent } from "@/constants/CoreTexts";
import Image from "next/image";

export default function GeneralDetails({ data }: { data: BodyContent }) {
  return (
    <div
      className={`mx-auto flex w-full gap-4 p-8 xl:px-0 ${data.reversed ? "lg:flex-row-reverse" : "lg:flex-row"} mb-10 flex-col lg:flex-nowrap lg:gap-10`}
    >
      <div className="flex w-full justify-center lg:w-1/2">
        <div>
          <img
            alt="Details"
            width={521}
            height={548}
            className="w-full rounded-lg object-cover"
            src={data.image}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center lg:w-1/2">
        <div>
          <div className="mt-4 flex w-full flex-col">
            <h3 className="mt-3 max-w-2xl text-start text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight">
              {data.title}
            </h3>
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
              {data.subTitle}
            </p>
          </div>
          <div className="mt-5 w-full">
            {data.points.map((e, idx) => (
              <div key={idx} className="mt-8 flex items-start space-x-3">
                <div className="ml-4 mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-[color:var(--primary)]">
                  <e.icon size={35} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800">
                    {e.title}
                  </h4>
                  <p className="mt-1 text-gray-500">{e.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
