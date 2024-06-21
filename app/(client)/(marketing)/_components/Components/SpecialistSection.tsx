import React from "react";

export default function SpecialistSection() {
  return (
    <section className="pt-24 md:pt-32" id="doctors">
      <h3 className="mb-20 text-center text-4xl font-bold">
        Meet Our Specialists
      </h3>
      <div className="flex justify-between gap-10 overflow-auto px-5 md:p-0">
        <div>
          <div className="overflow-hidden rounded-br-[100px] rounded-tl-[100px] bg-[#9ae7ff] p-3 pb-0 lg:rounded-br-[120px] lg:rounded-tl-[130px]">
            <img
              className="min-w-[180px]"
              src="/images/person1.png"
              alt="Dr. John Smith"
            />
          </div>
          <div className="pb-5 pt-3">
            <h5 className="font-bold">Dr. John Smith</h5>
            <p className="text-sm">Cardiologist</p>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-br-[100px] rounded-tl-[100px] bg-[#9ae7ff] p-3 pb-0 lg:rounded-br-[120px] lg:rounded-tl-[130px]">
            <img
              className="min-w-[180px]"
              src="/images/person2.png"
              alt="Dr. Kristin Watson"
            />
          </div>
          <div className="pb-5 pt-3">
            <h5 className="font-bold">Dr. Kristin Watson</h5>
            <p className="text-sm">Dentist</p>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-br-[100px] rounded-tl-[100px] bg-[#9ae7ff] p-3 pb-0 lg:rounded-br-[120px] lg:rounded-tl-[130px]">
            <img
              className="min-w-[180px]"
             src="/images/person3.png"
              alt="Dr. Robert Flores"
            />
          </div>
          <div className="pb-5 pt-3">
            <h5 className="font-bold">Dr. Robert Flores</h5>
            <p className="text-sm">Surgeon</p>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-br-[100px] rounded-tl-[100px] bg-[#9ae7ff] p-3 pb-0 lg:rounded-br-[120px] lg:rounded-tl-[130px]">
            <img
              className="min-w-[180px]"
              src="/images/person4.png"
              alt="Dr. Katherine Allen"
            />
          </div>
          <div className="pb-5 pt-3">
            <h5 className="font-bold">Dr. Katherine Allen</h5>
            <p className="text-sm">Neurologist</p>
          </div>
        </div>
      </div>
      <h4 className="my-10 text-center text-3xl font-bold tracking-wider md:mt-20">
        Who Are We?
      </h4>
      <div className="m-auto mb-5 max-w-2xl text-center text-xs sm:text-base md:text-lg">
        A collaborative hospital service website is a digital platform that
        brings together healthcare professionals, patients and administrators to
        streamline and enganhe the delivery of healthcare services. This
        innovative platform allows for seamless communication and coordination
        among healthcare teams, enabling them to provide more efficient and
        personalized care to patients.
      </div>
      <img className="m-auto" src="/images/who.png" alt="Logo" />
    </section>
  );
}
