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
    <section id="programs" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-title fade-in-up">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto fade-in-up stagger-1">
            Comprehensive tutoring programs designed to help students excel in every subject area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className={`card-premium relative group fade-in-up stagger-${(index % 6) + 1}`}
            >
              {subject.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-hero rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <subject.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-foreground">
                  {subject.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {subject.description}
              </p>
              
              <ul className="space-y-2">
                {subject.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-border/30">
                <button className="w-full btn-outline text-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;