import { Button } from "../../components/ui/button"
import { HopeCard } from "../../components/hope-card"

export default function BeaconOfHopePage() {
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
          <h1 className="text-5xl font-bold text-white">HOPE</h1>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-white p-2 mb-4">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Our mission"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-2">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Our work"
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
            </div>
          </div>
        </div>
      </section>

      {/* In Service of Humanity */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">In Service of Humanity</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square relative">
                <img
                  src={`/placeholder.svg?height=200&width=200&text=Service ${item}`}
                  alt={`Service image ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hope Needs Action */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Hope Needs Action</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <HopeCard
              title="Food Distribution Throughout COVID-19"
              description="During the severe waves of the COVID-19 pandemic, countless families across Telangana faced food insecurity like never before. INHRPO launched an emergency food distribution program that has continuously throughout the lockdown period."
              imageSrc="/placeholder.svg?height=200&width=300"
            />
            <HopeCard
              title="Blanket Distribution To The Homeless"
              description="During the harsh nights of the winter season, Telangana's homeless population faced brutal conditions with no access to shelter, warmth, or food. Our volunteers distributed blankets across urban areas, covering railway stations, footpaths, under-bridges, and roadside camps."
              imageSrc="/placeholder.svg?height=200&width=300"
            />
            <HopeCard
              title="Ration Distribution For The Underprivileged"
              description="The pandemic lockdown left many vulnerable families without income, food, or security. Recognizing the severity of the situation, INHRPO organized systematic ration distribution to support the most vulnerable and migrant communities."
              imageSrc="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Lighting Lives */}
      <section className="py-16 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Lighting Lives in the Darkest Times</h2>
          <p className="mb-8">
            In every crisis, we choose compassion over fear.
            <br />
            With every life we touch, we shine a light of hope that never fades.
          </p>
          <Button className="bg-red-600 hover:bg-red-700">Join Us</Button>
        </div>
      </section>
    </div>
  )
}
