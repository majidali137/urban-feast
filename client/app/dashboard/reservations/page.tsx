"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Users, Search, Plus, Edit, Trash2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

// Mock reservations data
const mockReservations = [
  {
    id: 1,
    date: "2024-01-15",
    time: "7:00 PM",
    guests: 4,
    status: "confirmed",
    table: "Table 12",
    specialRequests: "Anniversary celebration",
  },
  {
    id: 2,
    date: "2024-01-08",
    time: "6:30 PM",
    guests: 2,
    status: "completed",
    table: "Table 5",
    specialRequests: "",
  },
  {
    id: 3,
    date: "2024-01-22",
    time: "8:00 PM",
    guests: 6,
    status: "confirmed",
    table: "Table 8",
    specialRequests: "Business dinner",
  },
  {
    id: 4,
    date: "2023-12-20",
    time: "7:30 PM",
    guests: 3,
    status: "completed",
    table: "Table 3",
    specialRequests: "Dietary restrictions: vegetarian",
  },
]

export default function ReservationsPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
      return
    }
    setIsLoading(false)
  }, [isAuthenticated, router])

  const filteredReservations = mockReservations.filter((reservation) => {
    const matchesSearch =
      reservation.table.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.specialRequests.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || reservation.status === statusFilter
    return matchesSearch && matchesStatus
  })

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
          <h1 className="text-4xl font-bold text-foreground mb-2">My Reservations</h1>
          <p className="text-muted-foreground">Manage your current and past reservations</p>
        </motion.div>

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
                    placeholder="Search reservations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={statusFilter === "all" ? "default" : "outline"}
                    onClick={() => setStatusFilter("all")}
                    size="sm"
                  >
                    All
                  </Button>
                  <Button
                    variant={statusFilter === "confirmed" ? "default" : "outline"}
                    onClick={() => setStatusFilter("confirmed")}
                    size="sm"
                  >
                    Confirmed
                  </Button>
                  <Button
                    variant={statusFilter === "completed" ? "default" : "outline"}
                    onClick={() => setStatusFilter("completed")}
                    size="sm"
                  >
                    Completed
                  </Button>
                </div>
                <Button asChild>
                  <Link href="/reservation">
                    <Plus className="w-4 h-4 mr-2" />
                    New Reservation
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reservations List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {filteredReservations.map((reservation, index) => (
            <motion.div
              key={reservation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          Reservation #{reservation.id} - {reservation.table}
                        </h3>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-2">
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
                            {reservation.guests} {reservation.guests === 1 ? "guest" : "guests"}
                          </span>
                        </div>
                        {reservation.specialRequests && (
                          <p className="text-sm text-muted-foreground">
                            <strong>Special Requests:</strong> {reservation.specialRequests}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={reservation.status === "confirmed" ? "default" : "secondary"}>
                        {reservation.status}
                      </Badge>
                      {reservation.status === "confirmed" && (
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredReservations.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No reservations found</h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filter criteria."
                : "You haven't made any reservations yet."}
            </p>
            <Button asChild>
              <Link href="/reservation">
                <Plus className="w-4 h-4 mr-2" />
                Make Your First Reservation
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
