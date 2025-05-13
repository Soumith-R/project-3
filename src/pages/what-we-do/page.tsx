import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { ServiceDetailCard } from "../../components/service-detail-card"

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative h-[400px]">
          <img
            src="/placeholder.svg?height=400&width=1200"
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
              imageSrc="/placeholder.svg?height=200&width=300"
            />
            <ServiceDetailCard
              title="Human Rights Advocacy"
              description="Our Human Rights Advocacy programs aim to shine a spotlight on injustice, amplify marginalized voices, and influence meaningful change through education, legal reform, and public campaigns."
              imageSrc="/placeholder.svg?height=200&width=300"
            />
            <ServiceDetailCard
              title="Emergency Relief & Crisis Response"
              description="Our Emergency Relief and Crisis Response teams are trained to act quickly in high-risk areas to help those most affected."
              imageSrc="/placeholder.svg?height=200&width=300"
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
      <section className="py-16 bg-navy-900 text-white text-center">
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

      {/* Social Media Links */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Connect With Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Link to="/social/facebook" className="bg-white p-2 rounded-full text-navy-900 hover:bg-gray-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </Link>
            </div>

            <div className="text-center">
              <Link to="/social/twitter" className="bg-white p-2 rounded-full text-navy-900 hover:bg-gray-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                </svg>
              </Link>
            </div>

            <div className="text-center">
              <Link to="/social/instagram" className="bg-white p-2 rounded-full text-navy-900 hover:bg-gray-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </Link>
            </div>

            <div className="text-center">
              <Link to="/social/youtube" className="bg-white p-2 rounded-full text-navy-900 hover:bg-gray-200">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Links Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Other Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/" className="hover:text-red-400">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" className="hover:text-red-400">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link to="/get-involved" className="hover:text-red-400">
                        Get involved
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/donate" className="hover:text-red-400">
                        Donate
                      </Link>
                    </li>
                    <li>
                      <Link to="/volunteer" className="hover:text-red-400">
                        Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="hover:text-red-400">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="bg-white rounded-full p-2 mr-4 text-navy-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Lorem Ipsum Is Simply Dummy</p>
                    <p>Text Of The Printing</p>
                    <p>Typesetting.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-white rounded-full p-2 mr-4 text-navy-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Phone 123-456-7890</p>
                    <p>Phone 123-456-7890</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-white rounded-full p-2 mr-4 text-navy-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>info@lorem.com</p>
                    <p>Fact That A</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <footer className="py-6 bg-navy-900 border-t border-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Copyright International Human Rights And Domestic Protection Organization | Passionately crafted by
              Solutions. All rights are reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/social/facebook" className="bg-white p-2 rounded-full text-navy-900 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </Link>
              <Link to="/social/twitter" className="bg-white p-2 rounded-full text-navy-900 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Link>
              <Link to="/social/instagram" className="bg-white p-2 rounded-full text-navy-900 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </Link>
              <Link to="/social/youtube" className="bg-white p-2 rounded-full text-navy-900 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

