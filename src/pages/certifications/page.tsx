// Certifications page: displays all PDF certifications with PDF viewer functionality
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { useState } from "react"
import logoImg from '../../images/home/logo.jpeg';
import qrCodeImg from '../../images/home/qr-code.png';
import { Menu } from "lucide-react"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Linkedin, FileText, Download, X } from "lucide-react"

// Import all PDF files from certifications folder automatically
type CertificationPDFsType = Record<string, { default: string }>;

const certificationPDFModules: CertificationPDFsType = import.meta.glob('../../certifications/*.pdf', { eager: true });

const certificationPDFs: { src: string; name: string }[] = Object.entries(certificationPDFModules)
  .map(([path, mod]) => ({
    src: mod.default,
    name: path.split('/').pop()?.replace('.pdf', '') || 'Unknown Certificate'
  }))
  .filter(Boolean);

// Helper function to format certificate names
const formatCertificateName = (name: string) => {
  return name
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^\w/, c => c.toUpperCase())
    .trim();
};

export default function CertificationsPage() {
  const [showDonateModal, setShowDonateModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalPDF, setModalPDF] = useState<string | null>(null)
  const [modalPDFName, setModalPDFName] = useState<string>('')
  
  const openPDFModal = (pdfSrc: string, pdfName: string) => {
    setModalPDF(pdfSrc)
    setModalPDFName(pdfName)
  }

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
      
      {/* PDF Viewer Modal */}
      {modalPDF && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90" onClick={() => setModalPDF(null)}>
          <div className="relative w-full h-full max-w-6xl max-h-[95vh] flex flex-col bg-white rounded-lg m-4" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-lg">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{formatCertificateName(modalPDFName)}</h3>
              <div className="flex items-center gap-2">
                <a
                  href={modalPDF}
                  download={`${modalPDFName}.pdf`}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Download PDF"
                >
                  <Download className="w-5 h-5" />
                </a>
                <button
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  onClick={() => setModalPDF(null)}
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 min-h-0">
              <iframe
                src={modalPDF}
                className="w-full h-full border-0"
                title={`PDF Viewer - ${formatCertificateName(modalPDFName)}`}
              />
            </div>
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
      
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Certifications</h1>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              View our official certifications, registrations, and legal documents that validate our organization's legitimacy and commitment to transparency.
            </p>
            
            {certificationPDFs.length === 0 ? (
              <div className="text-center py-16">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No certifications available at the moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {certificationPDFs.map((pdf, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                    onClick={() => openPDFModal(pdf.src, pdf.name)}
                  >
                    {/* PDF Preview/Thumbnail */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center relative overflow-hidden">
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-xs text-red-600 font-medium px-2">PDF Certificate</div>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <div className="text-white text-center">
                          <FileText className="w-12 h-12 mx-auto mb-2" />
                          <div className="text-sm font-medium">Click to view</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* PDF Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                        {formatCertificateName(pdf.name)}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          PDF Document
                        </span>
                        <a
                          href={pdf.src}
                          download={`${pdf.name}.pdf`}
                          className="p-1 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                          title="Download PDF"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <footer className="bg-[#18162a] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="gap-12">
            {/* Other Links */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Other Links</h3>
              <div className="w-12 h-0.5 bg-white/30 mb-6"></div>              <div className="grid grid-cols-3 gap-x-6 gap-y-2 text-base">
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