import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Heart, Lightbulb, Users2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const missions = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower young leaders through authentic diplomatic simulation, fostering global understanding and preparing tomorrow's changemakers for international cooperation."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "We champion diversity, respect, integrity, and excellence. Every voice matters in shaping our global community and building bridges across cultures."
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "A world where young minds drive positive change through informed dialogue, collaborative problem-solving, and mutual understanding across all nations."
  },
  {
    icon: Users2,
    title: "Our Impact",
    description: "Over 50,000 delegates trained, 200+ conferences worldwide, and countless leaders now serving in diplomacy, business, and public service globally."
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            About Global Model United Nations
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Since 1995, GMUN has been the world's premier platform for young diplomats to engage in 
            meaningful dialogue, develop critical thinking skills, and build lasting connections that 
            transcend borders and cultures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-diplomatic transition-all duration-300 group hover:-translate-y-2 bg-card border-border">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors"
                  >
                    <mission.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {mission.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-6">
                  Our Commitment to Excellence
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Authentic UN Experience</h4>
                      <p className="text-muted-foreground">Real committee procedures, actual UN topics, and professional diplomatic protocols.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Expert Guidance</h4>
                      <p className="text-muted-foreground">Mentorship from former UN officials, diplomats, and international relations experts.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Global Community</h4>
                      <p className="text-muted-foreground">A diverse network of young leaders from every continent, working together for positive change.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Countries Represented</div>
                </div>
                <div className="text-center p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <div className="text-3xl font-bold text-accent mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Delegates Trained</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">28</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <div className="text-3xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Annual Conferences</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}