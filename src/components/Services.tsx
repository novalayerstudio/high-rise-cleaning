import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building2, Check, ArrowRight } from 'lucide-react';
import droneImage from '@/assets/drone-window-cleaning.jpg';
import ropeAccessImage from '@/assets/rope-access-cleaning.jpg';
import commercialTeamImage from '@/assets/commercial-cleaning-team.jpg';
import video from "@/assets/boomerang.mp4"; // Your original video reference

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

  // Mock logos using SVG for a more professional look
  const mockLogos = [
    <svg key="logo1" className="w-full h-full p-2" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="50" fill="#F0F4F8"/>
      <text x="50" y="30" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" fill="#334155" textAnchor="middle">CleanCorp</text>
      <circle cx="20" cy="25" r="8" fill="#60A5FA"/>
    </svg>,
    <svg key="logo2" className="w-full h-full p-2" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="50" fill="#F0F4F8"/>
      <path d="M10 25 L30 10 L30 40 Z" fill="#34D399"/>
      <text x="60" y="30" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" fill="#334155" textAnchor="middle">SparklePro</text>
    </svg>,
    <svg key="logo3" className="w-full h-full p-2" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="50" fill="#F0F4F8"/>
      <rect x="15" y="15" width="20" height="20" rx="5" fill="#FBBF24"/>
      <text x="60" y="30" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" fill="#334155" textAnchor="middle">BrightView</text>
    </svg>,
    <svg key="logo4" className="w-full h-full p-2" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="50" fill="#F0F4F8"/>
      <path d="M15 25 C15 15, 35 15, 35 25 S15 35, 15 25" stroke="#EC4899" strokeWidth="3" fill="none"/>
      <text x="60" y="30" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" fill="#334155" textAnchor="middle">ApexClean</text>
    </svg>,
  ];

  return (
    <section id="services" className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background Video */}
      <video
        src={video} // This remains your original local video path
        autoPlay
        muted
        loop
        playsInline // Important for iOS autoplay
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70" // Adjust opacity as needed
      ></video>

      <div className="container-custom relative z-10"> {/* Ensure content is above video */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professional Window Cleaning Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From residential homes to commercial high-rises, we deliver spotless results
            with unmatched safety standards and attention to detail.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12 stagger-animation">
          {/* Residential Services */}
          <Card className="p-8 card-hover bg-white group">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Residential Services</h3>
                  <p className="text-muted-foreground">Perfect for homeowners</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {residentialServices.map((service, index) => (
                  <div key={index} className="flex items-center opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
                  className="btn-hero group-hover:shadow-lg transition-shadow duration-300"
                >
                  Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Commercial Services */}
          <Card className="p-8 card-hover bg-white group">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Commercial Services</h3>
                  <p className="text-muted-foreground">Professional building maintenance</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {commercialServices.map((service, index) => (
                  <div key={index} className="flex items-center opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
                  className="btn-hero group-hover:shadow-lg transition-shadow duration-300"
                >
                  Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* High-Rise Window Cleaning Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Our High-Rise Window Cleaning Work</h3>
          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="group flex flex-col h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={[droneImage, ropeAccessImage, commercialTeamImage][i]}
                    alt={["Drone shot", "Rope access", "Commercial team"][i]}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 bg-white flex-1 flex flex-col">
                  <h4 className="font-bold text-primary text-lg mb-2">
                    {["Aerial Inspection & Showcase", "Rope Access Techniques", "Professional Team"][i]}
                  </h4>
                  <p className="text-muted-foreground flex-grow">
                    {[
                      "A professional overview of our high-rise window cleaning projects captured from above",
                      "IRATA certified technicians using advanced rope access methods for high-rise cleaning",
                      "Experienced commercial cleaning crew working on large-scale projects",
                    ][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Trusted by Top Organizations in Ontario
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 items-center justify-items-center mt-6">
            {mockLogos.map((logo, index) => (
              <div
                key={index}
                className="w-32 h-16 sm:w-36 sm:h-20 flex items-center justify-center bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;