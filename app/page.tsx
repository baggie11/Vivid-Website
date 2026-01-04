import Hero from "./components/Hero";
import About from "./components/About";
import EventDetails from "./components/Details";
import RoadMap from "./components/Timeline";
import EventTimeline from "./components/Table";
import AcademicContactPage from "./components/Contact";
import Tracks from "./components/Tracks";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
   
      <Hero />
      <About/>
      <Tracks/>
      <EventDetails/>
      <RoadMap/>
      <EventTimeline/>
      <AcademicContactPage/>

    </main>
  );
}