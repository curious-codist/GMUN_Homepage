import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, Trophy } from "lucide-react"
import heroImage from "@/assets/gmun-hero.jpg"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Shape the Future of
              <span className="text-primary-vibrant block">Global Diplomacy</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-foreground mb-8 max-w-2xl"
            >
              Join thousands of young diplomats worldwide in the premier Model United Nations experience. 
              Develop leadership skills, engage in meaningful debates, and become a global changemaker.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-diplomatic">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-card border border-border"
              >
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Global Network</h3>
                <p className="text-muted-foreground">Connect with delegates from 150+ countries</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-card border border-border mt-8"
              >
                <Users className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Expert Mentorship</h3>
                <p className="text-muted-foreground">Learn from seasoned diplomats and leaders</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-card border border-border"
              >
                <Trophy className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Recognition</h3>
                <p className="text-muted-foreground">Earn prestigious awards and certificates</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}