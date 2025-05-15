
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { adminCredentials, createVirtualAdmin } from "@/utils/setupAdmin";
import { toast } from "sonner";

const AdminCredentialsDisplay = () => {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const hasShownCredentials = localStorage.getItem("admin_credentials_shown");
    
    if (!hasShownCredentials) {
      const setupAdmin = async () => {
        try {
          await createVirtualAdmin();
          setOpen(true);
          localStorage.setItem("admin_credentials_shown", "true");
        } catch (error) {
          console.error("Failed to create admin:", error);
          toast.error("Failed to create admin account");
        }
      };
      
      setupAdmin();
    }
  }, []);
  
  const handleCopyToClipboard = () => {
    const text = `Email: ${adminCredentials.email}\nPassword: ${adminCredentials.password}`;
    navigator.clipboard.writeText(text)
      .then(() => toast.success("Admin credentials copied to clipboard"))
      .catch(() => toast.error("Failed to copy credentials"));
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Admin Credentials</DialogTitle>
          <DialogDescription>
            Use these credentials to log in as an administrator.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="font-semibold">Email:</div>
            <div className="col-span-3">{adminCredentials.email}</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="font-semibold">Password:</div>
            <div className="col-span-3">{adminCredentials.password}</div>
          </div>
        </div>
        
        <DialogFooter className="flex-col sm:flex-row sm:justify-between">
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button type="button" onClick={handleCopyToClipboard}>
            Copy to Clipboard
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdminCredentialsDisplay;
