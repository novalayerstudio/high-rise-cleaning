import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    {
      city: "Toronto",
      region: "GTA",
      coverage: "Downtown, North York, Scarborough, Etobicoke",
      responseTime: "Same day"
    },
    {
      city: "Ottawa",
      region: "National Capital",
      coverage: "Downtown, Kanata, Nepean, Gloucester",
      responseTime: "24 hours"
    },
    {
      city: "Hamilton", 
      region: "Golden Horseshoe",
      coverage: "Downtown, Ancaster, Dundas, Stoney Creek",
      responseTime: "24 hours"
    },
    {
      city: "London",
      region: "Southwestern Ontario", 
      coverage: "Downtown, Byron, Masonville, Oakridge",
      responseTime: "48 hours"
    },
    {
      city: "Kitchener-Waterloo",
      region: "Waterloo Region",
      coverage: "Tech Triangle, Cambridge, Guelph area",
      responseTime: "48 hours"
    },
    {
      city: "Windsor",
      region: "Essex County",
      coverage: "Downtown, Tecumseh, LaSalle, Amherstburg", 
      responseTime: "48 hours"
    }
  ];

  return (
    <section id="areas" className="section-padding bg-gradient-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Areas We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional window cleaning services across Ontario's major cities and regions. 
            Fast response times and local expertise in every area we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {areas.map((area, index) => (
            <Card key={index} className="p-6 card-hover bg-white">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {area.city}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {area.region}
                    </p>
                  </div>
                  <MapPin className="w-6 h-6 text-accent" />
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      Coverage Areas
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {area.coverage}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <span className="text-xs text-muted-foreground">Response Time</span>
                      <div className="text-sm font-semibold text-accent">
                        {area.responseTime}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">Service</span>
                      <div className="text-sm font-semibold text-green-600">
                        Available
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ServiceAreas;