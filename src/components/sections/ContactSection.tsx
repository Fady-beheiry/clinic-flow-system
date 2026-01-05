import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["123 Healthcare Avenue", "Medical District, NY 10001"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["Main: (123) 456-7890", "Emergency: (123) 456-7899"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@medicareclinic.com", "appointments@medicareclinic.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 8:00 PM", "Sat - Sun: 9:00 AM - 5:00 PM"],
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We're here to help. Reach out to us through any of
            the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground mb-3">
                {item.title}
              </h3>
              {item.details.map((detail, index) => (
                <p key={index} className="text-muted-foreground text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
