
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
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-title fade-in-up">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto fade-in-up stagger-1">
            Ready to transform your child's learning experience? Contact us today for a 
            free assessment and personalized learning plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="fade-in-left">
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-8">
              Let's Start the Conversation
            </h3>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 fade-in-up stagger-${index + 1} cursor-pointer hover-scale group`}
                  onClick={info.action}
                >
                  <div className="p-3 bg-gradient-hero rounded-xl group-hover:shadow-glow transition-all duration-300">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location & Directions */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border/30">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-poppins font-semibold text-foreground">
                  Our Location
                </h4>
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
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">123 Education Street</p>
                    <p className="text-muted-foreground">Downtown Learning District, NY 10001</p>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4 mt-4">
                  <h5 className="font-medium text-foreground mb-2">Office Hours</h5>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4">
                  <h5 className="font-medium text-foreground mb-2">Nearby Landmarks</h5>
                  <div className="text-sm text-muted-foreground space-y-1">
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
            <div className="card-premium">
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              
              <form  className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                 
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      
                      placeholder="(555) 123-4567"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject of Interest
                    </label>
                    <Input
                      type="text"
                      name="subject"
                     
                      placeholder="e.g., Math Tutoring"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                   
                    placeholder="Tell us about your learning goals and how we can help..."
                    rows={4}
                    required
                    className="w-full"
                  />
                </div>

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