import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { ServiceDetailCard } from "../../components/service-detail-card"
import { Menu } from "lucide-react"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen flex flex-col">
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
      <section className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative h-[400px]">
          <img
            src="src\images\what-we-do\what we doup 2.png"
            alt="Children in need"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">What We Do</h1>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-200 h-full w-full">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="Our mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-6">
                At the International Human Rights and Domestic Protection Organization (INHRPO), our mission is rooted
                in the belief that every human being deserves dignity, protection, and equal opportunity. We work
                tirelessly to safeguard the rights of the underprivileged and respond swiftly to crises affecting
                vulnerable populations.
              </p>
              <p className="text-gray-700 mb-6">
                During the COVID-19 pandemic, our team mobilized across Telangana to deliver food, medical supplies, and
                emotional support to thousands of individuals and families struggling to survive. Our services extended
                to frontline workers, migrant laborers, orphans, and the elderly – ensuring no one was left behind.
                Beyond immediate aid, we actively advocate for the rights of those facing domestic violence, poverty,
                and systemic injustice, connecting them to legal aid, social services, and safety resources. At every
                stage, our goal remains the same: to restore hope and protect humanity where it's most at risk.
              </p>
              <p className="text-gray-700 mb-6">
                Beyond emergency relief, INHRPO is deeply committed to building long-term, sustainable support systems
                that uplift communities from within. We believe that lasting change comes through engagement, not
                charity alone. That's why we partner with grassroots organizations, local authorities, and corporate
                sponsors to run welfare programs that address core issues like hunger, homelessness, child protection,
                and women's safety. Our volunteer network – made up of passionate individuals from all walks of life –
                plays a vital role in identifying community needs, organizing field activities, and delivering aid with
                compassion and integrity. Each initiative we undertake is guided by our principles of equality,
                transparency, and inclusivity, ensuring that every voice is heard and every person matters.
              </p>
              <p className="text-gray-700 mb-6">
                Education and awareness are equally critical to our mission. We conduct workshops, seminars, and
                community campaigns to educate people about their basic rights, domestic protection laws, and the
                channels available to seek justice. From offering legal literacy sessions for women in rural areas to
                engaging youth in civic education, our goal is to equip individuals with the knowledge and tools to
                advocate for themselves and others. In every sector, we blend emergency response with capacity building
                – not only helping people survive difficult times but empowering them to thrive in the future. At
                INHRPO, we don't just respond to crises – we work to prevent them by addressing their root causes, one
                family, one neighborhood, and one life at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceDetailCard
              title="Domestic Protection Services"
              description="Our Domestic Protection Services are focused on safeguarding individuals—especially women, children, and marginalized groups—who are facing domestic abuse, violence, or threats to personal safety."
              imageSrc="src\images\home\Domestic Violence 1.png"
            />
            <ServiceDetailCard
              title="Human Rights Advocacy"
              description="Our Human Rights Advocacy programs aim to shine a spotlight on injustice, amplify marginalized voices, and influence meaningful change through education, legal reform, and public campaigns."
              imageSrc="src\images\home\human rights advocacy image 1.png"
            />
            <ServiceDetailCard
              title="Emergency Relief & Crisis Response"
              description="Our Emergency Relief and Crisis Response teams are trained to act quickly in high-risk areas to help those most affected."
              imageSrc="src\images\home\emergency respose 1.png"
            />
          </div>
        </div>
      </section>

      {/* Pagination Dots */}
      <div className="flex justify-center py-8 bg-gray-100">
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-navy-900"></div>
          <div className="h-2 w-2 rounded-full bg-gray-400"></div>
          <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Driven by Compassion, Guided by Purpose</h2>
          <p className="mb-8">
            We don't just serve – we stand with those in need.
            <br />
            Through every action, we restore dignity, hope, and human rights.
          </p>
          <Button className="bg-red-600 hover:bg-red-700">Join Us</Button>
        </div>
      </section>

      {/* Copyright */}
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

