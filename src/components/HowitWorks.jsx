import { ClipboardCheck, UserCheck, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Free Assessment",
      description: "We evaluate your child's current level and identify areas for improvement through our comprehensive assessment.",
      features: ["30-minute evaluation", "Skill gap analysis", "Learning style identification"],
    },
    {
      icon: UserCheck,
      title: "Personalized Plan",
      description: "Our experts create a tailored learning plan with the perfect tutor match for your child's unique needs.",
      features: ["Custom curriculum", "Tutor matching", "Goal setting"],
    },
    {
      icon: TrendingUp,
      title: "Start Learning & Succeed",
      description: "Begin the journey to academic excellence with regular sessions, progress tracking, and continuous support.",
      features: ["Regular sessions", "Progress reports", "Ongoing support"],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-title fade-in-up">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto fade-in-up stagger-1">
            Getting started is simple. We've streamlined the process to make learning 
            accessible and effective for every student.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`text-center fade-in-up stagger-${index + 1}`}
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant relative z-10">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Steps */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start space-x-6 fade-in-up stagger-${index + 1}`}
            >
              {/* Step Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-elegant relative">
                  <step.icon className="h-8 w-8 text-white" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xs">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in-up stagger-4">
          <button className="btn-hero">
            Start Your Free Assessment Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;