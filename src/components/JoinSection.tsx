import { Button } from '@/components/ui/button';
import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';

const JoinSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl float" style={{ animationDelay: '0s' }}>🌟</div>
        <div className="absolute top-32 right-16 text-5xl float" style={{ animationDelay: '1s' }}>🚀</div>
        <div className="absolute bottom-32 right-20 text-6xl float" style={{ animationDelay: '0.5s' }}>💫</div>
        <div className="absolute bottom-48 left-16 text-5xl float" style={{ animationDelay: '1.5s' }}>⭐</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 slide-in-left">
            We're not a food app.
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-accent mb-8 slide-in-right">
            We're a food <span className="text-white">movement.</span>
          </h3>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 bounce-in">
            Join thousands of students who are eating better, spending less, and earning more. 
            <span className="font-bold text-accent"> This is just the beginning. 🔥</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="btn-hero text-lg px-8 py-4 group">
              Get Early Access 🚀
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Join the Craviti Fam 🫶
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-white/80 font-medium">Follow the movement:</div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </Button>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Early Access Perks */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎁</div>
              <h4 className="font-bold text-white mb-2">Early Bird Bonus</h4>
              <p className="text-white/80 text-sm">₹100 welcome cashback for first 1000 users</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-white mb-2">Exclusive Deals</h4>
              <p className="text-white/80 text-sm">Access to member-only café offers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">👑</div>
              <h4 className="font-bold text-white mb-2">Founder Status</h4>
              <p className="text-white/80 text-sm">Lifetime premium features & priority support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;