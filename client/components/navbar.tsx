"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  User,
  Calendar,
  LogOut,
  Settings,
  UserCircle,
  Shield,
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Venue", href: "/venue" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const AuthButtons = () => (
    <>
      {isAuthenticated && user ? (
        <>
          <Button asChild variant="outline" size="sm">
            <Link href="/reservation">
              <Calendar className="w-4 h-4 mr-2" />
              Reserve
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                  />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="px-2 py-1">
                <p className="font-medium">{user.name}</p>
                <p className="truncate text-sm text-muted-foreground">
                  {user.email}
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={user.role === "admin" ? "/admin" : "/dashboard"}>
                  <UserCircle className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              {user.role === "admin" && (
                <DropdownMenuItem asChild>
                  <Link href="/admin">
                    <Shield className="mr-2 h-4 w-4" />
                    Admin Panel
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Button asChild variant="outline" size="sm">
            <Link href="/auth/login">
              <User className="w-4 h-4 mr-2" />
              Login
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/reservation">
              <Calendar className="w-4 h-4 mr-2" />
              Reserve
            </Link>
          </Button>
        </>
      )}
    </>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Urban Feast" width={100} height={60} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <AuthButtons />
          </div>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6 ">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors pl-6"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="flex flex-col space-y-3 pt-6 border-t">
                  {isAuthenticated && user ? (
                    <>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                          />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link
                          href={user.role === "admin" ? "/admin" : "/dashboard"}
                        >
                          <UserCircle className="w-4 h-4 mr-2" />
                          Dashboard
                        </Link>
                      </Button>
                      {user.role === "admin" && (
                        <Button
                          asChild
                          variant="outline"
                          onClick={() => setIsOpen(false)}
                        >
                          <Link href="/admin">
                            <Shield className="w-4 h-4 mr-2" />
                            Admin Panel
                          </Link>
                        </Button>
                      )}
                      <Button
                        asChild
                        variant="outline"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href="/reservation">
                          <Calendar className="w-4 h-4 mr-2" />
                          Reserve Table
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          handleLogout();
                          setIsOpen(false);
                        }}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        asChild
                        variant="outline"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href="/auth/login">
                          <User className="w-4 h-4 mr-2" />
                          Login
                        </Link>
                      </Button>
                      <Button asChild onClick={() => setIsOpen(false)}>
                        <Link href="/reservation">
                          <Calendar className="w-4 h-4 mr-2" />
                          Reserve Table
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
