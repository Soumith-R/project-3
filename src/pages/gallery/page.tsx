// Gallery page: displays all images in a responsive grid
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { useState } from "react"
import logoImg from '../../images/home/logo.jpeg';
import qrCodeImg from '../../images/home/qr-code.png';
import { Menu } from "lucide-react"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Linkedin, ZoomIn } from "lucide-react"

// Import all images from gallery folder automatically
// type GalleryImage = { src: string; name: string };

// Use import.meta.glob to import all images from gallery folder
type GalleryImagesType = Record<string, { default: string }>;

const galleryImageModules: GalleryImagesType = import.meta.glob('../../images/gallery1/*.{png,jpg,jpeg,gif,webp}', { eager: true });

const galleryImages: string[] = Object.values(galleryImageModules)
  .map((mod) => mod.default)
  .filter(Boolean);

export default function GalleryPage() {
  const [showDonateModal, setShowDonateModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalImg, setModalImg] = useState<string | null>(null)
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
      {/* Image Zoom Modal */}
      {modalImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setModalImg(null)}>
          <div className="relative max-w-3xl w-full max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-3xl z-10 hover:text-red-500" onClick={() => setModalImg(null)} aria-label="Close">×</button>
            <img src={modalImg} alt="Zoomed" className="object-contain max-h-[80vh] max-w-full rounded-lg shadow-2xl bg-white" />
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
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Gallery</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
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
