import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Award, Users, CheckCircle, Star } from 'lucide-react';
import beforeAfterImage from '@/assets/before-after-windows.jpg';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Safety Record",
      description: "Zero workplace incidents with rigorous safety protocols and certified technicians",
      highlight: "Zero Incidents"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "15+ Years Experience", 
      description: "Decades of expertise in residential and commercial window cleaning across Ontario",
      highlight: "Since 2008"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Fully Certified & Insured",
      description: "IRATA, SPRAT, WAH certified with $5M+ liability coverage for your peace of mind",
      highlight: "$5M+ Coverage"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "500+ Satisfied Clients",
      description: "Trusted by homeowners and businesses throughout Ontario for consistent quality",
      highlight: "500+ Projects"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with a satisfaction guarantee on every job",
      highlight: "100% Guaranteed"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Equipment",
      description: "State-of-the-art tools and eco-friendly cleaning solutions for superior results",
      highlight: "Latest Technology"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose Clear Windows?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're not just another cleaning company. We're Ontario's premier window cleaning specialists 
              with an unmatched commitment to safety, quality, and customer satisfaction.
            </p>

            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <Card key={index} className="p-6 card-hover border-l-4 border-l-primary">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary flex-shrink-0">
                        {reason.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-primary">
                            {reason.title}
                          </h3>
                          <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                            {reason.highlight}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Before/After Image */}
          <div className="fade-in-right">
            <div className="relative">
              <img 
                src={beforeAfterImage}
                alt="Before and after window cleaning results"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Safety</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;