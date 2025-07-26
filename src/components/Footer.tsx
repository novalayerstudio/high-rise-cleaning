import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-foreground border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CW</span>
              </div>
              <div>
                <h3 className="font-bold text-primary">Clear Windows</h3>
                <p className="text-xs text-muted-foreground">Professional Cleaning</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Ontario's premier window cleaning service for residential homes and commercial buildings. 
              15+ years of experience with a perfect safety record.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Residential Cleaning</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commercial Cleaning</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">High-Rise Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Post-Construction</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Emergency Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Maintenance Contracts</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Toronto & GTA</li>
              <li>Ottawa & Region</li>
              <li>Hamilton & Area</li>
              <li>London & Southwestern</li>
              <li>Kitchener-Waterloo</li>
              <li>Windsor & Essex</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">1-800-WINDOWS</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">info@clearwindows.ca</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Serving All of Ontario</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Mon-Fri: 7AM-7PM<br />Sat: 8AM-5PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 Clear Windows Ontario. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;