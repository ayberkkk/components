import Button from "@/styles/styled-comp/Button";
import ProductCard from "@/styles/styled-comp/ProductCard";
import Image from "next/image";
import { MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
import { BsBasket2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

export default function ProductCardComp() {
  return (
    <>
      <div className="container mx-auto lg:mt-[100px]">
        <h3 className="font-bold text-xl mb-2 text-center">
          Product Card Components
        </h3>
        <div className="flex items-center justify-center flex-wrap gap-2 mb-4">
          <ProductCard default_1>
            <Image
              className="w-full h-full block"
              src="images/blog.svg"
              width={300}
              height={300}
            />
            <div class="bg-white py-3 px-5">
              <h5 class="text-xl font-bold tracking-tight">Product Name</h5>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  <MdOutlineStarPurple500
                    size={12}
                    className="text-[#800080]"
                  />
                  <MdOutlineStarPurple500
                    size={12}
                    className="text-[#800080]"
                  />
                  <MdOutlineStarPurple500
                    size={12}
                    className="text-[#800080]"
                  />
                  <MdOutlineStarPurple500
                    size={12}
                    className="text-[#800080]"
                  />
                  <MdOutlineStarOutline size={12} className="text-[#800080]" />
                </div>
                <span class="bg-[#800080]/20 text-[#800080] rounded-lg px-2 text-sm ms-3">
                  5.0
                </span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-3xl font-bold">$599</span>
                  <span class="text-xs font-bold line-through mx-1">$700</span>
                </div>
                <Button default_2>
                  <div className="flex items-center gap-2">
                    <BsBasket2 /> Add to Card
                  </div>
                </Button>
              </div>
              <span class="absolute top-0 left-0 m-2 rounded-lg bg-[#800080]/50 px-2 text-center text-sm font-medium text-white">
                <span className="block">% 39</span>
              </span>
            </div>
          </ProductCard>
          <ProductCard default_3>
            <div className="p-2 relative">
              <Image
                className="w-full h-full rounded-lg"
                src="images/blog.svg"
                width={400}
                height={400}
              />
              <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-1 shadow-md text-slate-400 ml-1 text-sm">
                <MdOutlineStarPurple500 size={12} className="text-yellow-400" />
                5.0
              </div>
            </div>
            <div class="mt-1 p-2">
              <h2 class="text-slate-700">The Hilton Hotel</h2>
              <p class="text-slate-400 mt-1 text-sm">Lisbon, Portugal</p>

              <div class="mt-3 flex items-end justify-between">
                <p>
                  <span class="text-lg font-bold text-purple-500">$850</span>
                  <span class="text-slate-400 text-sm">/night</span>
                </p>

                <div class="group inline-flex rounded-xl bg-purple-100 p-2 hover:bg-purple-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="group-hover:text-purple-500 h-4 w-4 text-purple-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
              </div>
            </div>
          </ProductCard>
        </div>
      </div>
    </>
  );
}
