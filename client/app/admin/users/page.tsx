"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Users,
  Search,
  ArrowLeft,
  Eye,
  Trash2,
  CheckCircle,
  Mail,
  Calendar,
  ShoppingBag,
  UserCheck,
  UserX,
} from "lucide-react";
import Link from "next/link";

// Mock users data
const mockUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "user",
    status: "active",
    joinDate: "2023-06-15",
    lastLogin: "2024-01-10",
    totalOrders: 12,
    totalSpent: 1250.5,
    reservations: 8,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    status: "active",
    joinDate: "2023-08-22",
    lastLogin: "2024-01-12",
    totalOrders: 8,
    totalSpent: 890.25,
    reservations: 5,
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@Urban Feast.com",
    role: "admin",
    status: "active",
    joinDate: "2023-01-01",
    lastLogin: "2024-01-13",
    totalOrders: 0,
    totalSpent: 0,
    reservations: 0,
  },
  {
    id: "4",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "user",
    status: "inactive",
    joinDate: "2023-04-10",
    lastLogin: "2023-12-15",
    totalOrders: 3,
    totalSpent: 245.75,
    reservations: 2,
  },
];

const roleOptions = ["all", "user", "admin"];
const statusOptions = ["all", "active", "inactive"];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const updateUserStatus = (id: string, newStatus: string) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const updateUserRole = (id: string, newRole: string) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getRoleColor = (role: string) => {
    return role === "admin" ? "default" : "secondary";
  };

  const getStatusColor = (status: string) => {
    return status === "active" ? "default" : "secondary";
  };

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
          <h1 className="text-4xl font-bold text-foreground mb-2">
            User Management
          </h1>
          <p className="text-muted-foreground">
            View and manage all registered users
          </p>
        </motion.div>

        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                User updated successfully!
              </AlertDescription>
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
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-1">
                    {roleOptions.map((role) => (
                      <Button
                        key={role}
                        variant={roleFilter === role ? "default" : "outline"}
                        onClick={() => setRoleFilter(role)}
                        size="sm"
                      >
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </Button>
                    ))}
                  </div>
                  <div className="flex gap-1">
                    {statusOptions.map((status) => (
                      <Button
                        key={status}
                        variant={
                          statusFilter === status ? "default" : "outline"
                        }
                        onClick={() => setStatusFilter(status)}
                        size="sm"
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Users List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {filteredUsers.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {user.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            {user.email}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Joined {user.joinDate}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <ShoppingBag className="w-4 h-4 mr-1" />
                            {user.totalOrders} orders
                          </span>
                          <span>${user.totalSpent.toFixed(2)} spent</span>
                          <span>{user.reservations} reservations</span>
                          <span>Last login: {user.lastLogin}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-1">
                        <Badge variant={getRoleColor(user.role)}>
                          {user.role}
                        </Badge>
                        <Badge variant={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                      </div>
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
                              <DialogTitle>User Details</DialogTitle>
                            </DialogHeader>
                            <UserDetails
                              user={user}
                              onStatusUpdate={updateUserStatus}
                              onRoleUpdate={updateUserRole}
                            />
                          </DialogContent>
                        </Dialog>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            updateUserStatus(
                              user.id,
                              user.status === "active" ? "inactive" : "active"
                            )
                          }
                        >
                          {user.status === "active" ? (
                            <UserX className="w-4 h-4" />
                          ) : (
                            <UserCheck className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => deleteUser(user.id)}
                        >
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

        {filteredUsers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No users found
            </h3>
            <p className="text-muted-foreground">
              {searchTerm || roleFilter !== "all" || statusFilter !== "all"
                ? "Try adjusting your search or filter criteria."
                : "No users have registered yet."}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// User Details Component
function UserDetails({
  user,
  onStatusUpdate,
  onRoleUpdate,
}: {
  user: any;
  onStatusUpdate: (id: string, status: string) => void;
  onRoleUpdate: (id: string, role: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Personal Information
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>User ID:</strong> {user.id}
              </p>
              <p>
                <strong>Role:</strong>
                <Badge
                  className="ml-2"
                  variant={user.role === "admin" ? "default" : "secondary"}
                >
                  {user.role}
                </Badge>
              </p>
              <p>
                <strong>Status:</strong>
                <Badge
                  className="ml-2"
                  variant={user.status === "active" ? "default" : "secondary"}
                >
                  {user.status}
                </Badge>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Activity Summary
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Join Date:</strong> {user.joinDate}
              </p>
              <p>
                <strong>Last Login:</strong> {user.lastLogin}
              </p>
              <p>
                <strong>Total Orders:</strong> {user.totalOrders}
              </p>
              <p>
                <strong>Total Spent:</strong> ${user.totalSpent.toFixed(2)}
              </p>
              <p>
                <strong>Reservations:</strong> {user.reservations}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button
          variant="outline"
          onClick={() =>
            onRoleUpdate(user.id, user.role === "admin" ? "user" : "admin")
          }
        >
          {user.role === "admin" ? "Remove Admin" : "Make Admin"}
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            onStatusUpdate(
              user.id,
              user.status === "active" ? "inactive" : "active"
            )
          }
        >
          {user.status === "active" ? "Deactivate" : "Activate"}
        </Button>
      </div>
    </div>
  );
}
