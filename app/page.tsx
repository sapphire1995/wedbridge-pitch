import { Hero } from "@/components/slides/Hero";
import { Market } from "@/components/slides/Market";
import { Problem } from "@/components/slides/Problem";
import { Product } from "@/components/slides/Product";
import { SwipeHint } from "@/components/ui/SwipeHint";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Product />
      <Market />
      <SwipeHint />
    </main>
  );
}
