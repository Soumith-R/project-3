import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "../../components/ui/button"
import { ContactForm } from "../../components/contact-form"
import { TeamMember } from "../../components/team-member"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Youtube, Menu } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-900">
      <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-white/30 shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src="src/images/home/logo.jpeg" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
                <span className="ml-2 text-xl font-bold hidden md:block">IHRCDPA</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="font-medium text-gray-900 hover:text-red-600">
                Home
              </Link>
              <Link to="/about-us" className="font-medium text-gray-900 hover:text-red-600">
                About Us
              </Link>
              <Link to="/what-we-do" className="font-medium text-gray-900 hover:text-red-600">
                Get Involved
              </Link>
              <Link to="/gallery" className="font-medium text-gray-900 hover:text-red-600">
                Gallery
              </Link>
              <Link to="/contact" className="font-medium text-gray-900 hover:text-red-600">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="bg-red-600 hover:bg-red-700">Donate</Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="bg-gray-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white">About us</h1>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-white mb-6">
                The International Human Rights and Domestic Protection Organization (INHRPO) is a non-profit
                organization committed to defending human dignity, promoting the vulnerable, and improving justice for
                all.
              </p>
              <p className="text-white mb-6">
                Throughout some of humanity's most challenging times, the COVID-19 pandemic, we witnessed firsthand the
                critical gaps in access to food, healthcare, and human rights protection – especially for the
                marginalized.
              </p>
              <p className="text-white mb-6">
                Operating from Telangana, India, and expanding across various districts, we provide immediate relief
                during crises, and a voice to those without one. We offer legal assistance, vocational training, and a
                network of dedicated volunteers.
              </p>
              <p className="text-white mb-6">
                Thanks to our unwavering supporters, our dedicated field volunteers, and the generous support of people
                like you who believe in a fairer kinder world. Together, we build bridges where walls once stood.
                Together, we protect humanity.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gray-200 h-full w-full">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="About Us"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-md">
            <h2 className="text-white text-sm uppercase font-bold mb-2">LOREM</h2>
            <h3 className="text-white text-3xl font-bold mb-4">Lorem Ipsum</h3>
            <p className="text-gray-300 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <Button className="rounded-full bg-white text-gray-800 hover:bg-gray-200">
              <span className="sr-only">Arrow</span>
              <span className="flex items-center justify-center h-10 w-10">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember name="Lorem Ipsum" role="Lorem" imageSrc="/placeholder.svg?height=300&width=300" />
            <TeamMember name="Lorem Ipsum" role="Lorem" imageSrc="/placeholder.svg?height=300&width=300" />
            <TeamMember name="Lorem Ipsum" role="Lorem" imageSrc="/placeholder.svg?height=300&width=300" />
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <div className="h-2 w-2 rounded-full bg-gray-500"></div>
              <div className="h-2 w-2 rounded-full bg-gray-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Voice Matters */}
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-white text-sm uppercase font-bold mb-2">INHRCDPO</h2>
              <h3 className="text-white text-3xl font-bold mb-4">Your Voice Matters – Let's Build Hope Together.</h3>
              <p className="text-gray-300 mb-8">
                Every message brings us closer to a world where every right is respected and every life is valued.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-navy-900 p-3 mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Reach Us</h4>
                    <p className="text-gray-300">
                      Lorem Ipsum is Simply Dummy Text Of The Printing Typesetting, Manage 123/A
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-navy-900 p-3 mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Contact Us</h4>
                    <p className="text-gray-300">123-456-7890</p>
                    <p className="text-gray-300">123-456-7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-navy-900 p-3 mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Write to Us</h4>
                    <p className="text-gray-300">info@inhrpo.com</p>
                    <p className="text-gray-300">help@inhrpo.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Rooted in Humanity */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Rooted in Humanity, Driven by Purpose</h2>
          <p className="mb-8">
            We are more than an organization – we are a movement for dignity and justice. Every life we touch
            strengthens the fabric of compassion we're weaving together.
          </p>
          <Button className="bg-red-600 hover:bg-red-700">Join Us</Button>
        </div>
      </section>
      <footer className="bg-[#1a1a2e] text-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Other Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about-us" className="text-gray-300 hover:text-red-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/what-we-do" className="text-gray-300 hover:text-red-400 transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-gray-300 hover:text-red-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-red-400" />
                  <span>123 Main Street, City, Country</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-red-400" />
                  <span>+1 (123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-red-400" />
                  <span>info@nonprofit.org</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>© 2023 International Society for Human Rights Protection. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
