
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import SocialAuth from "@/components/auth/SocialAuth";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleAuthSuccess = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-playfair font-bold text-gray-900">
              {isSignUp ? "Create your account" : "Sign in to your account"}
            </h2>
          </div>
          
          {isSignUp ? (
            <SignupForm onSuccess={handleAuthSuccess} />
          ) : (
            <LoginForm onSuccess={handleAuthSuccess} />
          )}

          <SocialAuth />

          <div className="text-center mt-4 space-y-2">
            <Button
              variant="link"
              className="text-rose-600 hover:text-rose-700"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign up"}
            </Button>
            
            <div>
              <Link to="/admin-auth">
                <Button
                  variant="link"
                  className="text-rose-600 hover:text-rose-700"
                >
                  Register as an Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
