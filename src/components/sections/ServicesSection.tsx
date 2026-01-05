import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye, 
  Activity,
  Pill
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Comprehensive primary care for patients of all ages, focusing on prevention and wellness.",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Expert heart care including diagnostics, treatment, and cardiac rehabilitation programs.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Specialized care for brain and nervous system conditions with advanced diagnostics.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Dedicated healthcare for infants, children, and adolescents in a caring environment.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Treatment for bone, joint, and muscle conditions including sports medicine.",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care from routine exams to advanced surgical procedures.",
  },
  {
    icon: Activity,
    title: "Diagnostics",
    description: "State-of-the-art laboratory and imaging services for accurate diagnosis.",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "In-house pharmacy for convenient access to prescribed medications.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine check-ups to specialized treatments, we offer a full range
            of medical services to meet your healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
