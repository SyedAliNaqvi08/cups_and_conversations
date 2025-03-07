import Image from "next/image"
import Link from "next/link"
import { Heart, BookOpen, Users, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OurImpactPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Our Impact</h1>
          <p className="text-primary/80 max-w-2xl">Empowering girls through education and menstrual health support</p>
        </div>

        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/girls-sanitary-pad.jpeg?height=400&width=600&text=Empowering+Girls"
                alt="Girls in a classroom"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Brewing Change, One Cup at a Time</h2>
              <p className="text-primary/80 mb-4">
                At Cups & Conversations, we believe in the power of education and health to transform lives. That's why we've
                committed 20% of our income to support underprivileged adolescent girls in their journey towards better
                menstrual health and uninterrupted education.
              </p>
              <p className="text-primary/80 mb-6">
                Our initiative aims to break the cycle of period poverty and empower young women to reach their full
                potential, aligning with the UN Sustainable Development Goals 3 (Good Health and Well-being) and 17
                (Partnerships for the Goals).
              </p>
            </div>
          </div>
        </section>

        {/* Period Poverty Section */}
        <section className="mb-16 bg-secondary py-12 rounded-lg">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Understanding Period Poverty</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-primary/80 mb-4">
                  Period poverty is a global issue that affects millions of girls and women, particularly in developing
                  countries. It refers to the lack of access to:
                </p>
                <ul className="list-disc list-inside text-primary/80 mb-4 space-y-2">
                  <li>Sanitary products</li>
                  <li>Menstrual hygiene education</li>
                  <li>Safe and clean spaces for menstrual care</li>
                  <li>Waste management facilities</li>
                </ul>
                <p className="text-primary/80">
                  This issue is compounded by socio-economic factors, cultural taboos, and lack of awareness, leading to
                  serious consequences for girls' health, education, and overall well-being.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-4">The Impact of Period Poverty</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <BookOpen className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-primary/80">
                      Girls miss school during their periods, leading to educational setbacks
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-primary/80">Increased risk of infections due to poor menstrual hygiene</p>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-primary/80">Social stigma and exclusion during menstruation</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg shadow-sm flex flex-col items-center text-center bg-secondary">
              <Coffee className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">20% Income Pledge</h3>
              <p className="text-primary/80">
                We dedicate 20% of our cafe's income to support menstrual health and education initiatives.
              </p>
            </div>

            <div className=" p-6 rounded-lg shadow-sm flex flex-col items-center text-center bg-secondary">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Sanitary Kits</h3>
              <p className="text-primary/80">
                We distribute sustainable sanitary kits to ensure girls have access to necessary menstrual supplies.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="mb-16 bg-primary text-white py-12 rounded-lg">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Impact So Far</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">1,000+</p>
                <p className="text-lg">Girls Supported</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-lg">Schools Reached</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">5,000+</p>
                <p className="text-lg">Sanitary Kits Distributed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">100+</p>
                <p className="text-lg">Educational Workshops</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Get Involved</h2>
            <p className="text-primary/80 mb-6 max-w-2xl mx-auto">
              Your support can make a significant difference in the lives of young girls. Here's how you can contribute
              to our mission:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white">Donate Now</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Volunteer With Us
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="bg-secondary p-8 rounded-lg">
            <blockquote className="text-primary/80 italic text-lg mb-4">
              "The menstrual health education and sanitary kits provided by Cups & Conversations have been life-changing. I no
              longer miss school during my periods, and I feel more confident and empowered."
            </blockquote>
            <p className="text-primary font-semibold">- Priya, 15, Program Beneficiary</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Join Us in Making a Difference</h2>
          <p className="text-primary/80 mb-6 max-w-2xl mx-auto">
            Every cup of coffee you enjoy at Cups & Conversations contributes to this important cause. Together, we can empower
            girls and create lasting change in our community.
          </p>
          <Link href="/menu">
            <Button className="bg-primary hover:bg-primary/90 text-white">Visit Our Cafe</Button>
          </Link>
        </section>
      </div>
    </main>
  )
}

