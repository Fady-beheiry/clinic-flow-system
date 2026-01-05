import { Button } from "@/components/ui/button";
import { Calendar, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trusted Healthcare Since 1995
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Your Health,{" "}
            <span className="text-primary">Our Priority</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up delay-200">
            Experience compassionate care with our team of dedicated healthcare
            professionals. Book your appointment today and take the first step
            towards better health.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#booking" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">View Our Services</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 animate-fade-up delay-400">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "10k+", label: "Happy Patients" },
              { value: "20+", label: "Expert Doctors" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 right-10 hidden lg:block animate-float">
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-medium flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-card-foreground">98%</p>
            <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
