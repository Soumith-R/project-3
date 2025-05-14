// Gallery page: displays all images in a responsive grid
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { useState } from "react"
import logoImg from '../../images/home/logo.jpeg';
import qrCodeImg from '../../images/home/qr-code.png';
import { Menu } from "lucide-react"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

// Import all images from gallery and home folders
import aboutUsImg from '../../images/gallery/about us 1.png';
import c8Img from '../../images/gallery/c8 2.png';
import cc1Img from '../../images/gallery/cc1 1.png';
import d2Img from '../../images/gallery/d2 1.png';
import getInTouchImg from '../../images/gallery/getintouchup 1.png';
import k1Img from '../../images/gallery/k1 1.png';
import k2Img from '../../images/gallery/k2 1.png';
import municipleWorkersImg from '../../images/gallery/municiple workers 1.png';
import whatWeDoUpImg from '../../images/gallery/what we doup 2.png';
import c4Img from '../../images/home/c4 1.png';
import c5Img from '../../images/home/c5 1.png';
import c7Img from '../../images/home/c7 1.png';
import c9Img from '../../images/home/c9 1.png';
import collImg from '../../images/home/coll 1.png';
import collage1Img from '../../images/home/collage1 1.png';
import communityEducationImg from '../../images/home/community education 1.png';
import domesticViolenceImg from '../../images/home/Domestic Violence 1.png';
import donate2Img from '../../images/home/donate2 1.png';
import emergencyResponseImg from '../../images/home/emergency respose 1.png';
import foodDistributionImg from '../../images/home/food distribution1 1.png';
import heroImg from '../../images/home/police food donation1 1.png';
import humanRightsImg from '../../images/home/human rights advocacy image 1.png';
import migrantsImg from '../../images/home/migrants1 1.png';
import rationDistributionImg from '../../images/home/ration distribution1 1.png';
import upscaleImg from '../../images/home/upscal.png';
import youthEmpowermentImg from '../../images/home/youth empowerment 1.png';

const galleryImages = [
  aboutUsImg, c8Img, cc1Img, d2Img, getInTouchImg, k1Img, k2Img, municipleWorkersImg, whatWeDoUpImg,
  c4Img, c5Img, c7Img, c9Img, collImg, collage1Img, communityEducationImg, domesticViolenceImg, donate2Img,
  emergencyResponseImg, foodDistributionImg, heroImg, humanRightsImg, migrantsImg, rationDistributionImg, upscaleImg, youthEmpowermentImg
];

export default function GalleryPage() {
  const [showDonateModal, setShowDonateModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
                <span className="ml-2 text-xl font-bold hidden md:block">IHRCDPA</span>
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
          <div className="fixed inset-0 z-50 bg-black/80 flex flex-col md:hidden" onClick={() => setMobileMenuOpen(false)}>
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
      <footer className="bg-[#1a1a2e] text-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Other Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about-us" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link></li>
                <li><Link to="/what-we-do" className="text-gray-300 hover:text-red-400 transition-colors">Our Services</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-red-400 transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start"><MapPin className="h-5 w-5 mr-2 mt-0.5 text-red-400" /><span>123 Main Street, City, Country</span></li>
                <li className="flex items-center"><Phone className="h-5 w-5 mr-2 text-red-400" /><span>+1 (123) 456-7890</span></li>
                <li className="flex items-center"><Mail className="h-5 w-5 mr-2 text-red-400" /><span>info@nonprofit.org</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors"><Facebook className="h-6 w-6" /></Link>
                <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors"><Twitter className="h-6 w-6" /></Link>
                <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors"><Instagram className="h-6 w-6" /></Link>
                <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors"><Youtube className="h-6 w-6" /></Link>
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
