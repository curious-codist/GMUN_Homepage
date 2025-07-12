import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Former Secretary-General, GMUN 2023",
    country: "Singapore",
    image: "/api/placeholder/64/64",
    quote: "GMUN transformed my understanding of global politics and gave me the confidence to pursue a career in international relations. The experience of chairing the Security Council was unparalleled.",
    rating: 5,
    achievement: "Now works at the World Bank"
  },
  {
    name: "Ahmed Hassan",
    title: "Outstanding Delegate Award Winner",
    country: "Egypt",
    image: "/api/placeholder/64/64",
    quote: "The quality of debate and the depth of research required pushed me to become a better critical thinker. GMUN's mentorship program connected me with incredible professionals.",
    rating: 5,
    achievement: "Studying International Law at Oxford"
  },
  {
    name: "Maria Rodriguez",
    title: "Best Position Paper, Climate Committee",
    country: "Colombia",
    image: "/api/placeholder/64/64",
    quote: "As a delegate representing my country in climate negotiations, I learned how to balance national interests with global responsibility. The skills I gained are invaluable in my environmental science career.",
    rating: 5,
    achievement: "Environmental Policy Analyst at UN"
  },
  {
    name: "David Kim",
    title: "GMUN Regional Coordinator",
    country: "South Korea",
    image: "/api/placeholder/64/64",
    quote: "Leading workshops for new delegates taught me as much as participating in committees. GMUN creates a community where everyone grows together, regardless of their experience level.",
    rating: 5,
    achievement: "Diplomatic Corps, Seoul"
  },
  {
    name: "Emma Thompson",
    title: "Human Rights Committee Chair",
    country: "United Kingdom",
    image: "/api/placeholder/64/64",
    quote: "The authentic UN procedures and real-world relevance of topics made every session feel meaningful. I've applied the negotiation skills I learned here in my law practice daily.",
    rating: 5,
    achievement: "Human Rights Lawyer"
  },
  {
    name: "Carlos Mendoza",
    title: "Economic Council Representative",
    country: "Mexico",
    image: "/api/placeholder/64/64",
    quote: "GMUN opened doors I never knew existed. The network I built here led to internships, mentorships, and lifelong friendships across six continents.",
    rating: 5,
    achievement: "International Trade Specialist"
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Voices from Our Global Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Hear from our alumni who are now making their mark in diplomacy, international business, 
            law, and public service around the world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-diplomatic transition-all duration-300 group hover:-translate-y-1 bg-card border-border">
                <CardContent className="p-6 relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-primary">
                      {testimonial.title}
                    </div>
                    <div className="text-xs text-muted-foreground bg-accent/5 px-3 py-1 rounded-full inline-block">
                      {testimonial.achievement}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border">
            <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-6">
              Join Our Alumni Network
            </h3>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our alumni community spans 85+ countries and includes diplomats, business leaders, 
              lawyers, activists, and changemakers. When you join GMUN, you become part of a 
              lifelong network committed to global progress.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Career Advancement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">85+</div>
                <div className="text-sm text-muted-foreground">Countries Represented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Active Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Recommendation Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}