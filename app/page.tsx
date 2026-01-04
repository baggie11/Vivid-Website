import Hero from "./components/Hero";
import About from "./components/About";
import RoadMap from "./components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
   
      <Hero />
      <About/>
      <RoadMap/>

    </main>
  );
}