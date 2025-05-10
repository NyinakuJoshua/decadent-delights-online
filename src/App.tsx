
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import BirthdayCakes from "./pages/BirthdayCakes";
import ChocolateCakes from "./pages/ChocolateCakes";
import CakeSlices from "./pages/CakeSlices";
import Cart from "./pages/Cart";
import OrderForm from "./pages/OrderForm";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";

// Authentication wrapper to handle protected routes and redirects
const AuthenticatedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !session) {
      toast.error("Please sign in to access this page");
      navigate("/auth");
    }
  }, [user, session, navigate]);

  return user ? <>{children}</> : null;
};

// Component to handle auth redirects
const AuthCallbackHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if this is a redirect from OAuth
    const hashParams = new URLSearchParams(location.hash.substring(1));
    const queryParams = new URLSearchParams(location.search);
    
    // If we have an access_token in the URL, it's likely an OAuth callback
    if (hashParams.has("access_token") || queryParams.has("access_token")) {
      toast.success("Successfully signed in!");
      navigate("/");
    }
  }, [location, navigate]);
  
  return null;
};

const queryClient = new QueryClient();

const AppRoutes = () => (
  <>
    <AuthCallbackHandler />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/birthday-cakes" element={<BirthdayCakes />} />
      <Route path="/chocolate-cakes" element={<ChocolateCakes />} />
      <Route path="/cake-slices" element={<CakeSlices />} />
      <Route 
        path="/cart" 
        element={
          <AuthenticatedRoute>
            <Cart />
          </AuthenticatedRoute>
        } 
      />
      <Route 
        path="/order-form" 
        element={
          <AuthenticatedRoute>
            <OrderForm />
          </AuthenticatedRoute>
        } 
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Toaster />
    <Sonner />
  </>
);

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <TooltipProvider>
              <AppRoutes />
            </TooltipProvider>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
