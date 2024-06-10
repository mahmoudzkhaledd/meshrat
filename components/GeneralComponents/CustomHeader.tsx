
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import { ArrowLeftCircle, ArrowRightCircle, } from 'lucide-react';


export default function CustomHeader({ linkTo, image, data }: { linkTo?: string; image?: string; data: { title: string; subTitle: string; } }) {
    return (
        <section className={`grid grid-cols-1 ${image == null ? "lg:grid-cols-1" : "lg:grid-cols-2"} bg-muted rounded-3xl px-10 ${image ? "py-6" : "py-10"} mb-5`}>
            <div className=' text-center flex flex-col items-center justify-center '>
                <h1 className='text-3xl font-bold text-center'> {data?.title}</h1>
                <h1 className='text-lg font-normal text-gray-400 mt-5 text-center'> {data?.subTitle}</h1>
                {linkTo && <Link className=' mt-5' href={linkTo}>
                    <Button className='flex items-center gap-1 hover:bg-green-300' variant={'ghost'}>
                        See our services <ArrowRightCircle className='w-5' />

                    </Button>
                </Link>}
            </div>
            {
                image && <div className='flex items-center justify-center'>
                    {<img className='no-select max-w-xs' src={image} />}
                </div>
            }
        </section>
    )
}
