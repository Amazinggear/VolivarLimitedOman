import Hero from "./components/Hero";
import ProjectDetails from "./components/ProjectDetails";
import ImageGallery from "./components/ImageGallery";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";

export default function CargoTemplate() {
  return (
    <main className="bg-white">
      <Hero />
      <ProjectDetails />
      <ImageGallery />
      <FeaturedProjects />
      <Footer />
    </main>
  );
}
