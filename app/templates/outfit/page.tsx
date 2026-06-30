import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

export default function OutfitTemplate() {
  return (
    <main>
      <Preloader />
      <Hero />
      <Showcase />
      <Footer />
    </main>
  );
}
