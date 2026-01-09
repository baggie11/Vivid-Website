import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import EventDetails from "./components/Details";
import RoadMap from "./components/Timeline";
import Gallery from "./components/Gallery";
import AcademicContactPage from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Hero />
      <About />
      <Tracks />
      <EventDetails />
      <RoadMap />
      <Gallery />
      <AcademicContactPage />
    </main>
  );
}