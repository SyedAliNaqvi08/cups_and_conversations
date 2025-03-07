import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">About Cups & Conversations</h1>
          <p className="text-primary max-w-2xl">
            Our journey from a small corner café to a beloved community gathering place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-teal-800 mb-4">
              We started this venture with a deep inspiration to make a difference in the lives of young girls, believing in their potential to thrive independently. Our journey began with the mission to provide them with essential resources, while also creating a space at our café where women can learn, grow, and hone their skills. By empowering them with opportunities and support, we aim to create a lasting social impact—fostering confidence, self-reliance, and a brighter future for the next generation of strong, independent women.
            </p>
            {/* <p className="text-teal-800 mb-4">
              Today, we continue to source the finest beans from ethical farms around the world, roast them to
              perfection in-house, and serve them in an atmosphere that feels like home. Every cup we brew carries our
              commitment to quality, sustainability, and the simple joy of a perfect coffee moment.
            </p> */}
            <p className="text-teal-800">
              What sets Cups 'N Conversations apart is our dedication to both craft and community. We believe that great coffee
              brings people together, and our space has become a hub for connection, conversation, and creativity in
              Brewville.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/cafe_seating_2.jpg?height=800&width=600"
              alt="Our coffee shop story"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">Quality</h3>
              <p className="text-teal-800">
                We believe in excellence, not just in our coffee but in the skills and talents of the women who run this space.
                Every product and service reflects dedication, craftsmanship, and passion.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">Sustainability</h3>
              <p className="text-teal-800">
                Our café is built on ethical sourcing and sustainable practices. Every purchase supports fair wages for women,
                skill development, and initiatives that uplift underprivileged girls by providing essential sanitary kits.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">Community</h3>
              <p className="text-teal-800">
                More than just a café, we are a safe space where women can grow, connect, and inspire.
                By supporting us, you become part of a movement that empowers women and uplifts communities.
              </p>
            </div>
          </div>
        </div>


        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Team Member ${i}`}
                    alt={`Team member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-teal-600">Team Member {i}</h3>
                <p className="text-teal-700">{["Founder", "Head Barista", "Pastry Chef", "Manager"][i - 1]}</p>
              </div>
            ))}
          </div>
        </div> */}

        <div className="bg-teal-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Come Visit Us</h2>
          <p className="text-teal-800 max-w-2xl mx-auto mb-6">
            We'd love to share our passion for coffee with you. Stop by Cups & Conversations and experience the warmth, flavor,
            and community that make us special.
          </p>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/cafe_seating.jpg?height=800&width=1600&text=Map"
              alt="Map to our location"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

