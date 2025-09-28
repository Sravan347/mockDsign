import { Mail, Phone, MapPin, Send, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri 8AM-8PM, Sat 9AM-5PM",
      action: () => window.open("tel:+15551234567"),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      details: "+1 (555) 123-4567",
      subtext: "Quick responses via WhatsApp",
      action: () => window.open("https://wa.me/15551234567?text=Hi! I'm interested in learning more about your tutoring programs."),
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@eduexcel.com",
      subtext: "We'll respond within 24 hours",
      action: () => window.open("mailto:info@eduexcel.com"),
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Education Street",
      subtext: "Downtown Learning District, NY 10001",
      action: () => window.open("https://maps.google.com/?q=123+Education+Street,+Downtown+Learning+District,+NY+10001"),
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background Neon Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-16 -left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 fade-in-up">
            Get In Touch
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mt-4 max-w-3xl mx-auto fade-in-up stagger-1">
            Ready to transform your child's learning experience? Contact us today for a free assessment and personalized learning plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="fade-in-left space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 cursor-pointer group transition-all duration-300 hover:translate-x-2"
                onClick={info.action}
              >
                <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                    {info.title}
                  </h4>
                  <p className="text-purple-600 font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-gray-500">{info.subtext}</p>
                </div>
              </div>
            ))}

            {/* Location Card */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold text-gray-900">Our Location</h4>
                <Button
                  onClick={() => window.open("https://maps.google.com/?q=123+Education+Street,+Downtown+Learning+District,+NY+10001")}
                  variant="outline"
                  size="sm"
                  className="group"
                >
                  <Navigation className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Get Directions
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">123 Education Street</p>
                    <p className="text-gray-500">Downtown Learning District, NY 10001</p>
                  </div>
                </div>

                <div className="bg-gray-100/50 rounded-lg p-4 mt-4">
                  <h5 className="font-medium text-gray-900 mb-2">Office Hours</h5>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className="bg-gray-100/50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">Nearby Landmarks</h5>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>• Central Library (2 blocks north)</p>
                    <p>• Metro Station (5-minute walk)</p>
                    <p>• City Park (across the street)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input type="text" name="name" placeholder="Full Name" required className="w-full" />
                  <Input type="email" name="email" placeholder="Email Address" required className="w-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input type="tel" name="phone" placeholder="Phone Number" className="w-full" />
                  <Input type="text" name="subject" placeholder="Subject of Interest" className="w-full" />
                </div>

                <Textarea name="message" placeholder="Tell us about your learning goals..." rows={4} required className="w-full" />

                <Button type="submit" className="btn-hero w-full group">
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
