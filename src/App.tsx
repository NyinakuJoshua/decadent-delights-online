
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/birthday-cakes" element={<BirthdayCakes />} />
              <Route path="/chocolate-cakes" element={<ChocolateCakes />} />
              <Route path="/cake-slices" element={<CakeSlices />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-form" element={<OrderForm />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
