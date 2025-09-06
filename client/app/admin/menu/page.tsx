"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, Search, Edit, Trash2, ArrowLeft, Save, X, CheckCircle, ImageIcon } from "lucide-react"
import Link from "next/link"

// Mock menu items data
const mockMenuItems = [
  {
    id: 1,
    name: "Wagyu Beef Tenderloin",
    description: "Premium wagyu beef with truffle sauce and seasonal vegetables",
    price: 85,
    category: "Mains",
    image: "/public/wagyu-beef-tenderloin-with-truffle-sauce-elegant-p.jpg",
    dietary: ["Gluten-Free"],
    available: true,
    popular: true,
  },
  {
    id: 2,
    name: "Pan-Seared Lobster",
    description: "Fresh Atlantic lobster with saffron risotto and microgreens",
    price: 72,
    category: "Mains",
    image: "/public/pan-seared-lobster-with-saffron-risotto-fine-dinin.jpg",
    dietary: ["Gluten-Free"],
    available: true,
    popular: true,
  },
  {
    id: 3,
    name: "Truffle Arancini",
    description: "Crispy risotto balls with black truffle, parmesan, and herb aioli",
    price: 18,
    category: "Starters",
    image: "/public/truffle-arancini-appetizer.jpg",
    dietary: ["Vegetarian"],
    available: true,
    popular: true,
  },
  {
    id: 4,
    name: "Chocolate Soufflé",
    description: "Decadent dark chocolate soufflé with vanilla bean ice cream",
    price: 28,
    category: "Desserts",
    image: "/public/chocolate-souffle-with-vanilla-ice-cream-elegant-d.jpg",
    dietary: ["Vegetarian"],
    available: false,
    popular: true,
  },
]

const categories = ["All", "Starters", "Mains", "Desserts", "Beverages"]
const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"]

export default function AdminMenuPage() {
  const [menuItems, setMenuItems] = useState(mockMenuItems)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    dietary: [] as string[],
    available: true,
    popular: false,
  })

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      ...formData,
      price: Number.parseFloat(formData.price),
      image: "/placeholder.svg",
    }
    setMenuItems([...menuItems, newItem])
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      dietary: [],
      available: true,
      popular: false,
    })
    setIsAddDialogOpen(false)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleEditItem = (item: any) => {
    setEditingItem(item)
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      category: item.category,
      dietary: item.dietary,
      available: item.available,
      popular: item.popular,
    })
  }

  const handleUpdateItem = () => {
    const updatedItems = menuItems.map((item) =>
      item.id === editingItem.id ? { ...item, ...formData, price: Number.parseFloat(formData.price) } : item,
    )
    setMenuItems(updatedItems)
    setEditingItem(null)
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      dietary: [],
      available: true,
      popular: false,
    })
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleDeleteItem = (id: number) => {
    setMenuItems(menuItems.filter((item) => item.id !== id))
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const toggleAvailability = (id: number) => {
    const updatedItems = menuItems.map((item) => (item.id === id ? { ...item, available: !item.available } : item))
    setMenuItems(updatedItems)
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/admin">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Menu Management</h1>
              <p className="text-muted-foreground">Add, edit, and manage your restaurant menu items</p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Menu Item
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Menu Item</DialogTitle>
                </DialogHeader>
                <MenuItemForm
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleAddItem}
                  onCancel={() => setIsAddDialogOpen(false)}
                />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        {showSuccess && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">Menu item updated successfully!</AlertDescription>
            </Alert>
          </motion.div>
        )}

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search menu items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                className={`overflow-hidden hover:shadow-lg transition-shadow duration-200 ${
                  !item.available ? "opacity-60" : ""
                }`}
              >
                <div className="relative">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                    {item.popular && <Badge className="bg-primary text-primary-foreground">Popular</Badge>}
                    <Badge variant={item.available ? "default" : "secondary"}>
                      {item.available ? "Available" : "Unavailable"}
                    </Badge>
                  </div>
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
                    <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                    <span className="text-xl font-bold text-primary">${item.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{item.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEditItem(item)} className="flex-1">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => toggleAvailability(item.id)}>
                      {item.available ? "Disable" : "Enable"}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDeleteItem(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No menu items found</h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm || selectedCategory !== "All"
                ? "Try adjusting your search or filter criteria."
                : "Start by adding your first menu item."}
            </p>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Menu Item
            </Button>
          </motion.div>
        )}

        {/* Edit Dialog */}
        <Dialog open={!!editingItem} onOpenChange={() => setEditingItem(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Menu Item</DialogTitle>
            </DialogHeader>
            <MenuItemForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleUpdateItem}
              onCancel={() => setEditingItem(null)}
              isEditing
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

// Menu Item Form Component
function MenuItemForm({
  formData,
  setFormData,
  onSubmit,
  onCancel,
  isEditing = false,
}: {
  formData: any
  setFormData: (data: any) => void
  onSubmit: () => void
  onCancel: () => void
  isEditing?: boolean
}) {
  const handleDietaryChange = (dietary: string) => {
    const newDietary = formData.dietary.includes(dietary)
      ? formData.dietary.filter((d: string) => d !== dietary)
      : [...formData.dietary, dietary]
    setFormData({ ...formData, dietary: newDietary })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Item Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter item name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price ($)</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="0.00"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe the dish..."
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories
              .filter((c) => c !== "All")
              .map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Dietary Options</Label>
        <div className="flex flex-wrap gap-2">
          {dietaryOptions.map((dietary) => (
            <Button
              key={dietary}
              type="button"
              variant={formData.dietary.includes(dietary) ? "default" : "outline"}
              size="sm"
              onClick={() => handleDietaryChange(dietary)}
            >
              {dietary}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="available"
            checked={formData.available}
            onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
            className="rounded"
          />
          <Label htmlFor="available">Available</Label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="popular"
            checked={formData.popular}
            onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
            className="rounded"
          />
          <Label htmlFor="popular">Popular Item</Label>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={onCancel}>
          <X className="w-4 h-4 mr-2" />
          Cancel
        </Button>
        <Button onClick={onSubmit}>
          <Save className="w-4 h-4 mr-2" />
          {isEditing ? "Update" : "Add"} Item
        </Button>
      </div>
    </div>
  )
}
