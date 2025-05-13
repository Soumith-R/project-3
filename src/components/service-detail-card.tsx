import { Button } from "../components/ui/button"

interface ServiceDetailCardProps {
  title: string
  description: string
  imageSrc: string
}

export function ServiceDetailCard({ title, description, imageSrc }: ServiceDetailCardProps) {  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm p-6">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-navy-900">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Button variant="link" className="text-red-600 font-semibold self-start">
        READ MORE
      </Button>
    </div>
  )
}
