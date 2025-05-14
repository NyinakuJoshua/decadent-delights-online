
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface AdminCredentials {
  email: string;
  password: string;
  name: string;
}

export const createVirtualAdmin = async (): Promise<AdminCredentials | null> => {
  const adminCredentials: AdminCredentials = {
    email: "admin@decadentdelights.com",
    password: "Admin123!",
    name: "Virtual Admin"
  };
  
  try {
    // First check if the admin already exists
    const { data: existingUsers, error: checkError } = await supabase.auth
      .admin.listUsers();
    
    if (checkError) {
      console.error("Error checking for existing admin:", checkError);
      return null;
    }
    
    // Check if our admin email already exists in the list of users
    if (existingUsers && existingUsers.users.some(user => 
      user.email === adminCredentials.email
    )) {
      console.log("Virtual admin account already exists");
      return adminCredentials;
    }
    
    // Create the user account
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: adminCredentials.email,
      password: adminCredentials.password,
      options: {
        data: {
          full_name: adminCredentials.name,
        },
      }
    });
    
    if (authError) {
      console.error("Error creating admin user:", authError);
      return null;
    }
    
    if (!authData.user) {
      console.error("Failed to create admin user account");
      return null;
    }
    
    // Register as admin
    const { error: adminError } = await supabase
      .from('admin_users')
      .insert({
        user_id: authData.user.id,
        name: adminCredentials.name,
        admin_id: 'PLACEHOLDER', // Will be overwritten by the database trigger
      });
    
    if (adminError) {
      console.error("Error creating admin record:", adminError);
      return null;
    }
    
    console.log("Virtual admin account created successfully!");
    return adminCredentials;
  } catch (error) {
    console.error("Unexpected error creating admin:", error);
    return null;
  }
};
