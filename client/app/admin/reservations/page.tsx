"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calendar, Clock, Users, Search, ArrowLeft, Eye, Trash2, CheckCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"

// Mock reservations data
const mockReservations = [
  {
    id: "RES-001",
    customer: {
      name: "Sarah Wilson",
      email: "sarah@example.com",
      phone: "(555) 123-4567",
    },
    date: "2024-01-15",
    time: "7:00 PM",
    guests: 4,
    status: "confirmed",
    table: "Table 12",
    specialRequests: "Anniversary celebration, need quiet table",
    createdAt: "2024-01-10",
  },
  {
    id: "RES-002",
    customer: {
      name: "David Brown",
      email: "david@example.com",
      phone: "(555) 987-6543",
    },
    date: "2024-01-15",
    time: "8:30 PM",
    guests: 2,
    status: "pending",
    table: "Table 5",
    specialRequests: "",
    createdAt: "2024-01-12",
  },
  {
    id: "RES-003",
    customer: {
      name: "Lisa Garcia",
      email: "lisa@example.com",
      phone: "(555) 456-7890",
    },
    date: "2024-01-16",
    time: "6:00 PM",
    guests: 6,
    status: "confirmed",
    table: "Table 8",
    specialRequests: "Business dinner, need private area",
    createdAt: "2024-01-11",
  },
  {
    id: "RES-004",
    customer: {
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "(555) 321-0987",
    },
    date: "2024-01-14",
    time: "7:30 PM",
    guests: 3,
    status: "completed",
    table: "Table 3",
    specialRequests: "Vegetarian options needed",
    createdAt: "2024-01-08",
  },
]

const statusOptions = ["all", "pending", "confirmed", "completed", "cancelled"]

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState(mockReservations)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedReservation, setSelectedReservation] = useState<any>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const filteredReservations = reservations.filter((reservation) => {
    const matchesSearch =
      reservation.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.table.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || reservation.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const updateReservationStatus = (id: string, newStatus: string) => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === id ? { ...reservation, status: newStatus } : reservation,
    )
    setReservations(updatedReservations)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const deleteReservation = (id: string) => {
    setReservations(reservations.filter((reservation) => reservation.id !== id))
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "default"
      case "pending":
        return "secondary"
      case "completed":
        return "outline"
      case "cancelled":
        return "destructive"
      default:
        return "secondary"
    }
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Reservation Management</h1>
          <p className="text-muted-foreground">View and manage all restaurant reservations</p>
        </motion.div>

        {showSuccess && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">Reservation updated successfully!</AlertDescription>
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
                    placeholder="Search reservations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  {statusOptions.map((status) => (
                    <Button
                      key={status}
                      variant={statusFilter === status ? "default" : "outline"}
                      onClick={() => setStatusFilter(status)}
                      size="sm"
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </Button>
                  ))}
                </div>
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
                          {reservation.id} - {reservation.customer.name}
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
                            {reservation.guests} guests
                          </span>
                          <span>{reservation.table}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            {reservation.customer.email}
                          </span>
                          <span className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            {reservation.customer.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={getStatusColor(reservation.status)}>{reservation.status}</Badge>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Reservation Details</DialogTitle>
                            </DialogHeader>
                            <ReservationDetails reservation={reservation} onStatusUpdate={updateReservationStatus} />
                          </DialogContent>
                        </Dialog>
                        {reservation.status !== "completed" && (
                          <Select
                            value={reservation.status}
                            onValueChange={(value) => updateReservationStatus(reservation.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="confirmed">Confirmed</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                              <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                        <Button size="sm" variant="outline" onClick={() => deleteReservation(reservation.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
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
            <p className="text-muted-foreground">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filter criteria."
                : "No reservations have been made yet."}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

// Reservation Details Component
function ReservationDetails({
  reservation,
  onStatusUpdate,
}: {
  reservation: any
  onStatusUpdate: (id: string, status: string) => void
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Customer Information</h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Name:</strong> {reservation.customer.name}
              </p>
              <p>
                <strong>Email:</strong> {reservation.customer.email}
              </p>
              <p>
                <strong>Phone:</strong> {reservation.customer.phone}
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Reservation Details</h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Reservation ID:</strong> {reservation.id}
              </p>
              <p>
                <strong>Date:</strong> {reservation.date}
              </p>
              <p>
                <strong>Time:</strong> {reservation.time}
              </p>
              <p>
                <strong>Guests:</strong> {reservation.guests}
              </p>
              <p>
                <strong>Table:</strong> {reservation.table}
              </p>
              <p>
                <strong>Status:</strong>
                <Badge className="ml-2" variant={reservation.status === "confirmed" ? "default" : "secondary"}>
                  {reservation.status}
                </Badge>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Special Requests</h4>
            <p className="text-sm text-muted-foreground">{reservation.specialRequests || "No special requests"}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Booking Information</h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Created:</strong> {reservation.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>

      {reservation.status !== "completed" && (
        <div className="flex justify-end space-x-2">
          <Button
            variant="outline"
            onClick={() => onStatusUpdate(reservation.id, "confirmed")}
            disabled={reservation.status === "confirmed"}
          >
            Confirm
          </Button>
          <Button variant="outline" onClick={() => onStatusUpdate(reservation.id, "completed")}>
            Mark Complete
          </Button>
          <Button variant="destructive" onClick={() => onStatusUpdate(reservation.id, "cancelled")}>
            Cancel
          </Button>
        </div>
      )}
    </div>
  )
}
