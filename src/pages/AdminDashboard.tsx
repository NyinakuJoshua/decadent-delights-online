
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { PlusCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import AdminCredentialsDisplay from "@/components/AdminCredentialsDisplay";

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<string>("orders");

  // Mock data for transactions/orders
  const transactions = [
    { id: "ORD-1001", customer: "Jane Smith", items: 3, total: "$120.99", status: "Completed", date: "2025-05-15" },
    { id: "ORD-1002", customer: "John Doe", items: 1, total: "$45.50", status: "Processing", date: "2025-05-16" },
    { id: "ORD-1003", customer: "Alice Johnson", items: 2, total: "$85.75", status: "Completed", date: "2025-05-16" },
    { id: "ORD-1004", customer: "Robert Brown", items: 4, total: "$160.25", status: "Pending", date: "2025-05-17" },
    { id: "ORD-1005", customer: "Emily Wilson", items: 1, total: "$38.99", status: "Completed", date: "2025-05-18" }
  ];

  // Navigate to add cake page with the selected category
  const handleAddCake = (category: string) => {
    navigate(`/add-cake?category=${category}`);
    toast.success(`Creating new ${category} cake`);
  };

  if (!isAdmin) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
            <p className="mb-6">You need administrator privileges to view this page.</p>
            <Button onClick={() => navigate("/")}>Return to Home</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-playfair font-bold">Admin Dashboard</h1>
          <Button onClick={() => navigate("/")} variant="outline">Back to Site</Button>
        </div>

        <Tabs defaultValue="orders" value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="orders">Orders & Transactions</TabsTrigger>
            <TabsTrigger value="products">Manage Products</TabsTrigger>
            <TabsTrigger value="settings">Admin Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
              
              <Table>
                <TableCaption>A list of recent customer orders.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.customer}</TableCell>
                      <TableCell>{transaction.items}</TableCell>
                      <TableCell>{transaction.total}</TableCell>
                      <TableCell>
                        <span 
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            transaction.status === "Completed" ? "bg-green-100 text-green-800" : 
                            transaction.status === "Processing" ? "bg-blue-100 text-blue-800" : 
                            "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="products" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-6">Manage Product Catalog</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="border rounded-lg p-4 flex flex-col items-center justify-center bg-gradient-to-r from-pink-50 to-red-50">
                  <h3 className="text-lg font-medium mb-3">Birthday Cakes</h3>
                  <Button 
                    onClick={() => handleAddCake('birthday')}
                    className="bg-rose-500 hover:bg-rose-600"
                  >
                    <PlusCircle className="mr-1 h-4 w-4" />
                    Add Birthday Cake
                  </Button>
                </div>
                
                <div className="border rounded-lg p-4 flex flex-col items-center justify-center bg-gradient-to-r from-brown-50 to-amber-50">
                  <h3 className="text-lg font-medium mb-3">Chocolate Cakes</h3>
                  <Button 
                    onClick={() => handleAddCake('chocolate')}
                    className="bg-rose-500 hover:bg-rose-600"
                  >
                    <PlusCircle className="mr-1 h-4 w-4" />
                    Add Chocolate Cake
                  </Button>
                </div>
                
                <div className="border rounded-lg p-4 flex flex-col items-center justify-center bg-gradient-to-r from-yellow-50 to-orange-50">
                  <h3 className="text-lg font-medium mb-3">Cake Slices</h3>
                  <Button 
                    onClick={() => handleAddCake('slices')}
                    className="bg-rose-500 hover:bg-rose-600"
                  >
                    <PlusCircle className="mr-1 h-4 w-4" />
                    Add Cake Slice
                  </Button>
                </div>
                
                <div className="border rounded-lg p-4 flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
                  <h3 className="text-lg font-medium mb-3">Featured Cakes</h3>
                  <Button 
                    onClick={() => handleAddCake('featured')}
                    className="bg-rose-500 hover:bg-rose-600"
                  >
                    <PlusCircle className="mr-1 h-4 w-4" />
                    Add Featured Cake
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 text-gray-500 text-sm">
                <p>Use the buttons above to add new cake products to each category. You'll be able to upload images, set prices, and add descriptions.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Admin Settings</h2>
              
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Admin Account</h3>
                  <p className="text-sm text-gray-500 mb-4">Manage virtual admin credentials.</p>
                  <Button 
                    onClick={() => document.dispatchEvent(new CustomEvent('show-admin-credentials'))}
                    variant="outline"
                  >
                    View Admin Credentials
                  </Button>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Store Settings</h3>
                  <p className="text-sm text-gray-500 mb-4">Configure store operational parameters.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">Tax Rates</Button>
                    <Button variant="outline" className="justify-start">Shipping Options</Button>
                    <Button variant="outline" className="justify-start">Payment Methods</Button>
                    <Button variant="outline" className="justify-start">Store Hours</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
      <AdminCredentialsDisplay />
    </div>
  );
};

export default AdminDashboard;
