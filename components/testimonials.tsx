"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      name: "Sarah Al-Mansouri",
      position: "Guest Relations Manager at Qatar Airways",
      content:
        "Hussein's attention to detail and commitment to excellence made him an invaluable team member. His ability to create memorable experiences for our premium passengers was exceptional. Now seeing him apply those same principles to web development is inspiring.",
      rating: 5,
      image: "/professional-woman-qatar-airways-uniform.jpg",
    },
    {
      id: 2,
      name: "James Mitchell",
      position: "Operations Director at Eka Hotel",
      content:
        "Working with Hussein was a pleasure. His understanding of luxury hospitality standards and his natural problem-solving abilities made him stand out. I'm excited to see how he's channeling that expertise into creating digital experiences.",
      rating: 5,
      image: "/hotel-operations-director-professional-headshot.jpg",
    },
    {
      id: 3,
      name: "Maria Santos",
      position: "Brand Manager at House of Waine",
      content:
        "Hussein has an innate understanding of brand storytelling and customer experience. His transition from hospitality to web development brings a unique perspective that's rare in the tech industry. His projects reflect that attention to user experience.",
      rating: 4.5,
      image: "/brand-manager-professional-woman.jpg",
    },
    {
      id: 4,
      name: "David Ochieng",
      position: "Fellow Odin Project Student",
      content:
        "Hussein's background in hospitality gives him a unique edge in understanding user needs. His code is clean, his approach is methodical, and he brings real-world experience to every project. Great to learn alongside him.",
      rating: 5,
      image: "/software-developer-student-headshot.jpg",
    },
    {
      id: 5,
      name: "Lisa Chen",
      position: "Mentor at The Odin Project Community",
      content:
        "Hussein's dedication to learning full-stack development is impressive. His hospitality background shows in how he approaches problem-solving - always thinking about the end user's experience. He's going to make a great developer.",
      rating: 4.5,
      image: "/tech-mentor-woman-professional.jpg",
    },
  ]

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />)
    }

    return <div className="flex">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-20">
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
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Relationships</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">"{testimonial.content}"</p>
                      <div className="mt-auto">{renderStars(testimonial.rating)}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
