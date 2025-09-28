import { Calculator, Microscope, BookText, Code, Globe, Palette } from "lucide-react";

const Programs = () => {
  const subjects = [
    {
      icon: Calculator,
      title: "Mathematics",
      description: "From basic arithmetic to advanced calculus, master math concepts with confidence.",
      features: ["Algebra & Geometry", "Statistics", "Calculus", "Problem Solving"],
      popular: true,
    },
    {
      icon: Microscope,
      title: "Science",
      description: "Explore the wonders of physics, chemistry, and biology with hands-on learning.",
      features: ["Physics", "Chemistry", "Biology", "Lab Experiments"],
      popular: false,
    },
    {
      icon: BookText,
      title: "English",
      description: "Enhance reading, writing, and communication skills for academic success.",
      features: ["Grammar", "Literature", "Creative Writing", "Public Speaking"],
      popular: false,
    },
    {
      icon: Code,
      title: "Programming",
      description: "Learn to code and prepare for the digital future with modern programming languages.",
      features: ["Python", "JavaScript", "Web Development", "Problem Solving"],
      popular: true,
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "Understand history, geography, and cultures to become a global citizen.",
      features: ["World History", "Geography", "Civics", "Current Events"],
      popular: false,
    },
    {
      icon: Palette,
      title: "Arts & Design",
      description: "Express creativity and develop artistic skills across various mediums.",
      features: ["Digital Art", "Design Principles", "Portfolio Building", "Creativity"],
      popular: false,
    },
  ];

  return (
    <section id="programs" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Neon Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-16 -left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 fade-in-up">
            Our Programs
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mt-4 max-w-3xl mx-auto fade-in-up stagger-1">
            Comprehensive tutoring programs designed to help students excel in every subject area.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="relative group bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 fade-in-up"
            >
              {/* Popular Badge */}
              {subject.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Icon & Title */}
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <subject.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{subject.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{subject.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {subject.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 animate-pulse"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button className="w-full py-2 rounded-xl border border-purple-600 text-purple-600 font-semibold text-sm hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
