import HeroSection from "./hero/hero-section";
// import BrowseCategories from "./sections/browse-categories";
import FeaturedShops from "./sections/featured-shops";
import HowItWorks from "./sections/how-it-works";
// import PopularAreas from "./sections/popular-areas";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturedShops />
      {/* <PopularAreas /> */}
      {/* <BrowseCategories /> */}
      <HowItWorks />
    </main>
  );
}
