import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import gmunLogo from "@/assets/gmun-logo.png"

const quickLinks = [
  { name: "About GMUN", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Registration", href: "#register" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
  { name: "Alumni Network", href: "#alumni" }
]

const programs = [
  { name: "Model UN Conferences", href: "#conferences" },
  { name: "Leadership Training", href: "#training" },
  { name: "Youth Diplomacy", href: "#diplomacy" },
  { name: "Global Summits", href: "#summits" },
  { name: "Mentorship Program", href: "#mentorship" },
  { name: "Research Publications", href: "#research" }
]

const resources = [
  { name: "Delegate Handbook", href: "#handbook" },
  { name: "Position Paper Guide", href: "#papers" },
  { name: "Committee Procedures", href: "#procedures" },
  { name: "Awards & Recognition", href: "#awards" },
  { name: "Media Coverage", href: "#media" },
  { name: "Partner Organizations", href: "#partners" }
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-diplomatic-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 border-b border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Connected with GMUN
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Get the latest updates on conferences, deadlines, and opportunities to engage 
              with our global community of young diplomats.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img className="h-12 w-auto" src={gmunLogo} alt="GMUN" />
                <div>
                  <div className="text-xl font-bold">GMUN</div>
                  <div className="text-sm text-white/80">Global Model United Nations</div>
                </div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Empowering young leaders through authentic diplomatic simulation since 1995. 
                Join our global community and shape the future of international cooperation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@globalmun.org</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>New York, NY 10017, USA</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-primary transition-colors flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <a 
                      href={program.href} 
                      className="text-white/80 hover:text-primary transition-colors flex items-center group"
                    >
                      {program.name}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a 
                      href={resource.href} 
                      className="text-white/80 hover:text-primary transition-colors flex items-center group"
                    >
                      {resource.name}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Global Model United Nations. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-white/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-white/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}