import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { Star, Shield, Users, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-skyscrapers.jpg';
//Actions kick off test
const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'residential',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Quote request:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 will-change-transform" style={{
        transform: 'translateZ(0)',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/65"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="text-white space-y-8 fade-in-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Crystal Clear Windows
                <span className="block text-accent">Every Time</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Ontario's premier window cleaning service for residential homes and commercial high-rises. 
                <span className="font-semibold"> 15+ years experience</span> with a 
                <span className="font-semibold"> 100% safety record</span>.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="text-yellow-400" fill="currentColor" size={24} />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="text-green-400" size={24} />
                </div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Safety Record</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-blue-400" size={24} />
                </div>
                <div className="text-2xl font-bold">$5M+</div>
                <div className="text-sm text-white/80">Insured</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="text-orange-400" size={24} />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero text-lg px-8 py-4"
              >
                Get Free Quote
              </Button>
              <Button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Quote Form */}
          <div className="fade-in-right">
            <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Get Your Free Quote</h3>
                <p className="text-muted-foreground">Professional window cleaning estimate in 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-white"
                  />
                </div>

                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white"
                />

                <Input
                  name="address"
                  placeholder="Service Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="bg-white"
                />

                <div>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="high-rise">High-Rise</option>
                    <option value="both">Both Residential & Commercial</option>
                  </select>
                </div>

                <Textarea
                  name="message"
                  placeholder="Tell us about your project (number of windows, frequency, special requirements...)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="bg-white"
                />

                <Button type="submit" className="w-full btn-hero">
                  Request Free Quote
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;