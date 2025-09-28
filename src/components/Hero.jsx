import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="fade-in-up">
              <span className="inline-block px-4 py-2 bg-accent/20 text-primary font-medium rounded-full text-sm mb-6">
                🎓 Trusted by 1000+ Students
              </span>
            </div>
            
            <h1 className="text-hero fade-in-up stagger-1 mb-6">
              Excel in Every
              <span className="block text-secondary">Subject</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed mb-8 fade-in-up stagger-2 max-w-xl lg:max-w-none">
              Personalized tutoring that transforms learning experiences. 
              Expert tutors, proven methods, and measurable results for every student.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-up stagger-3">
              <Button className="btn-hero group">
                Book Free Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="btn-outline group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 fade-in-up stagger-4">
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Free Assessment
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Expert Tutors
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Proven Results
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in-right stagger-2">
            <div className="relative">
              <img
                src={heroImage}
                alt="Students learning together"
                className="w-full h-auto rounded-3xl shadow-elegant"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-elegant">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-sm">98% Success Rate</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-elegant">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="font-medium text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;