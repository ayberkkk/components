import TestimonialsCard from "@/styles/styled-comp/TestimonialsCard";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function TestimonialsCardComp() {
  return (
    <>
      <div className="container mx-auto lg:mt-[100px]">
        <h3 className="font-bold text-xl mb-2 text-center">
          Testimonials Card Components
        </h3>
        <div className="flex items-center flex-wrap justify-center gap-2 mb-4">
          <TestimonialsCard default_1>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-wrap mb-4 -m-2">
                <div className="w-auto p-2">
                  <Image
                    src="images/blog.svg"
                    className="rounded-full w-[50px] h-[50px]"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="w-auto p-2">
                  <p className="font-semibold leading-normal">John Doe</p>
                  <span className="text-gray-500 uppercase">@johndoe</span>
                </div>
              </div>
              <article>
                <p className="text-lg font-medium">
                  Ullamco tempor id nostrud incididunt aliquip in. Lorem irure
                  nisi cillum do. Nisi cillum labore nulla exercitation. Laboris
                  dolor anim do laboris sint eu esse officia laboris.
                </p>
              </article>
              <span className="text-sm text-gray-500 font-medium block mt-2">
                3 days ago
              </span>
            </div>
          </TestimonialsCard>
          <TestimonialsCard default_1>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-wrap mb-4 -m-2">
                <div className="w-auto p-2">
                  <Image
                    src="images/blog.svg"
                    className="rounded-full w-[50px] h-[50px]"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="w-auto p-2">
                  <p className="font-semibold leading-normal">John Doe</p>
                  <span className="text-gray-500 text-sm">Ceo of CocaCola</span>
                </div>
              </div>
              <article>
                <p className="text-base font-medium">
                  Ullamco tempor id nostrud incididunt aliquip in. Lorem irure
                  nisi cillum do. Nisi cillum labore nulla exercitation. Laboris
                  dolor anim do laboris sint eu esse officia laboris.
                </p>
              </article>
              <ul className="flex items-center gap-1 mt-2">
                <li>
                  <MdOutlineStarPurple500
                    size={12}
                    className="text-[#800080]"
                  />
                </li>
                <li>
                  <MdOutlineStarPurple500
                    size={12}
                    className="text-[#800080]"
                  />
                </li>
                <li>
                  <MdOutlineStarPurple500
                    size={12}
                    className="text-[#800080]"
                  />
                </li>
                <li>
                  <MdOutlineStarPurple500
                    size={12}
                    className="text-[#800080]"
                  />
                </li>
                <li>
                  <MdOutlineStarPurple500
                    size={12}
                    className="text-[#800080]"
                  />
                </li>
              </ul>
            </div>
          </TestimonialsCard>
          <TestimonialsCard default_2>
            <div className="h-[600px]">
              <div className="relative overflow-hidden rounded-3xl h-[600px]">
                <Image
                  className="w-full h-full transform hover:scale-105 transition ease-in-out duration-1000"
                  src="/images/placeholder-image-vertical.png"
                  width={500}
                  height={500}
                />
                <div className="absolute left-0 top-0 px-14 py-11 w-3/4 md:w-1/2 bg-white bg-opacity-30 overflow-y-auto h-full backdrop-blur-xl">
                  <svg
                    className="mb-20"
                    width="47"
                    height="36"
                    viewbox="0 0 47 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 36V25.6999C0 22.7377 0.554721 19.6578 1.66416 16.46C2.80722 13.2286 4.35372 10.1823 6.30365 7.32118C8.2872 4.42637 10.5061 1.98598 12.9603 0L21.4324 5.5035C19.4489 8.4993 17.7847 11.6297 16.4399 14.8948C15.1288 18.1262 14.49 21.6943 14.5236 25.5989V36H0ZM25.5676 36V25.6999C25.5676 22.7377 26.1223 19.6578 27.2318 16.46C28.3748 13.2286 29.9213 10.1823 31.8712 7.32118C33.8548 4.42637 36.0737 1.98598 38.5279 0L47 5.5035C45.0165 8.4993 43.3523 11.6297 42.0075 14.8948C40.6964 18.1262 40.0576 21.6943 40.0912 25.5989V36H25.5676Z"
                      fill="#4F46E5"
                    ></path>
                  </svg>
                  <h3 className="mb-8 text-3xl font-semibold leading-snug">
                    We use Flaro for almost everything: pipe management, hr,
                    contacts management. Great platform to keep all things in
                    one place. What a beauty!! this is world className design
                    and functionality.
                  </h3>
                  <h4 className="mb-1 font-bold">Jenny Wilson</h4>
                  <p className="text-gray-600 font-medium">
                    Senior UX Designer
                  </p>
                </div>
              </div>
            </div>
          </TestimonialsCard>
        </div>
      </div>
    </>
  );
}
