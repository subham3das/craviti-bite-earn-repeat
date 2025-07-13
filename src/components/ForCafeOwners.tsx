import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Handshake } from 'lucide-react';

const ForCafeOwners = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              For <span className="text-gradient">Café Owners</span> ☕
            </h2>
            <p className="text-xl text-gray-600">
              Tired of Swiggy/Zomato taking huge commission cuts? Join the revolution! 🚀
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-elegant border border-gray-100">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">More Customers</h3>
                <p className="text-gray-600 text-sm">Reach hungry students directly</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fair Commission</h3>
                <p className="text-gray-600 text-sm">Fixed rates, no surprises</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Real Partnership</h3>
                <p className="text-gray-600 text-sm">We grow together</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                "Get more customers without the commission cuts" 💪
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join 50+ cafés already partnered with us. Better margins, happier customers, 
                and a platform that actually supports local businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button className="btn-hero">
                  Partner with Us 🤝
                </Button>
                <Button variant="outline" className="btn-outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">15%</div>
              <div className="text-gray-600">Average commission</div>
              <div className="text-sm text-green-600 font-medium">vs 25-30% on other platforms</div>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-gray-600">Partner cafés</div>
              <div className="text-sm text-green-600 font-medium">And growing fast!</div>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-accent mb-2">4.8⭐</div>
              <div className="text-gray-600">Partner satisfaction</div>
              <div className="text-sm text-green-600 font-medium">Real reviews, real results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCafeOwners;