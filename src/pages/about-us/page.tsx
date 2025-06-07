import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "../../components/ui/button"
import { ContactForm } from "../../components/contact-form"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Youtube, Menu, Linkedin } from "lucide-react"
import { useState } from "react"
import logoImg from '../../images/home/logo.jpeg'
import qrCodeImg from '../../images/home/qr-code.png'
import pres from '../../images/about/president.jpg'
import ch from '../../images/about/chairman.jpg'

export default function AboutUsPage() {
  const [showDonateModal, setShowDonateModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[#1B1926]">
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
        <div className="container mx-auto px-2 sm:px-4 py-2">
            <div className="hidden md:flex items-center justify-between w-full fixed top-0 left-0 right-0 z-50 bg-[#0E0E30] p-1 text-white m-0">
            <div className="flex items-center space-x-4">
              <Mail />
              <p>info@loremipsu.com</p>
              <Phone />
              <p>123-456-7890</p>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
              <Youtube />
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logoImg} alt="Logo" className="w-16 h-16 rounded-none object-cover" />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="font-medium text-gray-900 hover:text-red-600">Home</Link>
              <Link to="/about-us" className="font-medium text-gray-900 hover:text-red-600">About Us</Link>
              <Link to="/get-involved" className="font-medium text-gray-900 hover:text-red-600">Get Involved</Link>
              <Link to="/gallery" className="font-medium text-gray-900 hover:text-red-600">Gallery</Link>
              <Link to="/contact" className="font-medium text-gray-900 hover:text-red-600">Contact</Link>
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
          <div className="fixed inset-0 z-50 bg-black/90 flex flex-col md:hidden transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
            <div className="bg-white shadow-lg p-6 w-full max-w-xs ml-auto h-full relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl" onClick={() => setMobileMenuOpen(false)} aria-label="Close">×</button>
              <nav className="flex flex-col space-y-6 mt-8">
                <Link to="/" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/about-us" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link to="/get-involved" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Get Involved</Link>
                <Link to="/gallery" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                <Link to="/contact" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <Button className="bg-red-600 hover:bg-red-700 w-full" onClick={() => { setShowDonateModal(true); setMobileMenuOpen(false); }}>Donate</Button>
              </nav>
            </div>
          </div>
        )}
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
                The International Human Rights and Domestic Protection Organization (IHRDPO) is a non-profit organization committed to defending human dignity, protecting the vulnerable, and promoting justice for all. Founded during one of humanity’s most challenging times, the COVID-19 pandemic, we witnessed firsthand the critical gaps in access to food, healthcare, and human rights protection — especially for the marginalized.
              </p>
              <p className="text-white mb-6">
                Operating from Telangana, India, and expanding across various districts, we provide immediate aid, long-term support, and a voice to those unheard — be it daily wage workers, orphaned children, migrant laborers, or survivors of domestic violence. Our strength lies in our unwavering compassion, our dedicated field volunteers, and the generous support of people like you who believe in a fairer, kinder world.
                Together, we build bridges where walls once stood. Together, we protect humanity.
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
          <div className="max-w-md flex flex-row justify-between mx-auto py-26">
            <div>
            <h2 className="text-white text-sm uppercase font-bold mb-2">LOREM</h2>
            <h3 className="text-white text-3xl font-bold mb-4">Lorem Ipsum</h3>
            <p className="text-gray-300 mb-6">
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem
              Ipsum has been the industry's standard
              dummy text ever since the 1500s.
            </p>
            </div>
            <Button className="rounded-full text-gray-800 hover:bg-black">
              <svg width="79" height="77" viewBox="0 0 79 77" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M75.796 38.8069C75.7981 45.8194 73.6784 52.675 69.7048 58.5067C65.7313 64.3383 60.0825 68.884 53.4728 71.569C46.8632 74.2539 39.5895 74.9575 32.5719 73.5906C25.5542 72.2238 19.1078 68.848 14.0478 63.8901C8.98781 58.9322 5.54162 52.615 4.14503 45.7374C2.74844 38.8598 3.46426 31.7306 6.20184 25.2517C8.93942 18.7728 13.5757 13.2351 19.5247 9.33895C25.4736 5.44281 32.4678 3.36328 39.6227 3.36328C49.2147 3.36328 58.4139 7.09715 65.1975 13.7438C71.981 20.3905 75.7933 29.4058 75.796 38.8069Z" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
              <path d="M33.9648 31.2461L46.7391 38.1412L33.9648 45.5303V31.2461Z" fill="white"/>
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 py-2 px-1">
            <div className="flex gap-8 min-w-[600px] max-w-full justify-center" style={{width: '100%'}}>
              <div className="min-w-[180px] flex-shrink-0 flex flex-col items-center">
                <img src={ch} alt="Chairman" className="w-40 h-40 object-top object-cover rounded-none mx-auto" />
                <div className="mt-3 text-center font-semibold text-lg">Dr. Mohammed Khaja Khan</div>
                <div className="text-sm text-gray-300">Chairman</div>
              </div>
              <div className="min-w-[180px] flex-shrink-0 flex flex-col items-center">
                <img src={pres} alt="President" className="w-40 h-40 object-top object-cover rounded-none mx-auto" />
                <div className="mt-3 text-center font-semibold text-lg">Mohammed Ishrath Jahan</div>
                <div className="text-sm text-gray-300">President</div>
              </div>
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
            </div>            <div className="md:w-1/2">
              <ContactForm source="about" />
            </div>
          </div>
        </div>
      </section>

      {/* Rooted in Humanity */}
      <section className="py-16 bg-[#1B1926] text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Rooted in Humanity, Driven by Purpose</h2>
          <p className="mb-8">
            We are more than an organization – we are a movement for dignity and justice. Every life we touch
            strengthens the fabric of compassion we're weaving together.
          </p>
          <Link to="/contact">
            <Button className="bg-red-600 hover:bg-red-700">Join Us</Button>
          </Link>
        </div>
      </section>      <footer className="bg-[#0E0E30] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">            {/* Other Links */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Other Links</h3>
              <div className="w-12 h-0.5 bg-white/30 mb-6"></div>
              <div className="grid grid-cols-3 gap-x-6 gap-y-2 text-base">
                <div className="flex flex-col gap-2">
                  <Link to="/" className="hover:underline">Home</Link>
                  <Link to="/about-us" className="hover:underline">About us</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Link to="/get-involved" className="hover:underline">Get involved</Link>
                  <Link to="/" className="hover:underline">Donate</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Link to="/certifications" className="hover:underline">Certifications</Link>
                  <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
              </div>
            </div>
            
            {/* Contact Us */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
              <div className="w-12 h-0.5 bg-white/30 mb-6"></div>
              <ul className="space-y-6 text-base">
                <li className="flex items-start gap-4">
                  <span className="mt-1">
                    <MapPin className="h-6 w-6 text-white" />
                  </span>
                  <span>
                    Lorem Ipsum Is Simply Dummy<br />
                    Text Of The Printing<br />
                    Typesetting.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1">
                    <Phone className="h-6 w-6 text-white" />
                  </span>
                  <span>
                    Phone 123-456-7890<br />
                    Phone 123-456-7890
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1">
                    <Mail className="h-6 w-6 text-white" />
                  </span>
                  <span>
                    info@lorem.com<br />
                    Fact That A
                  </span>
                </li>
              </ul>
            </div>
            
            {/* About Organization */}
            <div>
              <h3 className="text-2xl font-bold mb-2">About IHRDPO</h3>
              <div className="w-12 h-0.5 bg-white/30 mb-6"></div>
              <p className="text-base text-gray-300 mb-6">
                International Human Rights and Domestic Protection Organization is committed to defending human dignity and promoting justice for all.
              </p>
              <div className="flex gap-4">
                <a href="#" className="border border-white/40 rounded-full p-2 hover:bg-white/10 transition">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="border border-white/40 rounded-full p-2 hover:bg-white/10 transition">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="border border-white/40 rounded-full p-2 hover:bg-white/10 transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="border border-white/40 rounded-full p-2 hover:bg-white/10 transition">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>          {/* Divider */}
          <div className="border-t border-white/20 mt-12 mb-4"></div>
          {/* Bottom copyright */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-white/80">
              2025 Copyright <span className="font-bold text-white">International Human Rights And Domestic Protection Organization </span> 
              | <br/>
              Passionately crafted by <span className="font-bold text-white">Solutions</span>. All rights are reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
