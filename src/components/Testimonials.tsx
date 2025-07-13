import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Engineering Student",
      avatar: "👩‍💻",
      text: "I got a pizza and cashback? Yes please! This app is actually legit.",
      rating: 5,
      highlight: "pizza and cashback"
    },
    {
      name: "Arjun Patel", 
      role: "MBA Student",
      avatar: "🧑‍🎓",
      text: "Way better than other food apps. No fake 'discounts' that jack up prices first.",
      rating: 5,
      highlight: "Way better"
    },
    {
      name: "Sneha Reddy",
      role: "Medical Student", 
      avatar: "👩‍⚕️",
      text: "Found my new favorite café through Craviti. The rewards are actually real! 💰",
      rating: 5,
      highlight: "rewards are actually real"
    },
    {
      name: "Karan Singh",
      role: "CS Student",
      avatar: "👨‍💻", 
      text: "Finally, an app that doesn't treat students like broke college kids. Love it!",
      rating: 5,
      highlight: "Love it"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            What Students Are <span className="text-gradient">Saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from real students (not paid actors, we promise! 😅)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-white p-6 rounded-2xl shadow-elegant border border-gray-100 hover:shadow-glow transition-shadow duration-300 bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-4 font-medium">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* App Store Style Reviews */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-elegant border border-gray-100 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9</span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Rated #1 Student Food App 🏆
            </h3>
            <p className="text-gray-600">
              Based on 500+ reviews across campuses
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Reviews</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">95%</div>
                <div className="text-sm text-gray-600">Recommend</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">4.9⭐</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;