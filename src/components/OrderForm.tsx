
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CakeSlice, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Define form schema with zod
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  deliveryDate: z.string().refine((val) => {
    const date = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && date.getTime() > today.getTime() + 24 * 60 * 60 * 1000;
  }, {
    message: "Delivery date must be at least 24 hours from now.",
  }),
  deliveryTime: z.string({
    required_error: "Please select a delivery time.",
  }),
  specialInstructions: z.string().optional(),
  paymentMethod: z.string({
    required_error: "Please select a payment method.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const OrderForm = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Get tomorrow's date for the min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      deliveryDate: "",
      deliveryTime: "",
      specialInstructions: "",
      paymentMethod: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Order submitted:", values);
      console.log("Cart items:", cart);
      
      // Show success message
      toast.success("Your order has been placed successfully! We'll contact you to confirm the details.");
      
      // Clear cart and redirect
      clearCart();
      setIsSubmitting(false);
      
      // Redirect to homepage or thank you page
      navigate('/');
    }, 1500);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Order Summary</h2>
        
        {cart.length > 0 ? (
          <div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-gray-700">
                      {item.quantity} × {item.name}
                    </span>
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty. Please add some items before checking out.</p>
        )}
      </div>

      {cart.length > 0 && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Street Name, City, State, ZIP" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deliveryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Date</FormLabel>
                    <FormControl>
                      <Input type="date" min={tomorrowFormatted} {...field} />
                    </FormControl>
                    <FormDescription>
                      Orders require at least 24 hours notice.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deliveryTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Time</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a delivery time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="9am-11am">9:00 AM - 11:00 AM</SelectItem>
                        <SelectItem value="11am-1pm">11:00 AM - 1:00 PM</SelectItem>
                        <SelectItem value="1pm-3pm">1:00 PM - 3:00 PM</SelectItem>
                        <SelectItem value="3pm-5pm">3:00 PM - 5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="specialInstructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Instructions</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any special requirements or requests for your order..." 
                      className="min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Allergies, custom text, specific designs, etc.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cash">Cash on Delivery</SelectItem>
                      <SelectItem value="creditCard">Credit Card</SelectItem>
                      <SelectItem value="bankTransfer">Bank Transfer</SelectItem>
                      <SelectItem value="mtnMoney">MTN Mobile Money</SelectItem>
                      <SelectItem value="telecelCash">TELECEL Cash</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    For card and mobile money payments, we'll contact you for details.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit"
              className="w-full md:w-auto bg-rose-500 hover:bg-rose-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CakeSlice className="mr-2 h-5 w-5" />
                  Place Order
                </>
              )}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default OrderForm;
