import { About } from "./components/about";
import { Header } from "./components/header";
import { Home } from "./components/home";

export default function App() {
  return (
    <main className="w-full h-full bg-[var(--tertiary-color)] flex flex-col items-center">
      <Header />
      <div className="flex flex-col gap-20">
        <Home />
        <About />
      </div>
    </main>
  )
}