import { Award, Users, BookOpen, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "1000+", label: "Happy Students" },
    { icon: Award, number: "98%", label: "Success Rate" },
    { icon: BookOpen, number: "50+", label: "Subjects Covered" },
    { icon: Target, number: "5+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-title fade-in-up">
            About EduExcel
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto fade-in-up stagger-1">
            We believe every student has the potential to excel. Our mission is to unlock that potential 
            through personalized learning experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-left">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-foreground">
                Transforming Education, One Student at a Time
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                At EduExcel, we understand that every student learns differently. That's why we've 
                developed a comprehensive approach that combines expert tutoring, cutting-edge technology, 
                and proven methodologies to create personalized learning journeys.
              </p>
              
              <blockquote className="text-quote border-l-4 border-secondary pl-6 my-8">
                "Education is not the filling of a pail, but the lighting of a fire. We ignite 
                that spark in every student we work with."
              </blockquote>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of passionate educators brings years of experience and a commitment to 
                excellence that has helped thousands of students achieve their academic goals and 
                build confidence for life.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 fade-in-right">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`card-premium text-center fade-in-up stagger-${index + 1}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-poppins font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
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