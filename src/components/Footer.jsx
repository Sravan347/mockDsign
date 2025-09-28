import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Programs", href: "#programs" },
    { name: "Meet Tutors", href: "#tutors" },
  
  ];

  const subjects = [
    { name: "Mathematics", href: "#programs" },
    { name: "Science", href: "#programs" },
    { name: "English", href: "#programs" },
    { name: "Programming", href: "#programs" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background neon blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-16 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-16 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="fade-in-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl">EduExcel</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming education through personalized tutoring and expert guidance. Helping students excel in every subject.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up">
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div className="fade-in-up">
            <h3 className="font-semibold text-lg mb-6">Subjects</h3>
            <ul className="space-y-3">
              {subjects.map((subject, index) => (
                <li key={index}>
                  <a
                    href={subject.href}
                    className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                  >
                    {subject.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-in-up">
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-500" />
                <span className="text-gray-300">info@eduexcel.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-500 mt-1" />
                <span className="text-gray-300">
                  123 Education Street<br />
                  Downtown Learning District
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 EduExcel. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-purple-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-purple-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-purple-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
