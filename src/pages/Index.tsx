import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import Collections from '@/components/Collections';
import About from '@/components/About';
import Boutique from '@/components/Boutique';
import Service from '@/components/Service';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Catalog />
      <Collections />
      <About />
      <Boutique />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;