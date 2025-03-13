import { About } from "./components/about";
import { CarouselImage } from "./components/carouselImage";
import { Header } from "./components/header";
import { Home } from "./components/home";

export default function App() {
  return (
    <main className="w-full h-full pt-20 sm:pt-0 bg-[var(--tertiary-color)] flex flex-col items-center">
      <Header />
      <div className="flex flex-col gap-20">
        <Home />
        <About />
        <CarouselImage />
      </div>
    </main>
  )
}