import BlogCardComp from "@/components/BlogCardComp";
import ButtonComp from "@/components/ButtonComp";
import ProductCardComp from "@/components/ProductCardComp";

export default function Home() {
  return (
    <main className="container mx-auto p-10">
     <ButtonComp/>
     <BlogCardComp/>
     <ProductCardComp/>
    </main>
  );
}
