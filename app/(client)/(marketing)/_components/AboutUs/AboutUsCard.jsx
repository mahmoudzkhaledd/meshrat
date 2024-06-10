import Image from "next/image";

export default function AboutUsCard({ title, number,subTitle,image}) {

    return (
        <div
            className="p-4 transition-colors duration-200 bg-white border border-gray-200 rounded-lg  hover:bg-gray-100"
        >
            <div className="flex items-center gap-x-3">
                <Image
                    src={image}
                    width={80}
                    height={80}
                    alt="Image"
                    className="object-cover w-12 h-12 rounded-full"
                />{" "}
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h6 className="font-bold tracking-wide text-gray-800 ">
                            {title}
                        </h6>{" "}
                        <p className="mt-1 text-sm font-medium tracking-wide text-gray-600 ">
                            {number}#
                        </p>
                    </div>{" "}
                    <p className="mt-1 text-sm tracking-wide text-gray-600 ">
                        {subTitle}
                    </p>
                </div>
            </div>
        </div>
    )
}
