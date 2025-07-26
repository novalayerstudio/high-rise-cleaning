import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building2, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const residentialServices = [
    "Interior & exterior window cleaning",
    "Screen cleaning & repair", 
    "Sill & frame cleaning",
    "Pressure washing",
    "Gutter cleaning",
    "Solar panel cleaning"
  ];

  const commercialServices = [
    "High-rise window cleaning",
    "Office building maintenance",
    "Retail storefront cleaning",
    "Post-construction cleanup",
    "Emergency cleaning services",
    "Scheduled maintenance programs"
  ];

  return (
    <section id="services" className="section-padding bg-gradient-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professional Window Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential homes to commercial high-rises, we deliver spotless results 
            with unmatched safety standards and attention to detail.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Residential Services */}
          <Card className="p-8 card-hover bg-white">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Residential Services</h3>
                  <p className="text-muted-foreground">Perfect for homeowners</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {residentialServices.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="text-sm text-muted-foreground">Starting from</div>
                  <div className="text-2xl font-bold text-primary">$89</div>
                </div>
                <Button 
                  onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-hero"
                >
                  Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Commercial Services */}
          <Card className="p-8 card-hover bg-white">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Commercial Services</h3>
                  <p className="text-muted-foreground">Professional building maintenance</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {commercialServices.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="text-sm text-muted-foreground">Custom pricing</div>
                  <div className="text-2xl font-bold text-primary">Contact us</div>
                </div>
                <Button 
                  onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-hero"
                >
                  Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Trusted by Top Organizations in Ontario
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-semibold">Logo {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;