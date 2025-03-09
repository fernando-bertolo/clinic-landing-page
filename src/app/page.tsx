import { Header } from "./components/header";
import { Home } from "./components/home";

export default function App() {
  return (
    <main className="w-screen h-screen bg-[var(--tertiary-color)] flex flex-col items-center">
      <Header />
      <Home />
    </main>
  )
}