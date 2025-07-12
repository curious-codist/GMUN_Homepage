import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const upcomingEvents = [
  {
    title: "GMUN New York Summit 2024",
    date: "March 15-17, 2024",
    location: "United Nations Headquarters, New York",
    participants: "500+ Delegates",
    duration: "3 Days",
    type: "Summit",
    description: "Experience diplomacy at its finest in the actual UN chambers. Address global challenges including climate change, international security, and sustainable development.",
    committees: ["Security Council", "General Assembly", "ECOSOC", "Human Rights Council"],
    registrationOpen: true
  },
  {
    title: "GMUN Youth Climate Conference",
    date: "April 22-24, 2024",
    location: "Copenhagen, Denmark",
    participants: "300+ Delegates",
    duration: "3 Days",
    type: "Conference",
    description: "Focus on environmental diplomacy and climate action. Work with world-renowned climate scientists and policy makers to draft actionable solutions.",
    committees: ["Environment Programme", "Climate Change Commission", "Sustainable Development"],
    registrationOpen: true
  },
  {
    title: "GMUN Regional Asia-Pacific",
    date: "May 10-12, 2024",
    location: "Singapore",
    participants: "400+ Delegates",
    duration: "3 Days",
    type: "Regional",
    description: "Address regional challenges and opportunities across the Asia-Pacific. Engage with local diplomatic missions and international organizations.",
    committees: ["ASEAN Council", "Pacific Economic Forum", "Regional Security"],
    registrationOpen: true
  }
]

const pastEvents = [
  {
    title: "GMUN Global Leadership Summit 2023",
    date: "November 18-20, 2023",
    location: "Geneva, Switzerland",
    participants: "600+ Delegates",
    duration: "3 Days",
    type: "Summit",
    description: "Our most successful conference to date, featuring delegates from 85 countries and addressing critical global issues.",
    committees: ["WHO Assembly", "International Court of Justice", "World Trade Organization"],
    achievements: ["85 countries represented", "15 award categories", "3 keynote speakers from UN leadership"]
  },
  {
    title: "GMUN Peace & Security Forum 2023",
    date: "September 8-10, 2023",
    location: "The Hague, Netherlands",
    participants: "350+ Delegates",
    duration: "3 Days",
    type: "Forum",
    description: "Focused on international peace, security, and conflict resolution with expert guidance from ICC and ICJ officials.",
    committees: ["International Criminal Court", "Peacekeeping Operations", "Counter-Terrorism"],
    achievements: ["12 resolutions passed", "Media coverage in 25+ outlets", "Follow-up initiatives launched"]
  }
]

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <section id="events" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Global Events & Conferences
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Join delegates from around the world in our prestigious conferences and summits. 
            Each event offers unique opportunities for learning, networking, and making a real impact.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="upcoming" className="text-base">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past" className="text-base">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-diplomatic transition-all duration-300 group hover:-translate-y-2 bg-card border-border">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                          {event.type}
                        </Badge>
                        {event.registrationOpen && (
                          <Badge className="bg-accent text-accent-foreground">
                            Registration Open
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-card-foreground font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-card-foreground">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-card-foreground">{event.participants}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-card-foreground">{event.duration}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Committees:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.committees.map((committee) => (
                            <Badge key={committee} variant="secondary" className="text-xs">
                              {committee}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid lg:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-card transition-all duration-300 bg-card border-border">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline" className="bg-muted text-muted-foreground">
                          {event.type}
                        </Badge>
                        <Badge variant="secondary">
                          Completed
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-card-foreground">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-card-foreground">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-card-foreground">{event.participants}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-card-foreground">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-card-foreground">{event.duration}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {event.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}