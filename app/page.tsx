import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedMenu from "@/components/featured-menu"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cafe_pink_bg.jpg?height=1080&width=1920"
            alt="Coffee shop interior"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <div className="flex flex-col justify-center items-center">
            <Image src="/white_logo.png" alt="Cups & Conversations Logo" width={100} height={100} />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Cups & Conversations</h1></div>
          <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl">
            Espresso yourself—one sip, one story
          </p>
          <Link href="/menu" className="bg-primary hover:bg-primary/90 text-white p-2 rounded-md">
            Order Online
          </Link>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-2">Our Signature Items</h2>
            <p className="text-primary/80 max-w-2xl">
              Handcrafted with love and served with a smile. Try our most popular selections.
            </p>
          </div>
          <FeaturedMenu />
          <div className="flex justify-center mt-10">
            <Link href="/menu">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Explore Full Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/cafe_seating.jpg?height=800&width=600"
                alt="Our coffee shop story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-primary mb-4 font-medium">
                Our vision extends beyond just serving great coffee—we are committed to women’s empowerment and social impact. By employing and uplifting women, we create opportunities for them to grow, gain financial independence, and refine their skills in a supportive environment. Beyond our café, we are driven to address a critical issue in Pakistan’s rural areas, where young girls lack access to basic sanitation and health awareness. Through our initiative, we provide sanitary kits and essential education on menstrual hygiene, ensuring that no girl is held back due to a lack of resources or awareness.
              </p>
              {/* <p className="text-primary/80 mb-6">
                Today, we continue to source the finest beans from ethical farms around the world, roast them to
                perfection in-house, and serve them in an atmosphere that feels like home. Every cup we brew carries our
                commitment to quality, sustainability, and the simple joy of a perfect coffee moment.
              </p> */}
              <Link href="/about">
                <Button variant="link" className="text-primary p-0 hover:text-primary/80">
                  Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-2">Visit Us</h2>
            <p className="text-primary/80 max-w-2xl">We'd love to see you in person. Drop by for a cup!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <MapPin className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
              <p className="text-primary/80">Lahore</p>
              <p className="text-primary/80">Pakistan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Hours</h3>
              <p className="text-primary/80">Monday - Friday: 12pm - 11pm</p>
              <p className="text-primary/80">Weekends: 12pm - 12am</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <Phone className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Contact</h3>
              <p className="text-primary/80">(334) 123-4567</p>
              <p className="text-primary/80">hello@cupsnconvos.com</p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Join Our Community</h2>
              <p className="text-primary-foreground/90">Subscribe for updates, special offers, and coffee tips.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md w-full md:w-auto focus:outline-none text-primary"
              />
              <Button className="rounded-l-none bg-secondary text-primary hover:bg-secondary/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

