import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle, BookOpen, Users, Star } from "lucide-react";

export default function TuitionCenter() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800 font-inter">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-12 px-4">
        <h1 className="text-4xl font-poppins font-bold mb-2">Bright Minds Tuition Center</h1>
        <p className="text-lg mb-6">Quality Coaching for Classes 8–12 | IIT-JEE | NEET</p>
        <Button size="lg" className="bg-emerald-500 text-white hover:bg-emerald-600 font-semibold rounded-full px-6 py-3">
          Book a Free Demo Class
        </Button>
      </section>

      {/* About Section */}
      <section className="py-10 px-6 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-poppins font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-gray-600 leading-relaxed">
          With 10+ years of experience, Bright Minds Tuition Center has been helping students excel in board exams and competitive tests. Our experienced faculty and result-oriented approach make us one of the most trusted coaching centers in the city.
        </p>
      </section>

      {/* Courses Section */}
      <section className="py-10 px-6 bg-white">
        <h2 className="text-3xl font-poppins font-bold text-center text-blue-600 mb-8">Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center">
            <BookOpen className="text-emerald-500 mb-3" size={36} />
            <h3 className="font-semibold text-lg">8–10 CBSE</h3>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center">
            <Star className="text-emerald-500 mb-3" size={36} />
            <h3 className="font-semibold text-lg">IIT-JEE</h3>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center">
            <Users className="text-emerald-500 mb-3" size={36} />
            <h3 className="font-semibold text-lg">NEET</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-poppins font-bold text-blue-600 mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-4">Visit us at our center or give us a call today!</p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="text-emerald-500" />
            <span>123 Main Street, City, State</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Phone className="text-emerald-500" />
            <span>+91 12345 67890</span>
          </div>
          <Button size="lg" className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-full px-6 py-3 mt-4">
            Call Now
          </Button>
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-3 flex items-center gap-2">
            <MessageCircle /> WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
