import React from "react";

export default function PatientFeedback() {
  return (
    <section className="pt-24 md:pt-32" id="reviews">
      <h3 className="mb-10 text-center text-3xl font-bold md:mb-20">
        Patient Feedback
      </h3>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <div className="false max-w-[300px] rounded-3xl bg-[#d5f5ff] p-5 shadow-lg">
          <div className="flex items-center gap-5">
            <img
              className="w-12 rounded-full"
              src="data:image/jpeg;base64,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"
              alt="Ralph Edwards"
            />
            <div>
              <h6 className="text-sm font-bold">Ralph Edwards</h6>
              <p className="text-xs opacity-70">Businessman</p>
            </div>
          </div>
          <p className="mt-2 text-xs opacity-90">
            My experience with this hospital has been great. I highly recommend
            their services to anyone in need of quility healthcare. they truly
            prioritize patients care!
          </p>
        </div>
        <div className="max-w-[300px] rounded-3xl bg-[#d5f5ff] p-5 shadow-lg md:mb-16">
          <div className="flex items-center gap-5">
            <img
              className="w-12 rounded-full"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADgAOAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAGBwgFBAkD/9oACAEBAAAAAK3JAqOmPWfxx1tKK4oSjm4Np2IeQqsx1j85w2X4fq0UhSMjFcsn0nYQioICyHXaGbtjoBnmneV//8QAGQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUA/9oACAECEAAAALhudUDDKUnztAEd/8QAGAEBAQEBAQAAAAAAAAAAAAAABAMBAAX/2gAIAQMQAAAAxUYXaUztI/z653//xAAvEAABAwMDAgYBAgcAAAAAAAACAQMEAAURBhIhByITFDEyQWFRcXIII1JikaGx/9oACAEBAAE/ALaG1QzwtCta76h6c6d2sblfnzU3S2RojCb5Eg/wA1qT+J7XtxnPRrLpKJGgL2izJBX3iH+6umnVbSV/mtae1XpgNPXo9vhI4Ciy8pfvRFGo9stTTYC3Caz+1KvFlt7tomNLEaVCbLjFPOjCaOSoKWwc4Sr91ktGnBA7jCltia4FfCWr7rVdQ6ouPUG4Nm4DiHGtUZU3eCy12IqIvCKS8qtS5pz7il1Utpk5vIl4VFpuVH15pR20XKVBuBBFVIkoNqSor4chyvcPNdFdSSdVaJtNxn8zWUKHJ+3GO3NTCbOO60S8kC0cc5LRtNYQiT1WuonTZL1bzkXu5qMOE05JMWRRF/liq1enLb5CJEYyBeGICKc9hjnj7qDYY8q3TGBurRyBa3RwQ/cSLyOV9VrprAuLNxbltNNC2jiAZKSIpAXCpXQ2BItWiWXNmxJ9wmzBH8AbqiH+hrlxS3eu2inG1GecD3gKqi1qrXWo71Cn21iAZjIYej5TdhN4qOaYd81doVvum9s47hsvj6KqBhFxn5qXp3TrCPXC0zHiNhsnvLOskhLtTnkVIFWtL3m4tPtswTIpkp1WozA+quOLtDj9VrTVqSyWKx2lfdEhMMl9kAYVaax4qJ+Rp4MsyGkPv2LlKli5A2sK6gqpERCqfCrXUaJGd1DNvVjBFaB/Y+KfLopySUdxeMHG03ip+7uXFdL2wtN7harfQXPIPIbTRJlDcRMJVk1zCukaHKkJ4KPAhiS+1c1GlxnjacbfBRVF5zT7qQZPmJHAEP8AmtZQidO5Xi1CrtwcjEDSOqiss7UzuFtPea/a4qE9KJyfCl78uGp9/rn0VF+6mtRYshAIFMUXJ7f+VpKzvXNmE3EhvtMv8b3GCDCf1c1aIFuC2RLQLSeCwygAvymPVauM53TpixJiqkc+G3gVdhfX0tamuiu3A4ol2sdmPuvG4yvNXfQekbpNO6SrM2kos7jaMm9yr8qg8VD0XpWA8L8SxRvFRdyOOIry5/Kb84WmFBkc4TNMXRWTRc8VGvEeW15eSAOtkmCE0RUX9UWv/8QAJBEAAgIBAwMFAQAAAAAAAAAAAREAAgMEEiETMUEFFCIyUWH/2gAIAQIBAT8Acy5RQMHl9pTIbeeZU2UyXGNE2QmTkhnv/HNPQg2Yjmq03V2bLokcvsIFv6S+qRM1R6WPH7a4tkDJ/CIfU9vxyYSLRtywiUNQfE//xAAgEQEAAgICAgMBAAAAAAAAAAABAAIDERIxBCEFEBNR/9oACAEDAQE/AJhwOTvrUvj4PUdTHjtd4ldsxOqqV9BrvU8m4hxYTxfJrhvZvXkaNamVbl8+yvJVCYdWtf8AeqUfR/RlfjG5yx5qtXr6F4xdwUPSz//Z"
              alt="Josh Smith"
            />
            <div>
              <h6 className="text-sm font-bold">Josh Smith</h6>
              <p className="text-xs opacity-70">Engineer</p>
            </div>
          </div>
          <p className="mt-2 text-xs opacity-90">
            The healthcare professionals were top-natch. they were
            knowledgeable, attentive, and took the time to answer all of my
            questions and address my concerns
          </p>
        </div>
        <div className="false max-w-[300px] rounded-3xl bg-[#d5f5ff] p-5 shadow-lg">
          <div className="flex items-center gap-5">
            <img
              className="w-12 rounded-full"
              src="data:image/jpeg;base64,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"
              alt="Eleanor Pena"
            />
            <div>
              <h6 className="text-sm font-bold">Eleanor Pena</h6>
              <p className="text-xs opacity-70">Teacher</p>
            </div>
          </div>
          <p className="mt-2 text-xs opacity-90">
            One thing that stood out to me was the efficiency of the service, i
            didn't have to wait long for my appointment, and the entire process
            was hassle-free experience
          </p>
        </div>
      </div>
    </section>
  );
}
