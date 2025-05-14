
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

const AdminAuth = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    
    try {
      // First, create the user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.name,
          },
        },
      });
      
      if (authError) throw authError;
      
      if (!authData.user) {
        throw new Error("Failed to create user account");
      }
      
      // Next, register as admin
      const { error: adminError } = await supabase
        .from('admin_users')
        .insert({
          user_id: authData.user.id,
          name: values.name,
          admin_id: 'PLACEHOLDER', // This will be overwritten by the database trigger
        });
      
      if (adminError) throw adminError;
      
      toast.success("Admin account created successfully! Please check your email to verify your account.");
      navigate("/");
    } catch (error: any) {
      console.error("Admin signup error:", error);
      toast.error(error.message || "Failed to create admin account");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-playfair font-bold text-gray-900">
              Admin Registration
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Create an administrator account
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Doe" {...field} />
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
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="admin@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••" 
                          {...field} 
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <div className="flex items-center">
                        <FormLabel className="mr-1">
                          I agree to the 
                        </FormLabel>
                        <Button 
                          variant="link" 
                          className="h-auto p-0 text-rose-600" 
                          type="button"
                          onClick={() => setTermsDialogOpen(true)}
                        >
                          terms and conditions
                        </Button>
                      </div>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <Button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-600"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Register as Admin"}
              </Button>
            </form>
          </Form>
          
          <div className="text-center mt-4">
            <Button
              variant="link"
              className="text-rose-600 hover:text-rose-700"
              onClick={() => navigate("/auth")}
            >
              Back to regular login
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={termsDialogOpen} onOpenChange={setTermsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair">Terms and Conditions for Admin Users</DialogTitle>
            <DialogDescription>
              Please read these terms carefully before registering as an administrator.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <h3 className="font-semibold text-base">1. Administrator Responsibilities</h3>
            <p>
              As an administrator of Decadent Delights, you are entrusted with the responsibility of maintaining 
              the quality and integrity of our digital platform. This includes but is not limited to managing product 
              listings, handling customer queries, and ensuring that all content adheres to our company's standards.
            </p>
            
            <h3 className="font-semibold text-base">2. Confidentiality</h3>
            <p>
              Administrators are required to maintain strict confidentiality regarding all proprietary information, 
              including but not limited to customer data, business strategies, and technical implementations. Any breach 
              of confidentiality may result in immediate termination of administrative privileges and potential legal action.
            </p>
            
            <h3 className="font-semibold text-base">3. Data Protection and Privacy</h3>
            <p>
              Administrators must comply with all applicable data protection laws and regulations, including GDPR where 
              applicable. Customer data should only be accessed when necessary for legitimate business purposes, and 
              appropriate security measures must be maintained at all times.
            </p>
            
            <h3 className="font-semibold text-base">4. Content Management</h3>
            <p>
              All content published through the administration interface, including product descriptions, images, 
              and pricing, must be accurate, appropriate, and in line with our brand guidelines. Misleading information 
              or inappropriate content is strictly prohibited.
            </p>
            
            <h3 className="font-semibold text-base">5. Account Security</h3>
            <p>
              Administrators are responsible for maintaining the security of their accounts. This includes using strong 
              passwords, enabling two-factor authentication when available, and not sharing account credentials with others. 
              Any suspected security breach must be reported immediately.
            </p>
            
            <h3 className="font-semibold text-base">6. Limitation of Liability</h3>
            <p>
              Decadent Delights shall not be liable for any direct, indirect, incidental, special, or consequential damages 
              resulting from the use of administrative features or any actions taken by administrators.
            </p>
            
            <h3 className="font-semibold text-base">7. Termination</h3>
            <p>
              Administrative privileges may be revoked at any time at the discretion of Decadent Delights management. 
              Upon termination, all access to administrative features will be immediately disabled.
            </p>
            
            <h3 className="font-semibold text-base">8. Changes to Terms</h3>
            <p>
              These terms and conditions may be updated from time to time. Administrators will be notified of any significant 
              changes, but it is their responsibility to regularly review these terms to ensure compliance.
            </p>
            
            <h3 className="font-semibold text-base">9. Governing Law</h3>
            <p>
              These terms are governed by and construed in accordance with the laws of the jurisdiction in which Decadent 
              Delights operates, without regard to its conflict of law provisions.
            </p>
            
            <h3 className="font-semibold text-base">10. Acknowledgment</h3>
            <p>
              By registering as an administrator, you acknowledge that you have read, understood, and agree to be bound by 
              these terms and conditions.
            </p>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default AdminAuth;
