"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    institutionName: "",
    contactPerson: "",
    noOfGirls: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for registering your institution. We will review your request and get back to you soon.")
    setFormData({
      institutionName: "",
      contactPerson: "",
      noOfGirls: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    })
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Register Now!</h1>
          <p className="text-primary max-w-2xl">
            Join our mission to provide sanitary boxes to young girls in need. Register your school or organization, and
            we'll work with you to distribute essential hygiene products.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Submit Your Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="institutionName">Institution Name</Label>
                <Input
                  id="institutionName"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  required
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="contactPerson">Number of Girls (Age 12-19)</Label>
                <Input
                  id="noOfGirls"
                  name="noOfGirls"
                  value={formData.noOfGirls}
                  onChange={handleChange}
                  required
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="location">Institution Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-amber-900 text-white">
                Register Institution
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
            <div className="bg-teal-50 p-6 rounded-lg mb-8">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Address</h3>
                  <p className="text-primary">123 Hope Street</p>
                  <p className="text-primary">Unity City, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <Phone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <p className="text-primary">(555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <Mail className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-primary">support@sanitaryaid.org</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Hours</h3>
                  <p className="text-primary">Monday - Friday: 9am - 6pm</p>
                  <p className="text-primary">Saturday: 10am - 4pm</p>
                  <p className="text-primary">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7462606519064!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1616201032035!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Sanitary Aid HQ location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}