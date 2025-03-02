import Categories from "../Home/Categories";
import FeaturedProducts from "../Home/FeaturedProducts";
import Features from "../Home/Features";
import { Footer } from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import { Newsletter } from "../Home/Newsletter";
import SpecialOffer from "../Home/SpecialOffer";
import Testimonials from "../Home/Testimonials";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        
        <Hero />
        <Features />
        <Categories />
        <FeaturedProducts />
        <SpecialOffer />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}