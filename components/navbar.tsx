"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/cafe_logo.png?height=40&width=40" alt="Cups & Conversations Logo" width={40} height={40} />
          <span className="text-xl font-playfair font-bold text-primary">Cups & Conversations</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-primary hover:text-primary/80 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-primary hover:text-primary/80 font-medium">
            About
          </Link>
          <Link href="/menu" className="text-primary hover:text-primary/80 font-medium">
            Menu
          </Link>
          <Link href="/gallery" className="text-primary hover:text-primary/80 font-medium">
            Gallery
          </Link>
          <Link href="/our-impact" className="text-primary hover:text-primary/80 font-medium">
            Our Impact
          </Link>
          <Link href="/contact" className="text-primary hover:text-primary/80 font-medium">
            Register Your Institution
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="/menu" className="bg-primary hover:bg-primary/90 text-white rounded-md p-2">Order Online</Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-white p-4">
          <nav className="flex flex-col gap-4 bg-primary w-full p-4">
            <Link
              href="/"
              className="text-white hover:text-primary/80 font-medium py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-primary/80 font-medium py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/menu"
              className="text-white hover:text-primary/80 font-medium py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-primary/80 font-medium py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/our-impact"
              className="text-white hover:text-primary/80 font-medium py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Impact
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-primary/80 font-medium py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Your Institution
            </Link>
            <Link href="/menu" className="bg-white hover:bg-white/60 text-primary mt-4 p-2 rounded-md text-center">Order Online</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

