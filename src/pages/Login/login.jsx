import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { account, ID } from "@/lib/appwrite";
import Loading from "@/components/loading/loading";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMeassage, setErrorMessage] = useState(null);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleLogin = async (email, password) => {
    setLoading(true);
    setErrorMessage(null);
    try {
      // const session = await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      //   setLoggedInUser(user);
    } catch (error) {
      if (error.code === 401) {
        const message = "Invalid email or password";
        setErrorMessage(message);
      } else if (email === "" || password === "") {
        const message = "Please fill in all fields required";
        setErrorMessage(message);
      } else {
        const message = error.message;
        setErrorMessage(message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {errorMeassage && (
        <div className="absolute top-9 max-w-96 bg-red-100 text-red-500 p-4 rounded-lg mb-4">
          {errorMeassage}
        </div>
      )}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>Please sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin(email, password);
              }}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={togglePasswordVisibility}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <div className="text-xs  mt-4  flex flex-col gap-3">
                    <Link
                      href="/forgot-password"
                      className="text-blue-500 underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-5" type="submit">
                <LogIn className="mr-2 h-4 w-4" />{" "}
                {loading ? "Logging in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
          <div className="flex flex-row justify-center gap-4 p-4">
            <p className="text-sm text-muted-foreground p-1">
              Don't have an account?
            </p>
            <Link
              to="/Signup"
              className="text-sm font-semibold p-1 text-muted-foreground  text-blue-500 underline"
            >
              Sign Up
            </Link>
          </div>
          </CardFooter>
          
        </Card>
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-center bg-primary p-8">
        <div className="relative w-full max-w-lg aspect-square">
          <img
            src="/src/assets/images/Leonardo_Phoenix_A_technologically_advanced_healthcare_app_das_3.jpg?height=400&width=400"
            alt="Healthcare professionals"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
