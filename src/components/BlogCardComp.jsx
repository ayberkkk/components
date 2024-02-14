import BlogCard from "@/styles/styled-comp/BlogCard";
import Button from "@/styles/styled-comp/Button";
import Image from "next/image";

export default function BlogCardComp() {
  return (
    <>
      <div className="container mx-auto lg:mt-[100px]">
        <h3 className="font-bold text-xl mb-2 text-center">
          Blog Card Components
        </h3>
        <div className="flex items-center justify-center flex-wrap gap-2 mb-4">
          <BlogCard default_1>
            <div className="group relative overflow-hidden w-full h-full cursor-pointer">
              <div className="overflow-hidden">
                <Image
                  src="images/blog.svg"
                  className="w-full h-full object-cover transition-all duration-300 ease-linear transform group-hover:scale-125"
                  width={300}
                  height={300}
                />
              </div>
              <article className="py-2 px-4">
                <h3 className="text-2xl font-semibold">Card Title</h3>
                <h4 className="text-base font-medium opacity-25">
                  Secondary Title
                </h4>
                <p className="text-sm mt-3 mb-3">
                  Mollit incididunt do fugiat in velit. Ullamco aliquip proident
                  cillum proident Lorem fugiat nisi.
                </p>
                <Button default_2>Button</Button>
              </article>
            </div>
          </BlogCard>
          <BlogCard default_2>
            <div className="group cursor-pointer">
              <div className="relative z-[1] overflow-hidden">
                <Image
                  src="images/blog.svg"
                  className="w-[500px] h-[400px] object-cover transition-all duration-300 ease-linear transform group-hover:scale-125"
                  width={300}
                  height={600}
                />
              </div>
              <article className="absolute bottom-3 rounded-xl mx-2 w-[97%] bg-white/60 backdrop-blur-sm z-[2] py-3">
                <div className="py-1 px-3">
                  <h3 className="text-xl font-semibold">
                    Mollit incididunt do fugiat in velit.
                  </h3>
                  <div className="flex items-center gap-1 text-xs opacity-60 uppercase mt-3">
                    <p>subject</p>
                    <p>.</p>
                    <p>4 min read</p>
                  </div>
                </div>
              </article>
            </div>
          </BlogCard>
          <BlogCard default_3>
            <div className="cursor-pointer">
              <div className="">
                <Image
                  src="images/blog.svg"
                  className="w-full h-full object-cover rounded-2xl"
                  width={300}
                  height={600}
                />
              </div>
              <article className="py-3">
                <h3 className="text-xl font-semibold">
                  Mollit incididunt do fugiat in velit.
                </h3>
                <div className="flex items-center gap-1 text-xs opacity-60 uppercase mt-3">
                  <p>subject</p>
                  <p>.</p>
                  <p>4 min read</p>
                </div>
              </article>
            </div>
          </BlogCard>
          <BlogCard default_4>
            <div className="group lg:flex items-center relative overflow-hidden w-full h-full cursor-pointer">
              <div className="overflow-hidden lg:w-1/2 lg:h-[370px]">
                <Image
                  src="images/blog.svg"
                  className="w-full lg:h-[370px] transition-all duration-300 ease-linear transform group-hover:scale-125"
                  width={300}
                  height={600}
                />
              </div>
              <article className="py-2 px-4 lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-2">Card Title</h3>
                <ul className="flex items-center flex-wrap gap-3">
                  <li>
                    <span className="px-2 py-1 text-base font-medium bg-[#800080]/20 text-[#800080] rounded-lg">
                      Subj
                    </span>
                  </li>
                  <li>
                    <span className="px-2 py-1 text-base font-medium bg-[#800080]/20 text-[#800080] rounded-lg">
                      Subj
                    </span>
                  </li>
                  <li>
                    <span className="px-2 py-1 text-base font-medium bg-[#800080]/20 text-[#800080] rounded-lg">
                      Subj
                    </span>
                  </li>
                  <li>
                    <span className="px-2 py-1 text-base font-medium bg-[#800080]/20 text-[#800080] rounded-lg">
                      Subj
                    </span>
                  </li>
                </ul>
                <p className="text-base mt-3 mb-3">
                  Mollit incididunt do fugiat in velit. Ullamco aliquip proident
                  cillum proident Lorem fugiat nisi.
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="images/blog.svg"
                    className="rounded-full w-[50px] h-[50px]"
                    width={50}
                    height={50}
                  />
                  <div>
                    <p className="font-bold text-sm">John Doe</p>
                    <span className="block text-xs font-semibold opacity-50">
                      30 May
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </BlogCard>
        </div>
      </div>
    </>
  );
}
