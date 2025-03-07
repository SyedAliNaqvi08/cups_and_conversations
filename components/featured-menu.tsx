import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const featuredItems = [
  {
    id: 1,
    name: "Waffles",
    description: "Our house special with notes of chocolate and caramel",
    price: "Rs 750",
    image: "/waffles.jpg?height=200&width=200",
    category: "Waffles",
  },
  {
    id: 2,
    name: "Pancakes and coffee",
    description: "Pancakes with steamed milk and real vanilla bean",
    price: "Rs 1000",
    image: "/pancakes.jpg?height=200&width=200",
    category: "Pancakes and coffee",
  },
  {
    id: 3,
    name: "Your ultimate favourite, Burgers",
    description: "Juicy, flame-grilled patties stacked with fresh toppings and melted cheese in a toasted bun.",
    price: "Rs 600",
    image: "/burger.jpg?height=200&width=200",
    category: "Burgers",
  },
  {
    id: 4,
    name: "Our Specialised Honey Chicken",
    description: "Crispy, tender chicken coated in a sticky, sweet honey glaze with a hint of garlic.",
    price: "Rs 1600 (10 pcs)",
    image: "/honey_chicken.jpg?height=200&width=200",
    category: "Main Course",
  },
]

export default function FeaturedMenu() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredItems.map((item) => (
        <Card key={item.id} className="overflow-hidden border-border bg-white gallery-item">
          <div className="relative h-48">
            <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-primary">{item.name}</h3>
            </div>
            <p className="text-primary/80 text-sm">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

