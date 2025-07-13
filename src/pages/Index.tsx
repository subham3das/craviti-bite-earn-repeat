import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import WhyCraviti from '@/components/WhyCraviti';
import ForCafeOwners from '@/components/ForCafeOwners';
import Testimonials from '@/components/Testimonials';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <WhyCraviti />
      <ForCafeOwners />
      <Testimonials />
      <JoinSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
