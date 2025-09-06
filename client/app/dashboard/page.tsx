"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, ShoppingBag, User, Star, ArrowRight, Plus } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

// Mock data for dashboard
const mockReservations = [
  {
    id: 1,
    date: "2024-01-15",
    time: "7:00 PM",
    guests: 4,
    status: "confirmed",
    table: "Table 12",
  },
  {
    id: 2,
    date: "2024-01-08",
    time: "6:30 PM",
    guests: 2,
    status: "completed",
    table: "Table 5",
  },
]

const mockOrders = [
  {
    id: 1,
    date: "2024-01-08",
    items: ["Wagyu Beef Tenderloin", "Chocolate Soufflé"],
    total: 113,
    status: "completed",
  },
  {
    id: 2,
    date: "2023-12-20",
    items: ["Pan-Seared Lobster", "Lemon Tart"],
    total: 88,
    status: "completed",
  },
]

const stats = [
  {
    title: "Total Reservations",
    value: "12",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Orders Placed",
    value: "8",
    icon: ShoppingBag,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Favorite Dishes",
    value: "5",
    icon: Star,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Member Since",
    value: "2023",
    icon: User,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
      return
    }
    setIsLoading(false)
  }, [isAuthenticated, router])

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
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome back, <span className="text-primary">{user?.name || "Guest"}</span>
          </h1>
          <p className="text-muted-foreground">Manage your reservations, orders, and profile settings</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Reservations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Recent Reservations</CardTitle>
                <Button asChild variant="outline" size="sm">
                  <Link href="/dashboard/reservations">
                    View All <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockReservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{reservation.table}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {reservation.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {reservation.time}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {reservation.guests}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge variant={reservation.status === "confirmed" ? "default" : "secondary"}>
                      {reservation.status}
                    </Badge>
                  </div>
                ))}
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <Link href="/reservation">
                    <Plus className="w-4 h-4 mr-2" />
                    Make New Reservation
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Recent Orders</CardTitle>
                <Button asChild variant="outline" size="sm">
                  <Link href="/dashboard/orders">
                    View All <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <ShoppingBag className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Order #{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                        <p className="text-sm text-muted-foreground">{order.items.join(", ")}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">${order.total}</p>
                      <Badge variant="secondary">{order.status}</Badge>
                    </div>
                  </div>
                ))}
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <Link href="/menu">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Browse Menu
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button asChild size="lg" className="h-auto p-6 flex-col space-y-2">
                  <Link href="/reservation">
                    <Calendar className="w-8 h-8" />
                    <span>Make Reservation</span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto p-6 flex-col space-y-2 bg-transparent">
                  <Link href="/menu">
                    <ShoppingBag className="w-8 h-8" />
                    <span>Order Food</span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto p-6 flex-col space-y-2 bg-transparent">
                  <Link href="/dashboard/profile">
                    <User className="w-8 h-8" />
                    <span>Update Profile</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
