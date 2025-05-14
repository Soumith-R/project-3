// page.tsx
import { Button } from "../../components/ui/button"
import { HopeCard } from "../../components/hope-card"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import logoImg from '../../images/home/logo.jpeg';
import aboutUsImg from '../../images/gallery/about us 1.png';
import cc1Img from '../../images/gallery/cc1 1.png';
import c8Img from '../../images/gallery/c8 2.png';
import k1Img from '../../images/gallery/k1 1.png';
import d2Img from '../../images/gallery/d2 1.png';
import getInTouchImg from '../../images/gallery/getintouchup 1.png';
import qrCodeImg from '../../images/home/qr-code.png';

export default function BeaconOfHopePage() {
  const hopeGalleryRef = useRef<HTMLDivElement>(null)
  const [hopeScrollPercent, setHopeScrollPercent] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showDonateModal, setShowDonateModal] = useState(false)

  useEffect(() => {
    const gallery = hopeGalleryRef.current
    if (!gallery) return

    const handleScroll = () => {
      const maxScroll = gallery.scrollWidth - gallery.clientWidth
      const percent = maxScroll > 0 ? (gallery.scrollLeft / maxScroll) * 100 : 0
      setHopeScrollPercent(percent)
    }

    gallery.addEventListener("scroll", handleScroll)
    return () => gallery.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
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
              <Link to="/what-we-do" className="font-medium text-gray-900 hover:text-red-600">Get Involved</Link>
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
                <Link to="/what-we-do" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Get Involved</Link>
                <Link to="/gallery" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                <Link to="/contact" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <Button className="bg-red-600 hover:bg-red-700 w-full" onClick={() => { setShowDonateModal(true); setMobileMenuOpen(false); }}>Donate</Button>
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
            src={aboutUsImg}
            alt="Children in need"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">HOPE</h1>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-white p-2 mb-4">
                <img
                  src={cc1Img}
                  alt="Our mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="mb-4">
                In the darkest of times, even a single act of kindness can ignite a flame of hope. The International
                Human Rights and Domestic Protection Organization (INHRPO) stands as a beacon of light in communities
                facing adversity. Our mission is simple yet profound: to bring protection, compassion, and unwavering
                support when it is needed most.
              </p>
              <p className="mb-4">
                When the COVID-19 pandemic ravaged communities, threatening livelihoods, safety, and stability, we rose
                to meet the moment. We extended helping hands to the homeless, the hungry, frontline workers, orphans,
                and vulnerable families. Whether it was a warm meal, a life-saving oxygen cylinder, or essential
                supplies during lockdowns – our team showed up with empathy and resolve. Our mission transcends
                immediate aid; it is about fostering dignity, inspiring resilience, and reminding people they are not
                alone.
              </p>
              <p className="mb-4">
                Our beacon shines not only in crises but in everyday struggles – advocating for human rights, offering
                legal aid, protecting women and children from abuse, and empowering underprivileged voices. Through our
                dedicated volunteers, generous donors, and compassionate partners, we've created a network of support
                that grows stronger and deeper. We believe hope is contagious. With every life uplifted and every hand
                held, our light spreads farther and brighter. Together, we can ensure no one is left in the shadows.
              </p>
              <p className="mb-4">
                In the darkest of times, even a single act of kindness can ignite a flame of hope. The International
                Human Rights and Domestic Protection Organization (INHRPO) stands as a beacon of light in communities
                facing adversity. Our mission is simple yet profound: to bring protection, compassion, and unwavering
                support when it is needed most.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, quas, adipisci, nihil ullam minus facilis commodi laborum sint accusantium et assumenda magni ex. Ipsum accusantium, similique necessitatibus id dolorem quo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In Service of Humanity */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">In Service of Humanity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center"> 
            <div className="flex flex-col gap-4"> 
              <div className="aspect-square relative">
                <img
                  src={k1Img} 
                  alt="Gallery image 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Image 3 (Bottom-Left) */}
              <div className="aspect-square relative">
                <img
                  src={c8Img}
                  alt="Gallery image 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="aspect-square relative w-full h-full"> 
              <img
                src={cc1Img} 
                alt="Gallery image 2 spanning"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hope Needs Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Hope Needs Action</h2>
          <div>
            <div
              ref={hopeGalleryRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollSnapType: "x mandatory",
              }}
            >
              {/* Each HopeCard in a flex-shrink-0 container */}
              <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                <HopeCard
                  title="Food Distribution Throughout COVID-19"
                  description="During the severe waves of the COVID-19 pandemic, countless families across Telangana faced food insecurity like never before. INHRPO launched an emergency food distribution program that has continuously throughout the lockdown period."
                  imageSrc={getInTouchImg}
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                <HopeCard
                  title="Blanket Distribution To The Homeless"
                  description="During the harsh nights of the winter season, Telangana's homeless population faced brutal conditions with no access to shelter, warmth, or food. Our volunteers distributed blankets across urban areas, covering railway stations, footpaths, under-bridges, and roadside camps."
                  imageSrc={d2Img}
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                <HopeCard
                  title="Ration Distribution For The Underprivileged"
                  description="The pandemic lockdown left many vulnerable families without income, food, or security. Recognizing the severity of the situation, INHRPO organized systematic ration distribution to support the most vulnerable and migrant communities."
                  imageSrc={cc1Img}
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                <HopeCard
                  title="Food Distribution Throughout COVID-19"
                  description="During the severe waves of the COVID-19 pandemic, countless families across Telangana faced food insecurity like never before. INHRPO launched an emergency food distribution program that has continuously throughout the lockdown period."
                  imageSrc={getInTouchImg}
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                <HopeCard
                  title="Lunch Provided to Police during COVID-19"
                  description="During the COVID-19 pandemic, INHRPO provided lunch to police personnel on duty, ensuring they had nutritious meals while serving the community."
                  imageSrc={d2Img}
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                <HopeCard
                  title="Bus Arrangement for Migrant Workers"
                  description="During the COVID-19 pandemic, INHRPO arranged buses for migrant workers stranded in cities, ensuring they could return home safely."
                  imageSrc={cc1Img}
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                <HopeCard
                  title="Food and Ration Donation for Orphans"
                  description="INHRPO organized food and ration donations for orphanages, ensuring that vulnerable children received essential supplies during the pandemic."
                  imageSrc={getInTouchImg}
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                <HopeCard
                  title="Oxygen Cylinder Donation"
                  description="During the COVID-19 pandemic, INHRPO donated oxygen cylinders to hospitals and families in need, providing critical support during the health crisis."
                  imageSrc={cc1Img}
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                <HopeCard
                  title="Fruits and Ration Distributed to Municipal Workers"
                  description="During the COVID-19 pandemic, INHRPO distributed fruits and ration to municipal workers, recognizing their essential role in keeping communities safe and clean."
                  imageSrc={cc1Img}
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                <HopeCard
                  title="Protecting Lives with masks and PPE kits"
                  description="During the COVID-19 pandemic, INHRPO distributed masks and PPE kits to frontline workers, ensuring their safety while serving the community."
                  imageSrc={cc1Img}
                />
              </div>
            </div>
            {/* Stylish scrollbar below */}
            <div className="relative mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-red-500 rounded-full transition-all"
                style={{ width: `${hopeScrollPercent}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lighting Lives */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Lighting Lives in the Darkest Times</h2>
          <p className="mb-8">
            In every crisis, we choose compassion over fear.
            <br />
            With every life we touch, we shine a light of hope that never fades.
          </p>
          <Link to="/contact">
            <Button className="bg-red-600 hover:bg-red-700">Join Us</Button>
          </Link>
        </div>
      </section>

      <footer className="bg-[#18162a] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="gap-12">
            {/* Other Links */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Other Links</h3>
              <div className="w-12 h-0.5 bg-white/30 mb-6"></div>
              <div className="flex flex-wrap gap-x-12 gap-y-2 text-base">
                <div className="flex flex-col gap-2">
                  <Link to="/" className="hover:underline">Home</Link>
                  <Link to="/about-us" className="hover:underline">About us</Link>
                  <Link to="/what-we-do" className="hover:underline">Get involved</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Link to="/" className="hover:underline">Donate</Link>
                  <Link to="/contact" className="hover:underline">Volunteer</Link>
                  <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
              </div>
            </div>
            {/* Contact Us */}
            <div>
              <h3 className="text-2xl font-bold mb-2 py-4">Contact Us</h3>
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
          </div>
          {/* Divider */}
          <div className="border-t border-white/20 mt-12 mb-4"></div>
          {/* Bottom copyright and social */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-white/80">
              2025 Copyright <span className="font-bold text-white">International Human Rights And Domestic Protection Organization </span> 
              | <br/>
              Passionately crafted by <span className="font-bold text-white">Solutions</span>. All rights are reserved.
            </p>
            <div className="flex gap-4 mt-2 md:mt-0">
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
        </div>
      </footer>
    </div>
  )
}