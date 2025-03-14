import { About } from "./components/about";
import { CarouselImage } from "./components/carouselImage";
import { Header } from "./components/header";
import { Home } from "./components/home";


export default function App() {
  return (
    <main className="w-full h-full pt-20 sm:pt-0 bg-[var(--tertiary-color)] flex flex-col items-center">
      <Header />
      <div className="flex flex-col gap-20 justify-center items-center">
        <Home />
        <About />
        <CarouselImage
          images={[
            {
              src: "/images/carousel/1.jpg",
              alt: "Imagem 1",
            },
            {
              src: "/images/carousel/2.jpg",
              alt: "Imagem 2",
            },
            {
              src: "/images/carousel/3.jpg",
              alt: "Imagem 3",
            },
            {
              src: "/images/carousel/4.jpg",
              alt: "Imagem 4",
            },
            {
              src: "/images/carousel/5.jpg",
              alt: "Imagem 5",
            },
          ]}
        />
      </div>
    </main>
  )
}