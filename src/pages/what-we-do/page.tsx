import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Menu, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useState } from "react"
import { useEffect, useRef } from "react"
import logoImg from '../../images/home/logo.jpeg';
import whatWeDoImg from '../../images/what-we-do/what we doup 2.png';
import domesticViolenceImg from '../../images/home/Domestic Violence 1.png';
import humanRightsImg from '../../images/home/human rights advocacy image 1.png';
import emergencyResponseImg from '../../images/home/emergency respose 1.png';
import qrCodeImg from '../../images/home/qr-code.png';
import communityEducationImg from '../../images/home/community education 1.png';
import youthEmpowermentImg from '../../images/home/youth empowerment 1.png';
import upscaleImg from '../../images/home/upscal.png';


// ServiceCard component
function ServiceCard({
  title,
  description,
  imageSrc,
}: {
  title: string
  description: string
  imageSrc: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to="/what-we-do">
          <Button variant="link" className="text-red-600 p-0 h-auto">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default function WhatWeDoPage() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [showDonateModal, setShowDonateModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)
  useEffect(() => {
      const gallery = galleryRef.current
      if (!gallery) return
  
      const handleScroll = () => {
        const maxScroll = gallery.scrollWidth - gallery.clientWidth
        const percent = maxScroll > 0 ? (gallery.scrollLeft / maxScroll) * 100 : 0
        setScrollPercent(percent)
      }
  
      gallery.addEventListener("scroll", handleScroll)
      return () => gallery.removeEventListener("scroll", handleScroll)
    }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Donate QR Modal */}
      {showDonateModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setShowDonateModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-8 relative max-w-xs w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
              onClick={() => setShowDonateModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Scan to Donate</h2>
            <img
              src={qrCodeImg}
              alt="Donate QR Code"
              className="w-48 h-48 mx-auto object-contain"
            />
            <p className="mt-4 text-center text-gray-600 text-sm">Scan this QR code with your payment app to donate.</p>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white/80 border-b border-white/30 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
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
              <Button className="bg-red-600 hover:bg-red-700" onClick={() => setShowDonateModal(true)}>Donate</Button>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 flex flex-col md:hidden" onClick={() => setMobileMenuOpen(false)}>
            <div className="bg-white shadow-lg p-6 w-full max-w-xs ml-auto h-full relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl" onClick={() => setMobileMenuOpen(false)} aria-label="Close">×</button>
              <nav className="flex flex-col space-y-6 mt-8">
                <Link to="/" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/about-us" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
                <Link to="/what-we-do" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                  Get Involved
                </Link>
                <Link to="/gallery" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                  Gallery
                </Link>
                <Link to="/contact" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
                <Button className="bg-red-600 hover:bg-red-700 w-full" onClick={() => { setShowDonateModal(true); setMobileMenuOpen(false); }}>
                  Donate
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative h-[400px]">
          <img
            src={whatWeDoImg}
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

        {/* What We Do Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>
            <div>
              <div
                ref={galleryRef}
                className="flex gap-8 overflow-x-auto scrollbar-hide"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollSnapType: "x mandatory",
                }}
              >
                <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                  <ServiceCard
                    title="Domestic Protection Services"
                    description="We provide essential services to vulnerable communities, including shelter, food, healthcare, and education support for those in need."
                    imageSrc={domesticViolenceImg}
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                  <ServiceCard
                    title="Human Rights Advocacy"
                    description="We advocate for policy changes, raise awareness about human rights violations, and work with governments to implement lasting solutions."
                    imageSrc={humanRightsImg}
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                  <ServiceCard
                    title="Emergency Relief & Crisis Management"
                    description="We respond rapidly to humanitarian crises with emergency aid, medical assistance, and long-term recovery support for affected communities."
                    imageSrc={emergencyResponseImg}
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                  <ServiceCard
                    title="Youth Empowerment and Leadership development"
                    description="We empower youth through education, skills training, and leadership development programs to become advocates for change in their communities."
                    imageSrc={youthEmpowermentImg}
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                  <ServiceCard
                    title="Commnity Education and Awareness"
                    description="We conduct educational programs and awareness campaigns to inform communities about their rights and promote social justice."
                    imageSrc={communityEducationImg}
                  />
                </div>
              </div>
              {/* Stylish scrollbar below */}
              <div className="relative mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-red-500 rounded-full transition-all"
                  style={{ width: `${scrollPercent}%` }}
                />
              </div>
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
          <Link to="/contact">
            <Button className="bg-red-600 hover:bg-red-700">Join Us</Button>
          </Link>
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

