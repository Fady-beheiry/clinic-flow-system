const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    specialty: "Internal Medicine",
    initials: "SM",
  },
  {
    name: "Dr. James Chen",
    role: "Head of Cardiology",
    specialty: "Cardiology",
    initials: "JC",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatrics Lead",
    specialty: "Pediatric Care",
    initials: "ER",
  },
  {
    name: "Dr. Michael Thompson",
    role: "Orthopedic Surgeon",
    specialty: "Sports Medicine",
    initials: "MT",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-muted-foreground text-lg">
            Our team of dedicated healthcare professionals brings together decades
            of experience and a shared commitment to patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent mx-auto mb-4 flex items-center justify-center group-hover:from-primary/30 transition-all duration-300">
                <span className="font-serif text-2xl font-bold text-primary">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
