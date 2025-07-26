import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'residential',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="quote" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="text-white fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Crystal Clear Windows?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get your free quote today and experience the Clear Windows difference. 
              Professional service, guaranteed results, and complete satisfaction.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Call Now</div>
                  <div className="text-white/80">1-800-WINDOWS (1-800-946-3697)</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-white/80">info@clearwindowsontario.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Service Areas</div>
                  <div className="text-white/80">Toronto, Ottawa, Hamilton & Beyond</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Response Time</div>
                  <div className="text-white/80">Free quotes within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">$5M+</div>
                <div className="text-sm text-white/80">Insured</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Guaranteed</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right">
            <Card className="p-8 bg-white shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Request Your Free Quote
                </h3>
                <p className="text-muted-foreground">
                  Get a detailed estimate for your window cleaning needs
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="residential">Residential Window Cleaning</option>
                    <option value="commercial">Commercial Window Cleaning</option>
                    <option value="high-rise">High-Rise Window Cleaning</option>
                    <option value="both">Both Residential & Commercial</option>
                    <option value="emergency">Emergency Cleaning Service</option>
                    <option value="maintenance">Maintenance Contract</option>
                  </select>
                </div>

                <Textarea
                  name="message"
                  placeholder="Tell us about your project: number of windows, building height, frequency needed, special requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                />

                <Button type="submit" className="w-full btn-hero text-lg py-4">
                  Get My Free Quote
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    * Required fields. We'll contact you within 24 hours.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;