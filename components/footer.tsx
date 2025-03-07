import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image"


export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <Image src="/cafe_logo.png" alt="Cups & Conversations Logo" width={400} height={400} />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-playfair">Cups & Conversations</h3>
            <p className="mb-4 font-lora">Espresso yourself—one sip, one story.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-playfair">Quick Links</h3>
            <ul className="space-y-2 font-lora">
              <li>
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white/80 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white/80 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white/80 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/our-impact" className="hover:text-white/80 transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white/80 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-playfair">Hours</h3>
            <ul className="space-y-2 font-lora">
              <li>Monday - Friday: 7am - 8pm</li>
              <li>Saturday: 8am - 9pm</li>
              <li>Sunday: 8am - 7pm</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-playfair">Contact</h3>
            <address className="not-italic font-lora">
              <p>123 Coffee Lane</p>
              <p>Brewville, CA 90210</p>
              <p className="mt-2">(555) 123-4567</p>
              <p>hello@brewhaven.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center font-lora">
          <p>&copy; {new Date().getFullYear()} Cups & Conversations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

