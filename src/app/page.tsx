import { Header } from "./components/header";
import { Sobre } from "./components/sobre";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[var(--tertiary-color)] flex flex-col items-center">
      <Header />
      <Sobre />
    </main>
  )
}