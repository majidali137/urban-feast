"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, Calendar } from "lucide-react"

const categories = ["All", "Starters", "Mains", "Desserts", "Beverages"]

const menuItems = [
  // Starters
  {
    id: 1,
    name: "Truffle Arancini",
    description: "Crispy risotto balls with black truffle, parmesan, and herb aioli",
    price: 18,
    category: "Starters",
    image: "/public/truffle-arancini-appetizer.jpg",
    dietary: ["Vegetarian"],
    popular: true,
  },
  {
    id: 2,
    name: "Seared Scallops",
    description: "Pan-seared scallops with cauliflower purée and pancetta crisps",
    price: 24,
    category: "Starters",
    image: "/public/seared-scallops-appetizer.jpg",
    dietary: ["Gluten-Free"],
    popular: false,
  },
  {
    id: 3,
    name: "Burrata Caprese",
    description: "Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic",
    price: 16,
    category: "Starters",
    image: "/public/burrata-caprese-appetizer.jpg",
    dietary: ["Vegetarian", "Gluten-Free"],
    popular: true,
  },

  // Mains
  {
    id: 4,
    name: "Wagyu Beef Tenderloin",
    description: "Premium wagyu beef with truffle sauce and seasonal vegetables",
    price: 85,
    category: "Mains",
    image: "/public/wagyu-beef-tenderloin-with-truffle-sauce-elegant-p.jpg",
    dietary: ["Gluten-Free"],
    popular: true,
  },
  {
    id: 5,
    name: "Pan-Seared Lobster",
    description: "Fresh Atlantic lobster with saffron risotto and microgreens",
    price: 72,
    category: "Mains",
    image: "/public/pan-seared-lobster-with-saffron-risotto-fine-dinin.jpg",
    dietary: ["Gluten-Free"],
    popular: true,
  },
  {
    id: 6,
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry gastrique and roasted vegetables",
    price: 38,
    category: "Mains",
    image: "/public/duck-confit-main-course.jpg",
    dietary: ["Gluten-Free"],
    popular: false,
  },
  {
    id: 7,
    name: "Vegetarian Tasting",
    description: "Chef's selection of seasonal vegetables with quinoa and herb sauce",
    price: 32,
    category: "Mains",
    image: "/public/vegetarian-tasting-plate.jpg",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
    popular: false,
  },

  // Desserts
  {
    id: 8,
    name: "Chocolate Soufflé",
    description: "Decadent dark chocolate soufflé with vanilla bean ice cream",
    price: 28,
    category: "Desserts",
    image: "/public/chocolate-souffle-with-vanilla-ice-cream-elegant-d.jpg",
    dietary: ["Vegetarian"],
    popular: true,
  },
  {
    id: 9,
    name: "Lemon Tart",
    description: "Classic lemon tart with meringue and fresh berries",
    price: 16,
    category: "Desserts",
    image: "/public/lemon-tart-dessert.jpg",
    dietary: ["Vegetarian"],
    popular: false,
  },
  {
    id: 10,
    name: "Tiramisu",
    description: "Traditional Italian tiramisu with espresso and mascarpone",
    price: 14,
    category: "Desserts",
    image: "/public/tiramisu-dessert.jpg",
    dietary: ["Vegetarian"],
    popular: true,
  },

  // Beverages
  {
    id: 11,
    name: "Sommelier's Selection",
    description: "Curated wine pairing for your meal (per glass)",
    price: 18,
    category: "Beverages",
    image: "/public/wine-selection-glass.jpg",
    dietary: [],
    popular: true,
  },
  {
    id: 12,
    name: "Craft Cocktails",
    description: "House-made cocktails with premium spirits and fresh ingredients",
    price: 16,
    category: "Beverages",
    image: "/public/craft-cocktails.jpg",
    dietary: [],
    popular: false,
  },
  {
    id: 13,
    name: "Artisan Coffee",
    description: "Single-origin coffee beans, expertly roasted and brewed",
    price: 6,
    category: "Beverages",
    image: "/public/artisan-coffee.jpg",
    dietary: ["Vegan"],
    popular: false,
  },
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/public/gourmet-dish-presentation-with-golden-lighting.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Our <span className="text-primary">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
          >
            Culinary masterpieces crafted with passion and precision
          </motion.p>
        </div>
      </section>

      {/* Menu Controls */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="min-w-[100px]"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.popular && (
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Popular</Badge>
                      )}
                      <div className="absolute top-4 right-4 flex flex-wrap gap-1">
                        {item.dietary.map((diet) => (
                          <Badge key={diet} variant="secondary" className="text-xs">
                            {diet}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                        <span className="text-2xl font-bold text-primary">${item.price}</span>
                      </div>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Order
                        </Button>
                        <Button size="sm" variant="outline">
                          <Calendar className="w-4 h-4 mr-2" />
                          Reserve
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-xl text-muted-foreground">No items found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
