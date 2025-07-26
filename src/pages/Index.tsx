import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Certifications from '@/components/Certifications';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import ServiceAreas from '@/components/ServiceAreas';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Certifications />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <About />
      <ServiceAreas />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
