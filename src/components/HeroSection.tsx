import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';
import LiveCounter from './LiveCounter';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating Food Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl float" style={{ animationDelay: '0s' }}>🍕</div>
        <div className="absolute top-32 right-16 text-3xl float" style={{ animationDelay: '1s' }}>🍔</div>
        <div className="absolute top-48 left-1/4 text-5xl float" style={{ animationDelay: '2s' }}>☕</div>
        <div className="absolute bottom-32 right-20 text-4xl float" style={{ animationDelay: '0.5s' }}>🍟</div>
        <div className="absolute bottom-48 left-16 text-3xl float" style={{ animationDelay: '1.5s' }}>🌮</div>
        <div className="absolute top-1/3 right-1/3 text-4xl float" style={{ animationDelay: '2.5s' }}>🍩</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Live Counter */}
          <div className="flex justify-center animate-bounce-in">
            <LiveCounter />
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-black text-white slide-in-left">
            Find. Eat. 
            <span className="text-gradient text-glow block mt-2">
              Earn. Repeat.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto slide-in-right font-medium">
            Craviti helps you discover cool cafés and earn 
            <span className="text-accent font-bold"> real rewards </span>
            on every bite. 🔥
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center bounce-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              className="btn-hero group"
              onClick={() => window.location.href = '/search'}
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
              Find Food Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline"
              onClick={() => window.location.href = '/near-me'}
            >
              Explore Nearby 🗺️
            </Button>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 slide-in-left" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-white/80">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="text-white/80">Partner Cafés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">₹25K+</div>
              <div className="text-white/80">Cashback Given</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;