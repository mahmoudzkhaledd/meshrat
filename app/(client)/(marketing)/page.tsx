import CustomHeader from "@/components/GeneralComponents/CustomHeader";

import GeneralDetails from "./_components/GeneralDetails/GeneralDetails";
import { configs } from "@/constants/CoreTexts";
const LandingPageCustom = () => {
  return (
    <main>
      <section>
        <div className="custom-screen py-28 text-gray-600">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <h1 className="mx-auto text-4xl font-extrabold text-gray-800 sm:text-6xl">
              Build and scale your next business idea faster
            </h1>
            <p className="mx-auto max-w-xl">
              Blinder making it simple for you to build and grow your SaaS
              applications, or any business idea.
            </p>
            <div className="flex items-center justify-center gap-x-3 text-sm font-medium">
              <a
                className="rounded-lg bg-gray-800 px-4 py-2.5 text-center text-white duration-150 hover:bg-gray-600 active:bg-gray-900"
                href="/get-started"
              >
                Start building
              </a>
              <a
                className="rounded-lg border px-4 py-2.5 text-center text-gray-700 duration-150 hover:bg-gray-50"
                href="/#cta"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="custom-screen">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
              <li>
                <img
                  alt="freshbooks"
                  src="/_next/static/media/freshbooks.c4c650e5.svg"
                  width={130}
                  height={29}
                  decoding="async"
                  data-nimg={1}
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </li>
              <li>
                <img
                  alt="sendgrid"
                  src="/_next/static/media/sendgrid.ed62bb3d.svg"
                  width={138}
                  height={26}
                  decoding="async"
                  data-nimg={1}
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </li>
              <li>
                <img
                  alt="layers"
                  src="/_next/static/media/layers.51c665af.svg"
                  width={115}
                  height={38}
                  decoding="async"
                  data-nimg={1}
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </li>
              <li>
                <img
                  alt="adobe"
                  src="/_next/static/media/adobe.c73627f3.svg"
                  width={102}
                  height={36}
                  decoding="async"
                  data-nimg={1}
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative my-16 overflow-hidden border-t sm:my-28">
        <div
          className="absolute inset-0 h-full w-full blur-[100px]"
          style={{
            background:
              "linear-gradient(202.72deg, rgba(237, 78, 80, 0.05) 14.76%, rgba(152, 103, 240, 0.04) 34.37%, rgba(152, 103, 240, 0) 86.62%)",
          }}
        />
        <div className="relative">
          <section className="py-16">
            <div id="features" className="custom-screen text-gray-600">
              <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                <li className="space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border text-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Best quality
                  </h4>
                  <p>
                    We care about the quality of the product. As a digital
                    product development agency, we believe in beautiful
                    software.
                  </p>
                </li>
                <li className="space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border text-indigo-600">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 4.476V3H8.865C8.3955 3 7.941 3.093 7.5015 3.2775C7.06407 3.46087 6.66854 3.73136 6.339 4.0725C6.01829 4.39483 5.76667 4.77915 5.5995 5.202V5.2035C5.45069 5.60502 5.35097 6.02305 5.3025 6.4485V6.4515C5.25984 6.8816 5.24781 7.31419 5.2665 7.746C5.2845 8.181 5.2935 8.616 5.2935 9.0495C5.2935 9.354 5.2335 9.639 5.118 9.9075V9.909C4.89786 10.433 4.48805 10.8546 3.9705 11.0895C3.70659 11.2048 3.42148 11.2635 3.1335 11.262H3V12.738H3.135C3.4275 12.738 3.705 12.798 3.969 12.9195L3.9705 12.921C4.2375 13.038 4.464 13.197 4.653 13.398L4.656 13.401C4.851 13.596 5.0055 13.8285 5.1165 14.0985L5.118 14.1015C5.235 14.3715 5.2935 14.6535 5.2935 14.9505C5.2935 15.3855 5.2845 15.8205 5.2665 16.254C5.2485 16.698 5.2605 17.1315 5.3025 17.559V17.5605C5.352 17.985 5.451 18.3975 5.598 18.7965V18.798C5.757 19.2075 6.0045 19.584 6.339 19.9275C6.6735 20.2725 7.062 20.538 7.5015 20.7225C7.941 20.907 8.3955 21 8.8665 21H9V19.524H8.865C8.565 19.524 8.2845 19.467 8.0205 19.3515C7.76585 19.2325 7.53389 19.0701 7.335 18.8715C7.14192 18.666 6.98519 18.4291 6.8715 18.171C6.7605 17.901 6.7065 17.616 6.7065 17.3115C6.7065 16.9695 6.711 16.632 6.723 16.3035C6.735 15.9615 6.735 15.6285 6.723 15.306C6.71771 14.9845 6.69015 14.6637 6.6405 14.346C6.59278 14.0326 6.50819 13.726 6.3885 13.4325C6.15504 12.8646 5.77322 12.3698 5.283 12C5.77377 11.6304 6.15612 11.1356 6.39 10.5675C6.51 10.2795 6.5925 9.978 6.642 9.6645C6.6915 9.3495 6.7185 9.03 6.7245 8.7045C6.7365 8.3745 6.7365 8.0415 6.7245 7.7055C6.7125 7.3695 6.7065 7.0305 6.7065 6.6885C6.7039 6.25858 6.82703 5.83727 7.06076 5.47643C7.29448 5.11558 7.6286 4.83093 8.022 4.6575C8.28687 4.53605 8.57512 4.4741 8.8665 4.476H9ZM15 19.524V21H15.135C15.6045 21 16.059 20.907 16.4985 20.7225C16.938 20.538 17.3265 20.2725 17.661 19.9275C17.9955 19.5825 18.243 19.2075 18.4005 18.798V18.7965C18.5505 18.3975 18.648 17.982 18.6975 17.5515V17.5485C18.7395 17.1285 18.7515 16.698 18.7335 16.254C18.7155 15.819 18.7065 15.384 18.7065 14.9505C18.7065 14.646 18.7665 14.361 18.882 14.0925V14.091C19.1019 13.5668 19.5118 13.1452 20.0295 12.9105C20.2935 12.7954 20.5785 12.7367 20.8665 12.738H21V11.262H20.865C20.571 11.262 20.2935 11.202 20.0295 11.0805L20.028 11.079C19.7705 10.968 19.5382 10.8057 19.3455 10.602L19.3425 10.599C19.1443 10.3993 18.9878 10.1622 18.882 9.9015V9.8985C18.7648 9.63083 18.7045 9.34171 18.705 9.0495C18.705 8.6145 18.714 8.1795 18.732 7.746C18.7507 7.3107 18.7387 6.87461 18.696 6.441V6.4395C18.6474 6.01715 18.5482 5.60217 18.4005 5.2035V5.202C18.2329 4.77902 17.9807 4.39469 17.6595 4.0725C17.3299 3.7314 16.9344 3.46091 16.497 3.2775C16.0653 3.09415 15.601 2.99977 15.132 3H15V4.476H15.135C15.435 4.476 15.7155 4.533 15.978 4.6485C16.239 4.7715 16.467 4.9305 16.6635 5.1285C16.854 5.3295 17.0085 5.5635 17.127 5.829C17.238 6.099 17.292 6.384 17.292 6.6885C17.292 7.0305 17.2875 7.3665 17.2755 7.6965C17.2635 8.0385 17.2635 8.3715 17.2755 8.694C17.2815 9.027 17.3085 9.3465 17.358 9.654C17.4075 9.975 17.4915 10.278 17.61 10.5675C17.8439 11.1356 18.2263 11.6303 18.717 12C18.2263 12.3697 17.8439 12.8644 17.61 13.4325C17.4912 13.7227 17.4066 14.0257 17.358 14.3355C17.3085 14.6505 17.2815 14.97 17.2755 15.2955C17.2634 15.6284 17.2634 15.9616 17.2755 16.2945C17.2875 16.6305 17.2935 16.9695 17.2935 17.3115C17.2959 17.7414 17.1727 18.1626 16.939 18.5234C16.7053 18.8842 16.3713 19.1689 15.978 19.3425C15.7131 19.4639 15.4249 19.5259 15.1335 19.524H15Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Modern technologies
                  </h4>
                  <p>
                    We use the modern and most flexible and secure technologies
                    to build the best products on the internet.
                  </p>
                </li>
                <li className="space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border text-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Advenced security
                  </h4>
                  <p>
                    At Software Security Solutions our mission is to raise the
                    bar by making computer security more accessible.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section id="cta" className="py-16 pb-0">
            <div className="custom-screen">
              <div className="items-center gap-x-12 lg:flex">
                <div className="flex-1 sm:hidden lg:block">
                  <img
                    alt="Create Successful Business Models with Our IT Solutions"
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta-image.63997661.jpg&w=3840&q=75 1x"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta-image.63997661.jpg&w=3840&q=75"
                    width={3600}
                    height={2400}
                    decoding="async"
                    data-nimg={1}
                    className="rounded-lg md:max-w-lg"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="mt-6 max-w-xl md:mt-0 lg:max-w-2xl">
                  <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
                    Create Successful Business Models with Our IT Solutions
                  </h2>
                  <p className="mt-3 text-gray-600">
                    Blinder, a software development company, helps to digitize
                    businesses by focusing on client’s business challenges,
                    needs. We value close transparent cooperation and encourage
                    our clients to participate actively in the project
                    development life cycle.
                  </p>
                  <a
                    className="mt-4 inline-block rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-medium text-white duration-150 hover:bg-indigo-700 active:bg-indigo-800"
                    href="/get-started"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="py-16">
        <div
          id="toolkit"
          className="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8"
        >
          <div className="mx-auto max-w-2xl space-y-3 sm:text-center">
            <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              Work with the best toolkit
            </h2>
            <p>These are a few of our favourite things</p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              <li className="flex gap-x-4">
                <div className="gradient-border flex h-12 w-12 flex-none items-center justify-center rounded-full">
                  <img
                    alt="Wordpress"
                    src="/_next/static/media/wordpress.bc05deb0.svg"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Wordpress
                  </h4>
                  <p className="mt-3">
                    WordPress is an open-source content management system (CMS).
                  </p>
                </div>
              </li>
              <li className="flex gap-x-4">
                <div className="gradient-border flex h-12 w-12 flex-none items-center justify-center rounded-full">
                  <img
                    alt="Next.js"
                    src="/_next/static/media/nextjs.1e4abb67.svg"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Next.js
                  </h4>
                  <p className="mt-3">
                    Next.js is a React framework that gives you building blocks
                    to create web apps.
                  </p>
                </div>
              </li>
              <li className="flex gap-x-4">
                <div className="gradient-border flex h-12 w-12 flex-none items-center justify-center rounded-full">
                  <img
                    alt="Tailwind CSS"
                    src="/_next/static/media/tailwind.6292f456.svg"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Tailwind CSS
                  </h4>
                  <p className="mt-3">
                    Tailwind CSS is basically a utility-first CSS framework for
                    rapidly building UIs.
                  </p>
                </div>
              </li>
              <li className="flex gap-x-4">
                <div className="gradient-border flex h-12 w-12 flex-none items-center justify-center rounded-full">
                  <img
                    alt="Node.js"
                    src="/_next/static/media/nodejs.8ce36f01.svg"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Node.js
                  </h4>
                  <p className="mt-3">
                    Node.js is an open-source, cross-platform, back-end
                    JavaScript runtime environment.
                  </p>
                </div>
              </li>
              <li className="flex gap-x-4">
                <div className="gradient-border flex h-12 w-12 flex-none items-center justify-center rounded-full">
                  <img
                    alt="Vercel"
                    src="/_next/static/media/vercel.2031f6ec.svg"
                    width={35}
                    height={35}
                    decoding="async"
                    data-nimg={1}
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Vercel
                  </h4>
                  <p className="mt-3">
                    Vercel is a cloud platform that enables developers to host
                    web apps.
                  </p>
                </div>
              </li>
              <li className="flex gap-x-4">
                <div className="gradient-border flex h-12 w-12 flex-none items-center justify-center rounded-full">
                  <img
                    alt="Figma"
                    src="/_next/static/media/figma.dbbb7e1d.svg"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Figma</h4>
                  <p className="mt-3">
                    Figma is a web-based graphics editing and user interface
                    design app.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="relative my-16 overflow-hidden border-t sm:my-28">
        <div
          className="absolute inset-0 h-full w-full blur-[100px]"
          style={{
            background:
              "linear-gradient(202.72deg, rgba(237, 78, 80, 0.05) 14.76%, rgba(152, 103, 240, 0.04) 34.37%, rgba(152, 103, 240, 0) 86.62%)",
          }}
        />
        <div className="relative">
          <section className="py-16 pb-0">
            <div
              id="testimonials"
              className="mx-auto max-w-screen-xl px-4 md:px-8"
            >
              <div className="max-w-2xl sm:text-center md:mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
                  See what others saying about us
                </h2>
                <p className="mt-3 text-gray-600">
                  Listen to what the experts around the world are saying about
                  us.
                </p>
              </div>
              <div className="mt-12">
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <li className="rounded-xl border bg-white p-4">
                    <figure>
                      <div className="flex items-center gap-x-4">
                        <img
                          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          className="h-14 w-14 rounded-full object-cover"
                          alt="Alex wonderson"
                        />
                        <div>
                          <span className="block font-semibold text-gray-800">
                            Alex wonderson
                          </span>
                          <span className="mt-0.5 block text-sm text-gray-600">
                            Founder of Lyconf
                          </span>
                        </div>
                      </div>
                      <blockquote>
                        <p className="mt-6 text-gray-700">
                          As a small business owner, I was doing everything and
                          my workload was increasing. With this startup, I was
                          able to save time so I could focus on the things that
                          matter most: my clients and my family.
                        </p>
                      </blockquote>
                    </figure>
                  </li>
                  <li className="rounded-xl border bg-white p-4">
                    <figure>
                      <div className="flex items-center gap-x-4">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          className="h-14 w-14 rounded-full object-cover"
                          alt="Karim ahmed"
                        />
                        <div>
                          <span className="block font-semibold text-gray-800">
                            Karim ahmed
                          </span>
                          <span className="mt-0.5 block text-sm text-gray-600">
                            DevOps engineer
                          </span>
                        </div>
                      </div>
                      <blockquote>
                        <p className="mt-6 text-gray-700">
                          My company's software now is easy to use, saves time
                          and money, and is loved by a lot of users. One
                          customer saved $10k over the course of 3 years and
                          another saves 8 hours per week! Thanks to Blinder.
                        </p>
                      </blockquote>
                    </figure>
                  </li>
                  <li className="rounded-xl border bg-white p-4">
                    <figure>
                      <div className="flex items-center gap-x-4">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                          className="h-14 w-14 rounded-full object-cover"
                          alt="Lysa stian"
                        />
                        <div>
                          <span className="block font-semibold text-gray-800">
                            Lysa stian
                          </span>
                          <span className="mt-0.5 block text-sm text-gray-600">
                            System manger
                          </span>
                        </div>
                      </div>
                      <blockquote>
                        <p className="mt-6 text-gray-700">
                          My business was in a dire situation. I had no idea
                          what to do, and I felt like I was losing hope. Then I
                          found this Startup and everything changed. It helped
                          me create automated sales.
                        </p>
                      </blockquote>
                    </figure>
                  </li>
                  <li className="rounded-xl border bg-white p-4">
                    <figure>
                      <div className="flex items-center gap-x-4">
                        <img
                          src="https://randomuser.me/api/portraits/women/79.jpg"
                          className="h-14 w-14 rounded-full object-cover"
                          alt="Angela stian"
                        />
                        <div>
                          <span className="block font-semibold text-gray-800">
                            Angela stian
                          </span>
                          <span className="mt-0.5 block text-sm text-gray-600">
                            Product designer
                          </span>
                        </div>
                      </div>
                      <blockquote>
                        <p className="mt-6 text-gray-700">
                          One day, my company was about to go under and I had no
                          idea what to do. I found Blinder and it helped me get
                          my business back on track.Now, my company is
                          flourishing and I see new opportunities.
                        </p>
                      </blockquote>
                    </figure>
                  </li>
                  <li className="rounded-xl border bg-white p-4">
                    <figure>
                      <div className="flex items-center gap-x-4">
                        <img
                          src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                          className="h-14 w-14 rounded-full object-cover"
                          alt="Jurica koletic"
                        />
                        <div>
                          <span className="block font-semibold text-gray-800">
                            Jurica koletic
                          </span>
                          <span className="mt-0.5 block text-sm text-gray-600">
                            Founder of Let’s code
                          </span>
                        </div>
                      </div>
                      <blockquote>
                        <p className="mt-6 text-gray-700">
                          In these difficult economic times, doing business is
                          tough. Funding is hard to come by and many
                          entrepreneurs are struggling to keep their doors open.
                          but when I found this startup everything changed.
                        </p>
                      </blockquote>
                    </figure>
                  </li>
                  <li className="rounded-xl border bg-white p-4">
                    <figure>
                      <div className="flex items-center gap-x-4">
                        <img
                          src="https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          className="h-14 w-14 rounded-full object-cover"
                          alt="Kavi laron"
                        />
                        <div>
                          <span className="block font-semibold text-gray-800">
                            Kavi laron
                          </span>
                          <span className="mt-0.5 block text-sm text-gray-600">
                            Full stack engineer
                          </span>
                        </div>
                      </div>
                      <blockquote>
                        <p className="mt-6 text-gray-700">
                          We all know how costly it is to find good help. I was
                          faced with this problem when I lost my data entry
                          staff and my business was on the brink of going under.
                          Thankfully, Blinder saved the day.
                        </p>
                      </blockquote>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="py-16">
        <div className="custom-screen">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              Get started with Blinder today
            </h2>
            <p className="mt-3 text-gray-600">
              Hire experts to create your next idea, follow best practices,
              remove roadblocks, and delivery on schedule.
            </p>
            <a
              className="mt-4 inline-block rounded-lg bg-gray-800 px-4 py-2.5 text-center text-sm font-medium text-white duration-150 hover:bg-gray-600 active:bg-gray-900"
              href="/get-started"
            >
              Start building
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default function LandingPage({}) {

  return (
    <div className="dim-100 col-2">
      <CustomHeader
        data={configs.header}
        linkTo="/services"
        image={"/images/doctor.svg"}
      />

      {configs.body.map((e, idx) => (
        <GeneralDetails key={idx} data={e} />
      ))}
    </div>
  );
}
