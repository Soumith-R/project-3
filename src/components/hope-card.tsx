// No imports needed

interface HopeCardProps {
  title: string
  description: string
  imageSrc: string
}

export function HopeCard({ title, description, imageSrc }: HopeCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative h-48 mb-4">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
    </div>
  )
}
