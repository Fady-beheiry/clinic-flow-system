import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "General Medicine", href: "#services" },
      { label: "Cardiology", href: "#services" },
      { label: "Pediatrics", href: "#services" },
      { label: "Orthopedics", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#" },
      { label: "News", href: "#" },
    ],
    support: [
      { label: "Contact Us", href: "#contact" },
      { label: "FAQs", href: "#" },
      { label: "Insurance", href: "#" },
      { label: "Patient Portal", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">M</span>
              </div>
              <span className="font-serif text-xl font-semibold">
                MediCare Clinic
              </span>
            </a>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Providing compassionate, patient-centered healthcare since 1995.
              Your health is our priority.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
              <span>for our patients</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} MediCare Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-background/60 hover:text-background transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-background/60 hover:text-background transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
