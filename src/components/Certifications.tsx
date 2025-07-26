import { Shield, Award, Users, FileCheck, Wrench, Zap } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IRATA & SPRAT",
      description: "International rope access certifications"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "WAH Certified", 
      description: "Working at Heights certification"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "WSIB Coverage",
      description: "Full workplace safety insurance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "$5M+ Liability",
      description: "Comprehensive insurance coverage"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Specialized Technicians",
      description: "Trained for aerial work"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "WHMIS Certified",
      description: "All employees safety trained"
    }
  ];

  return (
    <section className="py-12 bg-navy-50 border-y border-border">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Certified & Insured Professionals
          </h2>
          <p className="text-muted-foreground">
            Your safety and satisfaction are guaranteed with our comprehensive certifications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-3">
                {cert.icon}
              </div>
              <h3 className="font-semibold text-sm text-primary mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;