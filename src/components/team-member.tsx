// No imports needed

interface TeamMemberProps {
  name: string
  role: string
  imageSrc: string
}

export function TeamMember({ name, role, imageSrc }: TeamMemberProps) {
  return (
    <div className="text-center">
      <div className="bg-gray-200 aspect-square relative mb-4 mx-auto">
        <img src={imageSrc || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-300">{role}</p>
    </div>
  )
}
