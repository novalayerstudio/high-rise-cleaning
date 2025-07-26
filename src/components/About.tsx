import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Award, Target } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "Every job starts with a comprehensive safety assessment"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Excellence", 
      description: "We deliver spotless results that exceed expectations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Team",
      description: "Certified technicians with years of specialized training"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority on every project"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Clear Windows has been Ontario's trusted window cleaning partner for over 15 years. 
              What started as a small residential service has grown into the province's leading 
              window cleaning company, serving everything from family homes to downtown skyscrapers.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide the safest, most reliable window cleaning services in Ontario while 
                  building lasting relationships with our clients through exceptional service and results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Our Promise</h3>
                <p className="text-muted-foreground">
                  Every window we clean represents our commitment to quality, safety, and customer 
                  satisfaction. We don't just clean windows – we brighten spaces and enhance lives.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <Card key={index} className="p-4 border-l-4 border-l-primary">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-2">
                      <div className="text-primary mr-2">
                        {value.icon}
                      </div>
                      <h4 className="font-semibold text-primary text-sm">
                        {value.title}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Work With Our Team
            </Button>
          </div>

          {/* Team Photo */}
          <div className="fade-in-right">
            <div className="relative">
              <img 
                src={teamPhoto}
                alt="Clear Windows professional team"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              {/* Overlay Stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent rounded-2xl"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Expert Team</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm opacity-90">Years Combined Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Certified Technicians</div>
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

export default About;