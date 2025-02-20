import { Code2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">HashStart</span>
            </div>
            <p className="text-gray-400">
              Empowering the next generation of developers with cutting-edge education.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Karur</li>
              <li>Tamilnadu, India</li>
              <li>contacthashstart@gmail.com</li>
              <li>+91 9363883007</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/Hashstart_edu" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/hashstartacademy?igsh=ZDA5azNwbHN2Y213" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HashStart Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;