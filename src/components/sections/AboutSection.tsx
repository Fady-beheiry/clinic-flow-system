import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "State-of-the-art medical facilities",
  "Board-certified healthcare professionals",
  "Personalized treatment plans",
  "24/7 emergency services",
  "Insurance and billing assistance",
  "Multilingual staff support",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-accent">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-serif text-4xl font-bold text-primary">30+</span>
                  </div>
                  <p className="text-foreground font-medium">Years of Excellence</p>
                </div>
              </div>
            </div>
            
            {/* Decorative card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-medium max-w-xs hidden lg:block">
              <p className="text-4xl font-serif font-bold text-primary mb-1">98%</p>
              <p className="text-muted-foreground text-sm">
                Patient satisfaction rate based on 5,000+ reviews
              </p>
            </div>
          </div>

          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Caring for Your Health Since 1995
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At MediCare Clinic, we believe that quality healthcare should be
              accessible to everyone. Our mission is to provide compassionate,
              patient-centered care that treats the whole person, not just the
              symptoms.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With a team of experienced physicians, nurses, and support staff, we
              are committed to delivering excellence in every aspect of your
              healthcare journey.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#team">Meet Our Team</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
