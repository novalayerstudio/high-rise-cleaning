import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      location: "Toronto, ON",
      rating: 5,
      text: "Absolutely fantastic service! The team was professional, punctual, and my windows have never looked better. They even cleaned the screens and sills without being asked. Will definitely be using them again!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Property Manager",
      location: "Ottawa, ON", 
      rating: 5,
      text: "We've been using Clear Windows for our office building for over 3 years. Their high-rise expertise and safety protocols are top-notch. Reliable, professional, and excellent results every time.",
      avatar: "MC"
    },
    {
      name: "Jennifer Davis",
      role: "Business Owner",
      location: "Hamilton, ON",
      rating: 5,
      text: "Our storefront windows look amazing after their service. The difference in natural light and overall appearance of our shop is remarkable. Great value and friendly team. Highly recommend!",
      avatar: "JD"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what homeowners and businesses 
            across Ontario say about our window cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 card-hover bg-white relative">
              <CardContent className="p-0">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to experience the Clear Windows difference?
          </p>
          <button 
            onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-hero"
          >
            Join Our Happy Customers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;