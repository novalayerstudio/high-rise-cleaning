import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Award, Users, CheckCircle, Star } from 'lucide-react';
import { useState, useRef } from 'react';
import first from "@/assets/before.png"
import second from "@/assets/after.png"

const WhyChooseUs = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

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
    <section id="why-us" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Why Choose <span className="text-accent">Clear Windows?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're not just another cleaning company. We're Ontario's premier window cleaning specialists 
            with an unmatched commitment to safety, quality, and customer satisfaction.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Hero Stats Card */}
          <div className="lg:col-span-1 fade-in-left">
            <Card className="h-full bg-gradient-to-br from-primary to-primary/80 text-white shadow-2xl">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center space-y-8">
                  <div>
                    <div className="text-5xl font-bold mb-2">15+</div>
                    <div className="text-lg opacity-90">Years of Excellence</div>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div>
                    <div className="text-5xl font-bold mb-2">500+</div>
                    <div className="text-lg opacity-90">Happy Clients</div>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div>
                    <div className="text-5xl font-bold mb-2">100%</div>
                    <div className="text-lg opacity-90">Safety Record</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 fade-in-right">
            {reasons.map((reason, index) => (
              <Card 
                key={index} 
                className="p-6 card-hover border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {reason.title}
                      </h3>
                      <span className="inline-block text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                        {reason.highlight}
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/*Before and after*/}
        <div className="text-center fade-in-up mb-5">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-primary mb-6">See the Difference</h3>
                
                <div 
                  ref={containerRef}
                  className="relative w-full max-w-2xl mx-auto h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg cursor-ew-resize select-none"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Before Image (Left side) */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <img 
                      src={first} 
                      alt="Before cleaning" 
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                      BEFORE
                    </div>
                  </div>

                  {/* After Image (Right side) */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                  >
                    <img 
                      src={second} 
                      alt="After cleaning" 
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                      AFTER
                    </div>
                  </div>

                  {/* Slider Line and Handle */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 pointer-events-none"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-primary flex items-center justify-center pointer-events-auto cursor-ew-resize">
                      <div className="flex space-x-0.5">
                        <div className="w-0.5 h-4 bg-primary"></div>
                        <div className="w-0.5 h-4 bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-muted-foreground mt-4 max-w-2xl mx-auto px-4">
                  <span className="font-medium">← Drag to compare</span>
                  <span className="font-medium">Drag to compare →</span>
                </div>
              </div>
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center fade-in-up">
          <Card className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border-accent/20">
            <CardContent className="p-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready for Crystal Clear Results?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join hundreds of satisfied customers who trust Clear Windows for their cleaning needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center space-x-2 text-primary">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Fully Insured & Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">100% Satisfaction Guarantee</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;