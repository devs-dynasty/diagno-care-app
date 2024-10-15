import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
            <CardDescription>Join DiagnoCare to start your journey</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      placeholder="Create a password"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" placeholder="e.g., Doctor, Nurse, Administrator" required />
                </div>
              </div>
              <Button className="w-full mt-5">
              <UserPlus className="mr-2 h-4 w-4" /> Sign Up
            </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
          <div className="mt-4 text-center flex flex-row gap-3">
              <span className="text-sm">Already have an account?</span>
              <Link to="/Login" className="text-sm font-bold text-blue-500 underline">
                Sign In
              </Link>
            </div>
          </CardFooter>
          
        </Card>
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-center bg-primary p-8">
        <div className="relative w-full max-w-lg aspect-square">
          <img
            src="/src/assets/images/Leonardo_Phoenix_A_technologically_advanced_healthcare_app_das_0.jpg?height=400&width=400"
            alt="Medical research"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  )
}