import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import EventDetails from "./components/Details";
import RoadMap from "./components/Timeline";
import Gallery from "./components/Gallery";
import Sponsors from "./components/Sponsors";
import StudentCoordinators from "./components/StudentCoordinators";
import AcademicContactPage from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Hero />
      <About />
      <Tracks />
      <EventDetails />
      <RoadMap />
      <Gallery />
      <Sponsors />
      <AcademicContactPage />
      <StudentCoordinators />
      <Footer />
    </main>
  );
}