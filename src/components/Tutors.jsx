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
    <section id="tutors" className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background Neon Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 fade-in-up">
            Meet Our Expert Tutors
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mt-4 max-w-3xl mx-auto fade-in-up stagger-1">
            Our passionate educators bring years of experience and a commitment to helping 
            every student reach their full potential.
          </p>
        </div>

        {/* Tutor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 fade-in-up"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-full h-full object-cover rounded-full border-4 border-gradient-to-r from-purple-600 to-indigo-600 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-full shadow-md">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(tutor.rating)
                          ? "text-purple-600 fill-purple-600"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{tutor.rating}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{tutor.name}</h3>
              <div className="text-purple-600 font-medium mb-2">{tutor.subject}</div>
              <div className="text-sm text-gray-500 mb-4">{tutor.experience}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{tutor.bio}</p>

              {/* Credentials */}
              <div className="space-y-2 mb-6">
                {tutor.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center justify-center text-xs text-gray-600 gap-2">
                    <BookOpen className="h-3 w-3 text-purple-600" />
                    {cred}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full py-2 rounded-xl border border-purple-600 text-purple-600 font-semibold text-sm hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300">
                Book Session
              </button>
            </div>
          ))}
        </div>

        {/* View All Tutors */}
        <div className="text-center mt-12 fade-in-up stagger-4">
          <button className="py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300">
            View All Tutors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tutors;
