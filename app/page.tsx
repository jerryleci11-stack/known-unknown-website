import Navbar from "./components/Navbar";
import CurrentSplit from "./components/CurrentSplit";
import DiscordCTA from "./components/DiscordCTA";
import News from "./components/News";
import Hero from "./components/Hero";
import About from "./components/About";
import Teams from "./components/Teams";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
         <About />
        <Teams />
        <CurrentSplit />
        <News />
        <DiscordCTA />
      </main>

      <Footer />
    </>
  );
}