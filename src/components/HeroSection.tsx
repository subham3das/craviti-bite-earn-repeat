
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-orange-500">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🍕</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse">🍔</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-bounce delay-1000">☕</div>
        <div className="absolute bottom-20 right-40 text-5xl animate-pulse delay-500">🌮</div>
        <div className="absolute top-60 left-1/3 text-3xl animate-bounce delay-700">🍰</div>
        <div className="absolute top-32 right-1/3 text-4xl animate-pulse delay-300">🥗</div>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="space-y-8">
          {/* Main headline with better contrast */}
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
            Find. Eat. Earn.{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Repeat.
            </span>
          </h1>
          
          {/* Subheadline with improved readability */}
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-medium drop-shadow-lg">
            Craviti helps you discover cool cafés and earn rewards on every bite. 
            <span className="block mt-2 text-yellow-300">No fake discounts, just real rewards! 🎉</span>
          </p>
          
          {/* CTA buttons with better visibility */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
              onClick={() => window.location.href = '/search'}
            >
              <MapPin className="mr-2" size={20} />
              Find Nearby Cafés
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-4 rounded-full shadow-2xl backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all"
              onClick={() => window.location.href = '/tasks'}
            >
              Start Earning Points
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
          
          {/* Live stats with better contrast */}
          <div className="flex flex-wrap justify-center gap-8 pt-12">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-3xl font-bold text-white">2,500+</div>
              <div className="text-white/90 font-medium">Students Joined</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">₹45,000</div>
              <div className="text-white/90 font-medium">Rewards Earned</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-3xl font-bold text-orange-300">150+</div>
              <div className="text-white/90 font-medium">Partner Cafés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
