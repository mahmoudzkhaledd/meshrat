import { Metadata } from "next";
import Image from "next/image";
import React from "react";
export const metadata: Metadata = {
  title: "About Us",
};
export default function page() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-24">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="flex items-center justify-center md:hidden">
          <Image
            src="/images/logo.png"
            width={600}
            height={400}
            alt="About Us"
            className="h-auto w-full max-w-[400px] rounded-lg object-cover lg:max-w-full"
          />
        </div>
        <div>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            About Us
          </h1>
          <p className="mb-8 text-gray-500 dark:text-gray-400">
            At Meshrat Wellness, we are dedicated to enhancing your health and
            well-being through expert-driven holistic treatments. Founded by Dr.
            Osama Elngar, a renowned physiotherapist with extensive experience
            in muscle treatment and recovery, our clinic stands as a beacon of
            healing and relaxation.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                Our Philosophy
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                We believe in a holistic approach to wellness, combining
                traditional practices with modern science to provide effective
                solutions for your physical and mental recovery. Our treatments
                are designed to alleviate muscle pain, accelerate recovery, and
                foster mindfulness, helping you to achieve harmony between your
                body and mind.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                Our Services
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our specialty lies in personalized cupping therapy sessions,
                which leverage the ancient practice of cupping to improve blood
                circulation, reduce inflammation, and promote deep relaxation.
                We also offer a range of muscle treatment and recovery services,
                as well as mindfulness-based programs to help you find balance
                and inner peace.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden items-center justify-center md:flex">
          <Image
            src="/images/logo.png"
            width={600}
            height={400}
            alt="About Us"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
