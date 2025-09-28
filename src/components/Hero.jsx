import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50/90 via-indigo-50/80 to-white"
    >
      {/* Background Neon Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 -left-16 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold rounded-full text-sm tracking-wide animate-pulse">
              🎓 Trusted by 1000+ Students
            </span>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Excel in Every <span className="text-purple-600">Subject</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg lg:max-w-none">
              Personalized tutoring that transforms learning experiences. 
              Expert tutors, proven methods, and measurable results for every student.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                Book Free Assessment
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button variant="outline" className="border-indigo-400 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 flex items-center gap-2">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                Free Assessment
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                Expert Tutors
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                Proven Results
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative group">
            <img
              src={heroImage}
              alt="Students learning together"
              className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Cards */}
            <div className="absolute -top-8 -left-6 bg-white/90 p-4 rounded-2xl shadow-lg backdrop-blur-md border border-purple-100 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-sm">98% Success Rate</span>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-6 bg-white/90 p-4 rounded-2xl shadow-lg backdrop-blur-md border border-indigo-100 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
