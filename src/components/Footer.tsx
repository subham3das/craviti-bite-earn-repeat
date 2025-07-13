import { Heart, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black text-gradient mb-4">Craviti</h3>
            <p className="text-gray-300 text-lg mb-4">
              "Hungry minds, full hearts, real rewards."
            </p>
            <p className="text-gray-400 text-sm max-w-md">
              The student-friendly food discovery platform that actually gives you real rewards. 
              Made by students, for students. 🎓
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#partner" className="hover:text-primary transition-colors">Partner</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:hello@craviti.com" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                hello@craviti.com
              </a>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Craviti. Made with <Heart className="h-4 w-4 inline text-red-500" /> by students, for students.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;