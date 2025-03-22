"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Menu data
const menuItems = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Rich espresso with a smooth chocolatey finish",
    price: "Rs 480",
    image: "/coffee.jpg?height=200&width=200",
    category: "coffee",
  },
  {
    id: 2,
    name: "Vanilla Bean Latte",
    description: "Steamed milk with espresso and real vanilla bean",
    price: "Rs 560",
    image: "/vanilla-bean-latte.jpg?height=200&width=200",
    category: "coffee",
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    description: "Espresso layered with vanilla syrup and caramel drizzle",
    price: "Rs 440",
    image: "/coffee_mugs.jpg?height=200&width=200",
    category: "coffee",
  },
  {
    id: 5,
    name: "Hazelnut Cappuccino",
    description: "Creamy espresso with frothy milk and hazelnut essence",
    price: "Rs 550",
    image: "/hazelnut.jpg?height=200&width=200",
    category: "coffee",
  },

  // Tea
  {
    id: 6,
    name: "Chai Tea Latte",
    description: "Spiced black tea with steamed milk and honey",
    price: "Rs 200",
    image: "/chai_tea_latte.jpg?height=200&width=200",
    category: "tea",
  },
  {
    id: 7,
    name: "Matcha Green Tea Latte",
    description: "Japanese matcha blended with steamed milk",
    price: "Rs 500",
    image: "/matcha-green-tea-latte.jpg?height=200&width=200",
    category: "tea",
  },

  {
    id: 9,
    name: "Grilled Chicken Sandwich",
    description: "Juicy grilled chicken with lettuce, tomato & mayo",
    price: "Rs 800",
    image: "/honey_chicken.jpg?height=200&width=200",
    category: "main-course",
  },
  {
    id: 10,
    name: "Classic Club Sandwich",
    description: "Triple-layered sandwich with chicken, egg & cheese",
    price: "Rs 600",
    image: "/sandwich.jpg?height=200&width=200",
    category: "main-course",
  },
  {
    id: 12,
    name: "Blueberry Pancakes",
    description: "Soft pancakes loaded with fresh blueberries & maple syrup",
    price: "Rs 560",
    image: "/blueberry.jpeg?height=200&width=200",
    category: "main-course",
  },

  {
    id: 13,
    name: "Chocolate Croissant",
    description: "Flaky, buttery croissant with rich dark chocolate",
    price: "Rs 160",
    image: "/chocolate-croissant.jpg?height=200&width=200",
    category: "bakery",
  },
  {
    id: 14,
    name: "Avocado Toast",
    description: "Crunchy sourdough toast topped with avocado & chili flakes",
    price: "Rs 290",
    image: "/avocado-toast.jpg?height=200&width=200",
    category: "bakery",
  },

  {
    id: 15,
    name: "Fruit Smoothie",
    description: "Blend of fresh seasonal fruits with yogurt & honey",
    price: "Rs 220",
    image: "/smoothie.jpg?height=200&width=200",
    category: "drinks",
  },
];


export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredItems = activeTab === "all" ? menuItems : menuItems.filter((item) => item.category === activeTab)


  return (
    <main className="min-h-screen py-12 bg-amber-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">Our Menu</h1>
          <p className="text-amber-700 max-w-2xl">
            Explore our carefully crafted selection of beverages and treats, made with the finest ingredients.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-amber-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
                All Items
              </TabsTrigger>
              <TabsTrigger value="coffee" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
                Coffee
              </TabsTrigger>
              <TabsTrigger value="tea" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
                Tea
              </TabsTrigger>
              <TabsTrigger value="main-course" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
                Main Course
              </TabsTrigger>
              <TabsTrigger value="bakery" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
                Bakery
              </TabsTrigger>
              <TabsTrigger value="drinks" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
                Drinks
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="coffee" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tea" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="main-course" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="bakery" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="drinks" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

function MenuItemCard({ item }) {
  return (
    <Card className="overflow-hidden border-amber-200 bg-white hover:shadow-md transition-shadow">
      <div className="relative h-60">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-amber-900">{item.name}</h3>
          <span className="font-medium text-amber-700">{item.price}</span>
        </div>
        <p className="text-amber-700 text-sm mb-4">{item.description}</p>
        <Button size="sm" className="w-full bg-amber-700 hover:bg-amber-800 text-white">
          Add to Order
        </Button>
      </CardContent>
    </Card>
  )
}

