import { Search, MapPin, Gift } from 'lucide-react';
import appMockup from '@/assets/app-mockup.jpg';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      step: "1",
      title: "Open Craviti",
      description: "Find offers near you",
      emoji: "📱"
    },
    {
      icon: MapPin,
      step: "2", 
      title: "Visit the café",
      description: "Or pre-order for pickup",
      emoji: "🏪"
    },
    {
      icon: Gift,
      step: "3",
      title: "Earn rewards",
      description: "Get cashback instantly",
      emoji: "💰"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to start earning rewards on your favorite food 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.step}
                className="flex items-start gap-6 bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-glow">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-white p-6 rounded-2xl shadow-elegant border border-gray-100 pulse-glow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Real cashback, no gimmicks!</h4>
                  <p className="text-sm text-gray-600">Up to 20% back on every order</p>
                </div>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="flex justify-center slide-in-right">
            <div className="relative">
              <img 
                src={appMockup} 
                alt="Craviti App Interface" 
                className="w-80 h-auto rounded-3xl shadow-2xl float"
              />
              <div className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-full font-bold text-sm wiggle">
                Demo App! 📲
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;