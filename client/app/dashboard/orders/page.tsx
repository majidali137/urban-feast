"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Search, Star, ArrowLeft, Eye } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

// Mock orders data
const mockOrders = [
  {
    id: 1,
    date: "2024-01-08",
    items: [
      { name: "Wagyu Beef Tenderloin", price: 85, quantity: 1 },
      { name: "Chocolate Soufflé", price: 28, quantity: 1 },
    ],
    total: 113,
    status: "completed",
    rating: 5,
  },
  {
    id: 2,
    date: "2023-12-20",
    items: [
      { name: "Pan-Seared Lobster", price: 72, quantity: 1 },
      { name: "Lemon Tart", price: 16, quantity: 1 },
    ],
    total: 88,
    status: "completed",
    rating: 4,
  },
  {
    id: 3,
    date: "2023-11-15",
    items: [
      { name: "Truffle Arancini", price: 18, quantity: 2 },
      { name: "Duck Confit", price: 38, quantity: 1 },
      { name: "Tiramisu", price: 14, quantity: 1 },
    ],
    total: 88,
    status: "completed",
    rating: 5,
  },
  {
    id: 4,
    date: "2023-10-28",
    items: [
      { name: "Seared Scallops", price: 24, quantity: 1 },
      { name: "Vegetarian Tasting", price: 32, quantity: 1 },
    ],
    total: 56,
    status: "completed",
    rating: null,
  },
]

export default function OrdersPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
      return
    }
    setIsLoading(false)
  }, [isAuthenticated, router])

  const filteredOrders = mockOrders.filter((order) =>
    order.items.some((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
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
              <Link href="/dashboard">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Order History</h1>
          <p className="text-muted-foreground">View your past orders and leave reviews</p>
        </motion.div>

        {/* Search */}
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
                    placeholder="Search orders by dish name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button asChild>
                  <Link href="/menu">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Browse Menu
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Orders List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {filteredOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <ShoppingBag className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Order #{order.id}</h3>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">${order.total}</p>
                      <Badge variant="secondary">{order.status}</Badge>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
                      >
                        <div>
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-medium text-foreground">${item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {order.rating ? (
                        <div className="flex items-center space-x-1">
                          <span className="text-sm text-muted-foreground">Your rating:</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < order.rating! ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Button size="sm" variant="outline">
                          <Star className="w-4 h-4 mr-2" />
                          Rate Order
                        </Button>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {selectedOrder === order.id ? "Hide Details" : "View Details"}
                      </Button>
                      <Button size="sm">Reorder</Button>
                    </div>
                  </div>

                  {selectedOrder === order.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-border"
                    >
                      <h4 className="font-semibold text-foreground mb-2">Order Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Order Date: {order.date}</p>
                          <p className="text-muted-foreground">Status: {order.status}</p>
                          <p className="text-muted-foreground">Total Items: {order.items.length}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Subtotal: ${order.total - 10}</p>
                          <p className="text-muted-foreground">Tax: $10</p>
                          <p className="font-medium text-foreground">Total: ${order.total}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredOrders.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No orders found</h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm ? "Try adjusting your search criteria." : "You haven't placed any orders yet."}
            </p>
            <Button asChild>
              <Link href="/menu">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Browse Our Menu
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
