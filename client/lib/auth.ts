// Mock authentication utilities for demo purposes
export interface User {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin";
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

// Mock user data
const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@Urbanfeast.com",
    name: "Admin User",
    role: "admin",
    avatar: "/placeholder.svg?key=admin",
  },
  {
    id: "2",
    email: "user@example.com",
    name: "John Doe",
    role: "user",
    avatar: "/placeholder.svg?key=user",
  },
];

// Mock authentication functions
export const mockLogin = async (
  email: string,
  password: string
): Promise<User> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = mockUsers.find((u) => u.email === email);
  if (!user || password !== "password123") {
    throw new Error("Invalid credentials");
  }

  // Store in localStorage for demo
  localStorage.setItem("auth_user", JSON.stringify(user));
  return user;
};

export const mockRegister = async (
  email: string,
  password: string,
  name: string
): Promise<User> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Check if user already exists
  if (mockUsers.find((u) => u.email === email)) {
    throw new Error("User already exists");
  }

  const newUser: User = {
    id: Date.now().toString(),
    email,
    name,
    role: "user",
    avatar: "/placeholder.svg?key=newuser",
  };

  // Store in localStorage for demo
  localStorage.setItem("auth_user", JSON.stringify(newUser));
  return newUser;
};

export const mockLogout = async (): Promise<void> => {
  localStorage.removeItem("auth_user");
};

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem("auth_user");
  return stored ? JSON.parse(stored) : null;
};

export const mockForgotPassword = async (email: string): Promise<void> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = mockUsers.find((u) => u.email === email);
  if (!user) {
    throw new Error("User not found");
  }

  // In a real app, this would send an email
  console.log(`Password reset email sent to ${email}`);
};

export const mockResetPassword = async (
  token: string,
  newPassword: string
): Promise<void> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real app, this would validate the token and update the password
  console.log(`Password reset for token: ${token}`);
};

export const isAdmin = (user: User | null): boolean => {
  return user?.role === "admin";
};

export const requireAdmin = (user: User | null): void => {
  if (!user || user.role !== "admin") {
    throw new Error("Admin access required");
  }
};
