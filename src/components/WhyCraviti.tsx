import { Shield, DollarSign, Heart, Users } from 'lucide-react';

const WhyCraviti = () => {
  const features = [
    {
      icon: Shield,
      title: "No fake discounts",
      description: "Just real rewards",
      emoji: "✨",
      color: "from-primary to-primary-glow"
    },
    {
      icon: DollarSign,
      title: "Fixed commission for cafés",
      description: "Fair pricing for everyone",
      emoji: "🤝",
      color: "from-secondary to-secondary-glow"
    },
    {
      icon: Heart,
      title: "Cashback you can actually use",
      description: "No minimum amounts or expiry",
      emoji: "💸",
      color: "from-accent to-orange-400"
    },
    {
      icon: Users,
      title: "Student-friendly deals",
      description: "Made by students, for students",
      emoji: "🎓",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Why <span className="text-gradient">Craviti?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Because we're tired of food apps that promise the world but deliver... meh 😒
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <span className="text-xl">{feature.emoji}</span>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-out Box */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 slide-in-left">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The bottom line? 🎯
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're not trying to be the next Zomato. We're building something better – 
              a platform that actually cares about students and local cafés. 
              <span className="font-bold text-primary"> Real food, real rewards, real simple.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCraviti;