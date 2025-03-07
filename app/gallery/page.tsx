"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Coffee, Camera, Users, Utensils, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"

// Import framer-motion at the top of your file
const framerMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeTab, setActiveTab] = useState("all")
  const [visibleTestimonial, setVisibleTestimonial] = useState(0)
  const masonryRef = useRef(null)

  const galleryImages = [
    {
      id: 1,
      src: "/coffee-aesthetic.jpg?height=600&width=800&text=Coffee Shop Interior",
      alt: "Coffee shop interior",
      category: "interior",
      height: 2,
    },
    {
      id: 2,
      src: "/coffee-machine.jpg?height=600&width=800&text=Barista at Work",
      alt: "Barista preparing coffee",
      category: "people",
      height: 3,
    },
    {
      id: 3,
      src: "/cafe_machine.jpg?height=600&width=800&text=Latte Art",
      alt: "Beautiful latte art",
      category: "coffee",
      height: 2,
    },
    {
      id: 4,
      src: "/coffee-machine-2.jpg?height=600&width=800&text=Coffee Beans",
      alt: "Fresh coffee beans",
      category: "coffee",
      height: 3,
    },
    {
      id: 5,
      src: "/cafe-outdoor.jpg?height=600&width=800&text=Outdoor Seating",
      alt: "Outdoor seating area",
      category: "interior",
      height: 2,
    },
    {
      id: 6,
      src: "/flowers.jpg?height=600&width=800&text=Pastry Display",
      alt: "Pastry display case",
      category: "food",
      height: 2,
    },
    {
      id: 8,
      src: "/customers.jpg?height=600&width=800&text=Customers Enjoying Coffee",
      alt: "Customers enjoying coffee",
      category: "people",
      height: 2,
    },
    {
      id: 9,
      src: "/cafe-interior.jpg?height=600&width=800&text=Coffee Roasting",
      alt: "Coffee roasting process",
      category: "coffee",
      height: 2,
    },
    {
      id: 10,
      src: "/cafe-white-interior.jpg?height=600&width=800&text=Cafe Event",
      alt: "Special event at the cafe",
      category: "events",
      height: 3,
    },
    {
      id: 11,
      src: "/breakfast.png?height=600&width=800&text=Breakfast Plate",
      alt: "Breakfast plate with coffee",
      category: "food",
      height: 2,
    },
    {
      id: 12,
      src: "/cafe-night.jpg?height=600&width=800&text=Coffee Shop at Night",
      alt: "Coffee shop at night",
      category: "interior",
      height: 3,
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      quote:
        "Cups & Conversations is my daily sanctuary. The atmosphere is perfect for both work and relaxation, and their cappuccino is simply unmatched in town.",
      image: "/placeholder.svg?height=100&width=100&text=Sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Local Foodie",
      quote:
        "I've tried coffee shops all over the city, but Cups & Conversations consistently delivers the perfect balance of flavor and ambiance. Their pastries are to die for!",
      image: "/placeholder.svg?height=100&width=100&text=Michael",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Writer",
      quote:
        "I've written half my novel at Cups & Conversations. The staff knows me by name, and they've created a space that nurtures creativity and community.",
      image: "/placeholder.svg?height=100&width=100&text=Emily",
    },
  ]

  const processSteps = [
    {
      id: 1,
      title: "Bean Selection",
      description: "We source only the finest beans from ethical farms around the world.",
      icon: <Coffee className="h-8 w-8 text-primary" />,
    },
    {
      id: 2,
      title: "Roasting",
      description: "Our master roasters bring out the unique flavor profile of each bean.",
      icon: <Coffee className="h-8 w-8 text-primary" />,
    },
    {
      id: 3,
      title: "Brewing",
      description: "Our baristas are trained in the art of perfect extraction.",
      icon: <Coffee className="h-8 w-8 text-primary" />,
    },
    {
      id: 4,
      title: "Serving",
      description: "Every cup is served with care and attention to detail.",
      icon: <Coffee className="h-8 w-8 text-primary" />,
    },
  ]

  const filteredImages =
    activeTab === "all" ? galleryImages : galleryImages.filter((image) => image.category === activeTab)

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const nextTestimonial = () => {
    setVisibleTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setVisibleTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    // Set up masonry layout
    if (masonryRef.current) {
      const items = masonryRef.current.querySelectorAll(".masonry-item")
      items.forEach((item) => {
        const height = Number.parseInt(item.getAttribute("data-height")) || 2
        item.style.setProperty("--span", height * 10)
      })
    }
  }, [])

  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-primary mb-2">Our Gallery</h1>
          <p className="text-primary/80 max-w-2xl">
            Take a visual journey through our coffee shop, from our cozy interior to our delicious offerings.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <Tabs defaultValue="all" className="w-full mb-10" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-secondary">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="coffee"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Coffee className="h-4 w-4 mr-2" />
                Coffee
              </TabsTrigger>
              <TabsTrigger
                value="interior"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Camera className="h-4 w-4 mr-2" />
                Interior
              </TabsTrigger>
              <TabsTrigger
                value="people"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Users className="h-4 w-4 mr-2" />
                People
              </TabsTrigger>
              <TabsTrigger
                value="food"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Utensils className="h-4 w-4 mr-2" />
                Food
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Masonry Gallery */}
          <div className="mb-16">
            <div ref={masonryRef} className="masonry-grid">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="masonry-item gallery-item bg-white rounded-lg overflow-hidden shadow-sm"
                  data-height={image.height}
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative w-full h-full">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-primary/0 hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                      <span className="text-white font-medium bg-primary/70 px-3 py-1 rounded-full">View</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Tabs>

        {/* Coffee Making Process
        <section className="mb-16 py-12 bg-secondary rounded-lg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-bold text-primary mb-2">Our Coffee Making Process</h2>
              <p className="text-primary/80 max-w-2xl">From bean to cup, we ensure quality at every step</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="process-step flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
                >
                  <div className="mb-4 p-3 bg-secondary rounded-full">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-primary/80">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      
        <section className="mb-16">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-2">What Our Customers Say</h2>
            <p className="text-primary/80 max-w-2xl">Don't just take our word for it - hear from our community</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={visibleTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="testimonial-card bg-white p-8 rounded-lg shadow-sm max-w-2xl"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonials[visibleTestimonial].image || "/placeholder.svg"}
                          alt={testimonials[visibleTestimonial].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-primary/80 italic mb-4">"{testimonials[visibleTestimonial].quote}"</p>
                      <h3 className="text-lg font-semibold text-primary">{testimonials[visibleTestimonial].name}</h3>
                      <p className="text-primary/70 text-sm">{testimonials[visibleTestimonial].role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow-sm md:-left-5"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow-sm md:-right-5"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </section>

       
        <section className="mb-16">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-2">Follow Us on Instagram</h2>
            <p className="text-primary/80 max-w-2xl">@brewhaven_coffee</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="gallery-item aspect-square relative overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Instagram ${i}`}
                  alt={`Instagram post ${i}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 hover:bg-primary/30 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                  <span className="text-white font-medium">View</span>
                </div>
              </div>
            ))}
          </div>
        </section>

       
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <Button
              variant="ghost"
              className="absolute top-4 right-4 text-white hover:text-primary-foreground/80 transition-colors"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )} */}
      </div>
    </main>
  )
}

