import Button from "@/styles/styled-comp/Button";
import ProductCard from "@/styles/styled-comp/ProductCard";
import Image from "next/image";
import { MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
import { BsBasket2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { TbColorFilter } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

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
              <h5 class="text-lg font-normal">Product Name</h5>
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
                <span class="bg-[#800080]/20 text-[#800080] rounded-lg px-2 py-0.5 text-xs ms-1">
                  5.0
                </span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-xl font-bold">$599</span>
                  <span class="text-xs font-bold line-through mx-1">$700</span>
                </div>
                <Button default_2>
                  <div className="flex items-center gap-2">
                    <BsBasket2 /> Add to Card
                  </div>
                </Button>
              </div>
              <span class="absolute top-0 left-0 m-2 rounded-lg bg-[#f00]/50 px-2 py-2 text-center text-xs font-medium text-white">
                <span className="block">-39%</span>
              </span>
            </div>
          </ProductCard>
          <ProductCard default_2>
            <Image
              className="w-full h-[350px] block"
              src="images/blog.svg"
              width={300}
              height={300}
            />
            <div className="absolute top-2 right-2 bg-[#800080]/20 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#800080] hover:bg-[#800080]/40 hover:text-white transition-all ease-in duration-150">
              <CiHeart size={20} />
            </div>
            <div className="absolute top-2 left-2 bg-[#800080]/20 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#800080] hover:bg-[#800080]/40 hover:text-white transition-all ease-in duration-150">
              <TbColorFilter size={20} />
            </div>
            <div className="py-2 px-3">
              <div className="flex items-center justify-between">
                <h2 class="text-lg font-normal">
                  Product Name
                  <span className="block text-xs">Brands</span>
                </h2>
                <div className="bg-[#800080]/20 px-2 py-1 flex items-center rounded-lg text-[#800080]">
                  <MdOutlineStarPurple500 size={10} />
                  <span className="block mx-1 text-xs font-light">4.7</span>
                </div>
              </div>
              <div class="flex items-center justify-between mt-3">
                <div>
                  <span class="text-xl font-bold">$599</span>
                </div>
                <Button default_2>
                  <div className="flex items-center gap-2">
                    <BsBasket2 /> Add to Card
                  </div>
                </Button>
              </div>
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
                <MdOutlineStarPurple500 size={12} className="text-[#800080]" />
                5.0
              </div>
            </div>
            <div class="mt-1 p-2">
              <h2 class="text-slate-700">Product Name</h2>
              <p class="text-slate-400 mt-1 text-sm">Brands</p>

              <div class="mt-3 flex items-end justify-between">
                <p>
                  <span class="text-lg font-bold text-[#800080] ">$850</span>
                </p>

                <div class="group inline-flex">
                  <Button default_2>
                    <div className="flex items-center gap-2">
                      <BsBasket2 /> Add to Card
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </ProductCard>
          <ProductCard default_4>
            <div className="group relative overflow-hidden w-full h-full cursor-pointer">
              <Image
                className="w-full h-[350px] block relative z-[1]"
                src="images/blog.svg"
                width={300}
                height={300}
              />
              <div className="absolute top-2 right-2 z-[2] bg-[#800080]/20 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#800080] hover:bg-[#800080]/40 hover:text-white transition-all ease-in duration-150">
                <CiHeart size={20} />
              </div>
              <div className="absolute top-2 left-2 z-[2] bg-[#800080]/20 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#800080] hover:bg-[#800080]/40 hover:text-white transition-all ease-in duration-150">
                <TbColorFilter size={20} />
              </div>
              <div className="w-full bg-[#800080]/20 backdrop-blur-md py-2 px-3 absolute lg:-bottom-[100%] bottom-0 z-[2] lg:opacity-0 transition-all duration-500 ease-in group-hover:bottom-0 lg:group-hover:opacity-100 text-white">
                <div className="flex items-center justify-between">
                  <h2 class="text-lg font-normal">
                    Product Name
                    <span className="block text-xs">Brands</span>
                  </h2>
                  <div className="bg-[#800080]/20 px-2 py-1 flex items-center rounded-lg text-white">
                    <MdOutlineStarPurple500 size={10} />
                    <span className="block mx-1 text-xs font-light">4.7</span>
                  </div>
                </div>
                <div class="flex items-center justify-between mt-3">
                  <div>
                    <span class="text-xl font-bold">$599</span>
                  </div>
                  <Button default_1>
                    <div className="flex items-center gap-2">
                      <BsBasket2 /> Add to Card
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </ProductCard>
          <ProductCard default_5>
            <Image
              className="w-full h-full block"
              src="/images/placeholder-image-vertical.png"
              width={300}
              height={300}
            />
            <div className="absolute top-2 right-2  border-2 border-[#800080]/20 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#800080] hover:bg-[#800080]/40 hover:text-white transition-all ease-in duration-150">
              <AiOutlinePlus size={20} />
            </div>
            <div className="">
              <h2 class="text-base font-normal">Product Name</h2>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-base font-semibold">$599</span>
                  <span class="text-base ms-2 font-semibold  opacity-30 line-through">
                    $799
                  </span>
                </div>
                <div>
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
                    <MdOutlineStarOutline
                      size={12}
                      className="text-[#800080]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ProductCard>
          <ProductCard default_4>
            <div className="group relative overflow-hidden w-full h-full cursor-pointer">
              <Image
                className="w-full h-[350px] block relative z-[1]"
                src="images/blog.svg"
                width={300}
                height={300}
              />
              <div className="absolute top-2 right-2 z-[2] bg-[#800080]/20 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#800080] hover:bg-[#800080]/40 hover:text-white transition-all ease-in duration-150">
                <CiHeart size={20} />
              </div>
                <div className="w-full bg-gradient-to-b from-[#800080]/10  0 to-90% to-[#800080]/30 from-10% backdrop-blur-sm py-1 px-2 absolute bottom-0 z-[2] text-white">
                <div className="flex items-center justify-between">
                  <h2 class="text-lg font-normal">
                    Product Name
                    <span className="block text-xs">Brands</span>
                  </h2>
                </div>
                <div>
                  <span class="text-base font-bold">$599</span>
                </div>
              </div>
            </div>
          </ProductCard>
        </div>
      </div>
    </>
  );
}
