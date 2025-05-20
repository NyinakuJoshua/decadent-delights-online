
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { adminCredentials } from "@/utils/setupAdmin";
import { X } from "lucide-react";

const AdminCredentialsDisplay = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open modal when custom event is triggered
    const handleShowCredentials = () => setIsOpen(true);
    document.addEventListener("show-admin-credentials", handleShowCredentials);

    return () => {
      document.removeEventListener("show-admin-credentials", handleShowCredentials);
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-lg font-semibold">Admin Credentials</DialogTitle>
          <DialogDescription>
            Use these credentials to access the admin dashboard.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          <div>
            <p className="text-sm font-medium mb-1">Email:</p>
            <div className="flex items-center">
              <code className="bg-gray-100 p-2 rounded flex-1 text-sm">
                {adminCredentials.email}
              </code>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigator.clipboard.writeText(adminCredentials.email)}
                className="ml-2"
              >
                Copy
              </Button>
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-1">Password:</p>
            <div className="flex items-center">
              <code className="bg-gray-100 p-2 rounded flex-1 text-sm">
                {adminCredentials.password}
              </code>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigator.clipboard.writeText(adminCredentials.password)}
                className="ml-2"
              >
                Copy
              </Button>
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-1">Name:</p>
            <code className="bg-gray-100 p-2 rounded block text-sm">
              {adminCredentials.name}
            </code>
          </div>
        </div>
        
        <DialogFooter className="flex sm:justify-between">
          <p className="text-xs text-gray-500">
            These credentials are for demonstration purposes only.
          </p>
          <Button 
            variant="default" 
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdminCredentialsDisplay;
