"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Restaurant Landing Page",
      shortDescription: "A modern restaurant website with online reservation system.",
      description:
        "A responsive restaurant website featuring menu display, reservation booking, and contact information.",
      image: "/modern-restaurant-website-landing-page.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Responsive design for all devices",
        "Interactive menu display",
        "Contact form integration",
        "Modern CSS animations",
        "Mobile-first approach",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This restaurant landing page showcases my frontend development skills while drawing from my hospitality background. Built with semantic HTML, modern CSS, and vanilla JavaScript, it features a clean design that emphasizes the dining experience. The project demonstrates my understanding of user experience principles learned from years in luxury hospitality.",
    },
    {
      id: 2,
      title: "Task Management App",
      shortDescription: "A collaborative task tracker built with JavaScript and local storage.",
      description: "A task management application with drag-and-drop functionality and local persistence.",
      image: "/task-management-app.png",
      tags: ["JavaScript", "HTML", "CSS", "Local Storage"],
      features: [
        "Drag and drop interface",
        "Local storage persistence",
        "Task categorization",
        "Due date tracking",
        "Progress visualization",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This task management application demonstrates my JavaScript proficiency and understanding of DOM manipulation. Built as part of The Odin Project curriculum, it features a clean interface for organizing tasks with drag-and-drop functionality. The app uses local storage for data persistence and showcases my ability to create interactive web applications.",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      shortDescription: "A weather app consuming external APIs with dynamic UI updates.",
      description: "A weather dashboard that fetches real-time weather data and displays forecasts.",
      image: "/weather-dashboard-app-interface.jpg",
      tags: ["JavaScript", "API Integration", "CSS", "Async/Await"],
      features: [
        "Real-time weather data",
        "5-day forecast display",
        "Location search functionality",
        "Responsive design",
        "Error handling",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This weather dashboard showcases my ability to work with external APIs and handle asynchronous JavaScript. The application fetches real-time weather data and presents it in an intuitive interface. This project demonstrates my growing skills in API integration, error handling, and creating dynamic user interfaces.",
    },
    {
      id: 4,
      title: "Library Management System",
      shortDescription: "A Ruby on Rails application for managing book collections.",
      description: "A full-stack library management system with user authentication and book tracking.",
      image: "/library-management-system-interface.jpg",
      tags: ["Ruby on Rails", "PostgreSQL", "Bootstrap", "Authentication"],
      features: [
        "User authentication",
        "Book catalog management",
        "Borrowing system",
        "Search functionality",
        "Admin dashboard",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This library management system represents my progression into full-stack development with Ruby on Rails. The application includes user authentication, database relationships, and CRUD operations. Drawing from my hospitality experience, I focused on creating an intuitive user experience for both librarians and patrons.",
    },
    {
      id: 5,
      title: "Brand Portfolio Website",
      shortDescription: "A showcase website for luxury hospitality brands.",
      description: "A portfolio website highlighting luxury brand experiences and storytelling.",
      image: "/luxury-brand-portfolio-website.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Brand Design"],
      features: [
        "Elegant visual design",
        "Brand storytelling sections",
        "Image galleries",
        "Smooth animations",
        "Contact integration",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This brand portfolio website combines my hospitality industry knowledge with web development skills. Created to showcase luxury brand experiences, it demonstrates my understanding of high-end aesthetics and user experience design. The project reflects my unique position at the intersection of hospitality excellence and digital innovation.",
    },
    {
      id: 6,
      title: "Calculator App",
      shortDescription: "A functional calculator built with vanilla JavaScript.",
      description: "A calculator application with advanced operations and keyboard support.",
      image: "/calculator-app-interface.png",
      tags: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
      features: [
        "Basic arithmetic operations",
        "Keyboard input support",
        "Memory functions",
        "Clear and backspace",
        "Responsive design",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This calculator application demonstrates my JavaScript fundamentals and problem-solving skills. Built as part of The Odin Project curriculum, it handles complex calculations and edge cases while maintaining a clean, user-friendly interface. The project showcases my attention to detail and commitment to creating polished applications.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
