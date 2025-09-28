import { Star, Award, BookOpen } from "lucide-react";
import sarahImage from "@/assets/tutor-sarah.jpg";
import alexImage from "@/assets/tutor-alex.jpg";
import emmaImage from "@/assets/tutor-emma.jpg";

const Tutors = () => {
  const tutors = [
    {
      name: "Sarah Chen",
      subject: "Mathematics",
      experience: "8+ Years Experience",
      bio: "Passionate about making complex math concepts simple and enjoyable for students of all levels.",
      image: sarahImage,
      rating: 4.9,
      credentials: ["PhD Mathematics", "Certified Teacher", "1000+ Students"],
    },
    {
      name: "Alex Rodriguez",
      subject: "Science",
      experience: "6+ Years Experience", 
      bio: "Bringing science to life through interactive experiments and real-world applications.",
      image: alexImage,
      rating: 4.8,
      credentials: ["MSc Physics", "Lab Specialist", "Research Background"],
    },
    {
      name: "Emma Johnson",
      subject: "English & Literature",
      experience: "7+ Years Experience",
      bio: "Helping students develop strong communication skills and discover the joy of literature.",
      image: emmaImage,
      rating: 4.9,
      credentials: ["MA English Lit", "Published Author", "Writing Coach"],
    },
  ];

  return (
    <section id="tutors" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-title fade-in-up">
            Meet Our Expert Tutors
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto fade-in-up stagger-1">
            Our passionate educators bring years of experience and a commitment to helping 
            every student reach their full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className={`card-tutor text-center fade-in-up stagger-${index + 1}`}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-full h-full object-cover rounded-full border-4 border-accent/30"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-secondary text-secondary-foreground p-2 rounded-full">
                    <Award className="h-4 w-4" />
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(tutor.rating)
                          ? "text-secondary fill-secondary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {tutor.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                {tutor.name}
              </h3>
              
              <div className="text-primary font-medium mb-2">
                {tutor.subject}
              </div>
              
              <div className="text-sm text-muted-foreground mb-4">
                {tutor.experience}
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {tutor.bio}
              </p>

              {/* Credentials */}
              <div className="space-y-2 mb-6">
                {tutor.credentials.map((credential, credIndex) => (
                  <div key={credIndex} className="flex items-center justify-center text-xs">
                    <BookOpen className="h-3 w-3 text-secondary mr-2" />
                    <span className="text-muted-foreground">{credential}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full btn-outline group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                Book Session
              </button>
            </div>
          ))}
        </div>

        {/* View All Tutors */}
        <div className="text-center mt-12 fade-in-up stagger-4">
          <button className="btn-primary">
            View All Tutors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tutors;