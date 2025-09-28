import { Award, Users, BookOpen, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "1000+", label: "Happy Students" },
    { icon: Award, number: "98%", label: "Success Rate" },
    { icon: BookOpen, number: "50+", label: "Subjects Covered" },
    { icon: Target, number: "5+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background Neon Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight fade-in-up">
            About EduExcel
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mt-4 max-w-3xl mx-auto fade-in-up stagger-1">
            We believe every student has the potential to excel. Our mission is to unlock that potential 
            through personalized learning experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 fade-in-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Transforming Education, One Student at a Time
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At EduExcel, every student learns differently. We've developed a comprehensive approach that combines expert tutoring, modern technology, and proven methods to create personalized learning journeys.
            </p>
            <blockquote className="text-indigo-600 border-l-4 border-gradient-to-r from-purple-500 to-indigo-500 pl-6 my-8 italic shadow-sm">
              "Education is not the filling of a pail, but the lighting of a fire. We ignite that spark in every student."
            </blockquote>
            <p className="text-gray-600 leading-relaxed">
              Our team of passionate educators brings years of experience and a commitment to excellence that has helped thousands of students achieve their academic goals and build confidence for life.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 fade-in-right">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-6 text-center shadow-xl hover:scale-105 transform transition-transform duration-300 fade-in-up stagger-${index + 1}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
