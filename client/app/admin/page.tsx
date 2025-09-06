"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Calendar,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"

// Mock data for admin dashboard
const stats = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Total Orders",
    value: "1,234",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingBag,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Reservations",
    value: "89",
    change: "-2.1%",
    trend: "down",
    icon: Calendar,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Total Customers",
    value: "2,847",
    change: "+15.3%",
    trend: "up",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    items: 3,
    total: 125.5,
    status: "completed",
    time: "2 hours ago",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    items: 2,
    total: 89.0,
    status: "preparing",
    time: "1 hour ago",
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    items: 4,
    total: 156.75,
    status: "delivered",
    time: "30 minutes ago",
  },
]

const recentReservations = [
  {
    id: "RES-001",
    customer: "Sarah Wilson",
    date: "2024-01-15",
    time: "7:00 PM",
    guests: 4,
    status: "confirmed",
    table: "Table 12",
  },
  {
    id: "RES-002",
    customer: "David Brown",
    date: "2024-01-15",
    time: "8:30 PM",
    guests: 2,
    status: "pending",
    table: "Table 5",
  },
  {
    id: "RES-003",
    customer: "Lisa Garcia",
    date: "2024-01-16",
    time: "6:00 PM",
    guests: 6,
    status: "confirmed",
    table: "Table 8",
  },
]

export default function AdminDashboard() {
  const { user } = useAuth()

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Admin <span className="text-primary">Dashboard</span>
              </h1>
              <p className="text-muted-foreground">Welcome back, {user?.name}</p>
            </div>
            <div className="flex space-x-4">
              <Button asChild>
                <Link href="/admin/menu">Manage Menu</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/admin/reservations">View Reservations</Link>
              </Button>
            </div>
          </div>
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
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div
                    className={`flex items-center space-x-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Recent Orders</CardTitle>
                <Button asChild variant="outline" size="sm">
                  <Link href="/admin/orders">View All</Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.items} items • {order.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">${order.total}</p>
                      <Badge
                        variant={
                          order.status === "completed"
                            ? "default"
                            : order.status === "preparing"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Reservations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Recent Reservations</CardTitle>
                <Button asChild variant="outline" size="sm">
                  <Link href="/admin/reservations">View All</Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentReservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-foreground">{reservation.customer}</p>
                      <p className="text-sm text-muted-foreground">{reservation.table}</p>
                      <p className="text-sm text-muted-foreground">
                        {reservation.date} at {reservation.time} • {reservation.guests} guests
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={reservation.status === "confirmed" ? "default" : "secondary"}>
                        {reservation.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Revenue Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Revenue chart would be displayed here</p>
                  <p className="text-sm text-muted-foreground">Integration with charting library needed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Button asChild size="lg" className="h-auto p-6 flex-col space-y-2">
                  <Link href="/admin/menu">
                    <ShoppingBag className="w-8 h-8" />
                    <span>Manage Menu</span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto p-6 flex-col space-y-2 bg-transparent">
                  <Link href="/admin/reservations">
                    <Calendar className="w-8 h-8" />
                    <span>Reservations</span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto p-6 flex-col space-y-2 bg-transparent">
                  <Link href="/admin/users">
                    <Users className="w-8 h-8" />
                    <span>Manage Users</span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto p-6 flex-col space-y-2 bg-transparent">
                  <Link href="/admin/analytics">
                    <TrendingUp className="w-8 h-8" />
                    <span>Analytics</span>
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
