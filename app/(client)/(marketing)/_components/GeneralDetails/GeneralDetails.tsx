import { BodyContent } from "@/constants/CoreTexts";

export default function GeneralDetails({ data }: { data: BodyContent }) {


    return (
        <div className={`w-full gap-4 p-8 mx-auto xl:px-0 flex ${data.reversed ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col mb-10 lg:gap-10 lg:flex-nowrap  `}>
            <div className="flex  justify-center w-full lg:w-1/2 ">
                <div>
                    <img
                        alt="Benefits"
                        loading="lazy"
                        width={521}
                        height={548}
                        decoding="async"
                        data-nimg={1}
                        className="object-cover rounded-lg w-full"

                        src={data.image}
                        style={{ color: "transparent" }}
                    />
                </div>
            </div>
            <div className="flex flex-wrap items-center w-full lg:w-1/2 ">
                <div>
                    <div className="flex flex-col w-full mt-4">
                        <h3 className="max-w-2xl mt-3  text-start text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl  ">
                            {data.title}
                            
                        </h3>
                        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl  ">
                            {data.subTitle}
                        </p>
                    </div>
                    <div className="w-full mt-5">
                        {
                            data.points.map((e, idx) => <div key={idx} className="flex items-start mt-8 space-x-3">
                                <div className="flex ml-4 items-center justify-center flex-shrink-0 mt-1 bg-[color:var(--primary)] rounded-md w-11 h-11 ">
                                    <e.icon size={35}/>
                                </div>
                                <div>
                                    <h4 className="text-xl  font-medium text-gray-800 ">
                                        {e.title}
                                    </h4>
                                    <p className="mt-1 text-gray-500 ">
                                        {e.subTitle}
                                    </p>
                                </div>
                            </div>)
                        }


                    </div>
                </div>
            </div>
        </div>

    )
}
