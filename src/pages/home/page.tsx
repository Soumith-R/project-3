import { Link } from "react-router-dom"
import { PieChart } from "../../components/pie-chart"
import { Button } from "../../components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Menu } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">              <Link to="/" className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl">
                  N
                </div>
                <span className="ml-2 text-xl font-bold hidden md:block">NONPROFIT</span>
              </Link>
            </div>            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="font-medium text-gray-900 hover:text-red-600">
                Home
              </Link>
              <Link to="/about-us" className="font-medium text-gray-900 hover:text-red-600">
                About Us
              </Link>
              <Link to="/what-we-do" className="font-medium text-gray-900 hover:text-red-600">
                Our Services
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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>          <div className="relative h-[500px]">
            <img
              src="/placeholder.svg?height=500&width=1200"
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
                <Button className="bg-red-600 hover:bg-red-700">Donate Now</Button>
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
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  Read More
                </Button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative h-40 w-40">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-5xl font-bold">
                    N
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                title="Domestic Protection Services"
                description="We provide essential services to vulnerable communities, including shelter, food, healthcare, and education support for those in need."
                imageSrc="/placeholder.svg?height=200&width=300"
              />
              <ServiceCard
                title="Human Rights Advocacy"
                description="We advocate for policy changes, raise awareness about human rights violations, and work with governments to implement lasting solutions."
                imageSrc="/placeholder.svg?height=200&width=300"
              />
              <ServiceCard
                title="Emergency Relief & Crisis Management"
                description="We respond rapidly to humanitarian crises with emergency aid, medical assistance, and long-term recovery support for affected communities."
                imageSrc="/placeholder.svg?height=200&width=300"
              />
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
                  <DonationItem color="bg-blue-500" percentage="70%" label="Emergency Relief" />
                  <DonationItem color="bg-green-500" percentage="15%" label="Program Funding" />
                  <DonationItem color="bg-yellow-500" percentage="10%" label="Administrative Costs" />
                  <DonationItem color="bg-purple-500" percentage="5%" label="Fundraising Overhead" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-navy-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Be The Reason Someone Survives Today</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Your donation can make a significant difference in someone's life. Join us in our mission to protect human
              dignity and provide essential support to those who need it most.
            </p>
            <Button className="bg-red-600 hover:bg-red-700">Donate</Button>
          </div>
        </section>

        {/* Moments That Matter Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Moments That Matter</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (                <div key={item} className="aspect-square relative">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=Photo ${item}`}
                    alt={`Moment ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
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
                imageSrc="/placeholder.svg?height=200&width=300"
              />
              <NewsCard
                title="Food Distribution Throughout COVID-19"
                description="During the pandemic, our teams have provided thousands of essential food packages to vulnerable communities."
                imageSrc="/placeholder.svg?height=200&width=300"
              />
              <NewsCard
                title="Water Distribution for the Underprivileged"
                description="Our clean water initiative has reached remote communities lacking access to safe drinking water."
                imageSrc="/placeholder.svg?height=200&width=300"
              />
              <NewsCard
                title="Lunch Provided to Police During Lockdown"
                description="We supported frontline workers with meals during the challenging lockdown period."
                imageSrc="/placeholder.svg?height=200&width=300"
              />
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Read More
              </Button>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Proud Sponsors & Partners</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3, 4, 5, 6, 7].map((sponsor) => (
                <div key={sponsor} className="w-24 h-24 bg-navy-900"></div>
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
            <Button className="bg-red-600 hover:bg-red-700">Get Involved</Button>
          </div>
        </section>
      </main>

      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Other Links</h3>
              <ul className="space-y-2">
                <li>                  <Link to="/about-us" className="hover:text-red-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/what-we-do" className="hover:text-red-400">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-red-400">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-red-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                  <span>123 Main Street, City, Country</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@nonprofit.org</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">                <Link to="#" className="hover:text-red-400">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link to="#" className="hover:text-red-400">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link to="#" className="hover:text-red-400">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link to="#" className="hover:text-red-400">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
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
        <Button variant="link" className="text-red-600 p-0 h-auto">
          Learn More
        </Button>
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
        <Button variant="link" className="text-red-600 p-0 h-auto">
          Read More
        </Button>
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
