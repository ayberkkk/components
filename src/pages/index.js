import BlogCardComp from "@/components/BlogCardComp";
import ButtonComp from "@/components/ButtonComp";
import ProductCardComp from "@/components/ProductCardComp";
import TestimonialsCardComp from "@/components/TestimonialsCardComp";

export default function Home() {
  return (
    <main className="container mx-auto p-10">
     <ButtonComp/>
     <BlogCardComp/>
     <ProductCardComp/>
     <TestimonialsCardComp/>
    </main>
  );
}
