import Hero from "./components/hero";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around overflow-hidden">
      <Header />
      <Hero />
    </main>
  );
}
