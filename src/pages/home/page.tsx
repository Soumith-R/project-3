import { Link } from "react-router-dom"
import { PieChart } from "../../components/pie-chart"
import { Button } from "../../components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Menu } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export default function HomePage() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [showDonateModal, setShowDonateModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              src="src/images/home/qr-code.png"
              alt="Donate QR Code"
              className="w-48 h-48 mx-auto object-contain"
            />
            <p className="mt-4 text-center text-gray-600 text-sm">Scan this QR code with your payment app to donate.</p>
          </div>
        </div>
      )}

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
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => setShowDonateModal(true)}
              >
                Donate
              </Button>
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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>          <div className="relative h-[500px]">
            <img
              src="src\images\home\police food donation1 1.png"
              alt="Volunteers distributing aid"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Where Human Dignity Begins, Peace And Justice Follow
                </h1>
                <p className="text-white text-lg mb-6">Compassion. Dedication. Service.</p>
                <Button className="bg-red-600 hover:bg-red-700" onClick={() => setShowDonateModal(true)}>Donate Now</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                <p className="text-gray-700 mb-6">
                  International Society for Human Rights Protection (NONPROFIT) is a non-profit organization dedicated
                  to promoting and protecting human rights worldwide. We work tirelessly to address humanitarian crises
                  in conflict-affected regions, provide immediate assistance to vulnerable communities, and advocate for
                  lasting solutions to global human rights challenges.
                </p>
                <Link to="/about-us">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Read More
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative h-40 w-40">
                  <img alt="upscale" src="src\images\home\upscal.png" className="absolute inset-0 bg-gray-200 flex items-center justify-center text-5xl font-bold"/>
                </div>
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
                    imageSrc="src\\images\\home\\Domestic Violence 1.png"
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                  <ServiceCard
                    title="Human Rights Advocacy"
                    description="We advocate for policy changes, raise awareness about human rights violations, and work with governments to implement lasting solutions."
                    imageSrc="src\\images\\home\\human rights advocacy image 1.png"
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                  <ServiceCard
                    title="Emergency Relief & Crisis Management"
                    description="We respond rapidly to humanitarian crises with emergency aid, medical assistance, and long-term recovery support for affected communities."
                    imageSrc="src\\images\\home\\emergency respose 1.png"
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                  <ServiceCard
                    title="Youth Empowerment and Leadership development"
                    description="We empower youth through education, skills training, and leadership development programs to become advocates for change in their communities."
                    imageSrc="src\\images\\home\\youth empowerment 1.png"
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3" style={{ scrollSnapAlign: "start" }}>
                  <ServiceCard
                    title="Commnity Education and Awareness"
                    description="We conduct educational programs and awareness campaigns to inform communities about their rights and promote social justice."
                    imageSrc="src\\images\\home\\community education 1.png"
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

        {/* Donation Allocation Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How we spend your donations and where it goes</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="md:w-1/2 flex justify-center">
                <PieChart />
              </div>
              <div className="md:w-1/2">
                <ul className="space-y-4">
                  <DonationItem color="bg-blue-500" percentage="45%" label="Organizing Events" />
                  <DonationItem color="bg-green-500" percentage="30%" label="Skills Training" />
                  <DonationItem color="bg-yellow-500" percentage="10%" label="Helping People" />
                  <DonationItem color="bg-purple-500" percentage="10%" label="Human Saftey" />
                  <DonationItem color="bg-gray-500" percentage="5%" label="Feeding the Poor" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative bg-blue-900 py-16"> {/* Added bg-blue-900 and py-16 */}
          <div className="relative h-[500px]">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src="src\images\home\donate2 1.png"
              alt="Volunteers distributing aid"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center text-white">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl ml-auto text-right"> 
                  <h2 className="text-4xl md:text-5xl font-bold mb-6"> 
                    Be The Reason Someone Survives Today
                  </h2>
                  <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    Your donation can make a significant difference in someone's life. Join us in our mission to protect human
                    dignity and provide essential support to those who need it most.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              onClick={() => setShowDonateModal(true)}
            >
              Donate
            </Button>
          </div>
        </section>

        {/* Moments That Matter Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Moments That Matter</h2>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 max-w-3xl mx-auto p-4">
              <div className="aspect-w-1 aspect-h-1"> 
                <img
                  src="src\images\home\c4 1.png" 
                  alt="Collage image 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="aspect-w-1 aspect-h-1 row-start-2">
                <img
                  src="src\images\home\c9 1.png" 
                  alt="Collage image 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="aspect-w-1 aspect-h-1 row-start-3">
                <img
                  src="src\images\home\collage1 1.png" 
                  alt="Collage image 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="col-span-2 row-span-2 col-start-2 row-start-1 aspect-w-1 aspect-h-1">
                <img
                  src="src\images\home\coll 1.png"  
                  alt="Large collage image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="aspect-w-1 aspect-h-1 col-start-2 row-start-3">
                <img
                  src="src\images\home\c5 1.png" 
                  alt="Collage image 5"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 col-start-3 row-start-3">
                <img
                  src="src\images\home\c7 1.png" 
                  alt="Collage image 6"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Beacon of Hope Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Beacon of Hope</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <NewsCard
                title="Rice Distribution for Indigent Returning Home"
                description="We provided essential food supplies to families returning to their homes after displacement due to conflict."
                imageSrc="src\images\home\food distribution1 1.png"
              />
              <NewsCard
                title="Food Distribution Throughout COVID-19"
                description="During the pandemic, our teams have provided thousands of essential food packages to vulnerable communities."
                imageSrc="src\images\home\migrants1 1.png"
              />
              <NewsCard
                title="Water Distribution for the Underprivileged"
                description="Our clean water initiative has reached remote communities lacking access to safe drinking water."
                imageSrc="src\images\home\ration distribution1 1.png"
              />
              <NewsCard
                title="Lunch Provided to Police During Lockdown"
                description="We supported frontline workers with meals during the challenging lockdown period."
                imageSrc="src\images\home\police food donation1 1.png"
              />
            </div>
            <div className="text-center mt-8">
              <Link to="/gallery">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Read More
              </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Proud Sponsors & Partners</h2>
            <div className="gap-4 flex flex-wrap justify-center">
              {[1, 2, 3, 4, 5, 6].map((item) => (                <div key={item} className="aspect-square relative">
                  <img
                    src={`/placeholder.svg?height=10&width=10&text=Photo ${item}`}
                    alt={`Sponsor ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hope in Action Section */}
        <section className="py-16 bg-navy-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Hope in Action</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Every act of kindness is a beacon of hope in someone's darkness. Together, we can create a world where
              dignity and compassion prevail.
            </p>
            <Link to="/contact">
            <Button className="bg-red-600 hover:bg-red-700">Get Involved</Button>
            </Link>
          </div>
        </section>
      </main>

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

function NewsCard({
  title,
  description,
  imageSrc,
}: {
  title: string
  description: string
  imageSrc: string
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/3 relative h-48 md:h-auto">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="md:w-2/3">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to="/gallery">
        <Button variant="link" className="text-red-600 p-0 h-auto">
          Read More
        </Button>
        </Link>
      </div>
    </div>
  )
}

function DonationItem({
  color,
  percentage,
  label,
}: {
  color: string
  percentage: string
  label: string
}) {
  return (
    <div className="flex items-center">
      <div className={`w-4 h-4 rounded-full ${color} mr-3`}></div>
      <div className="w-16 font-bold">{percentage}</div>
      <div>{label}</div>
    </div>
  )
}
