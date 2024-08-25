import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Zap, Shield, Star, Send } from "lucide-react"
import Image from "next/image"
import Buttons from "@/components/auth"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <header className="px-4 lg:px-6 h-14 flex items-center backdrop-blur-md bg-white/30 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/logo.png" // Replace with actual image path
            className="h-7 w-7 flex-shrink-0 rounded-full"
            width={50}
            height={50}
            alt="Logo"
          />
          <span className="ml-2 font-bold text-xl text-blue-800">Resolve.AI</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#">
            Contact
          </Link>
          <Buttons />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Elevate Your Digital Experience
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Embark on a journey of innovation with Resolve.AI. Where creativity meets technology.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/sign-up">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                </Link>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </section>
        <div className="w-full h-20 bg-blue-50 relative">
          <svg className="absolute bottom-0 w-full h-20" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24.9999C240 99.9999 480 99.9999 720 49.9999C960 -1.52588e-05 1200 -1.52588e-05 1440 49.9999V73.9999H0V24.9999Z" fill="white" />
          </svg>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-800">Stellar Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 border-none shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <Zap className="h-12 w-12 mb-4 text-blue-600" />
                  <CardTitle className="text-blue-800">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-700">
                  Experience unparalleled speed and efficiency with our optimized platform.
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 border-none shadow-lg mt-8 md:mt-16">
                <CardHeader className="flex flex-col items-center">
                  <Shield className="h-12 w-12 mb-4 text-blue-600" />
                  <CardTitle className="text-blue-800">Secure & Reliable</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-700">
                  Your data is protected with state-of-the-art security measures.
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 border-none shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <Star className="h-12 w-12 mb-4 text-blue-600" />
                  <CardTitle className="text-blue-800">Intuitive Design</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-700">
                  Seamless user experience across all devices, designed with you in mind.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-800">What Our Clients Say</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-gray-700 mb-4">Resolve.AI has transformed the way we work. It&apos;s intuitive, powerful, and has significantly boosted our productivity.</p>
                <div className="flex items-center">
                  <img src="/placeholder.svg?height=40&width=40" alt="Client" className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-blue-800">Jane Doe</p>
                    <p className="text-sm text-gray-600">CEO, TechCorp</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mt-8 md:mt-16">
                <p className="text-gray-700 mb-4">The security features of Resolve.AI give us peace of mind. It&apos;s a game-changer for our business operations.</p>
                <div className="flex items-center">
                  <img src="/placeholder.svg?height=40&width=40" alt="Client" className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-blue-800">John Smith</p>
                    <p className="text-sm text-gray-600">CTO, InnovateCo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Resolve.AI</h3>
              <p className="text-sm text-blue-200">Empowering businesses with innovative digital solutions since 2023.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link className="text-sm hover:text-blue-300 transition-colors" href="#">
                  Home
                </Link>
                <Link className="text-sm hover:text-blue-300 transition-colors" href="#">
                  Features
                </Link>
                <Link className="text-sm hover:text-blue-300 transition-colors" href="#">
                  Pricing
                </Link>
                <Link className="text-sm hover:text-blue-300 transition-colors" href="#">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <form className="flex space-x-2">
                <Input className="bg-blue-800 border-blue-700 text-white placeholder-blue-400" placeholder="Enter your email" type="email" />
                <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-300">© 2023 Resolve.AI Inc. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link className="text-blue-300 hover:text-white transition-colors" href="#">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link className="text-blue-300 hover:text-white transition-colors" href="#">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </Link>
              <Link className="text-blue-300 hover:text-white transition-colors" href="#">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}