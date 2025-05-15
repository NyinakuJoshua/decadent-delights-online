
import { supabase } from "@/integrations/supabase/client";

// Admin credentials for the app
export const adminCredentials = {
  email: "admin@decadentdelights.com",
  password: "Admin123!",
  name: "System Administrator"
};

/**
 * Creates a virtual admin account for demo purposes
 * Only used in development
 */
export const createVirtualAdmin = async () => {
  console.log("Checking for existing admin account...");
  
  try {
    // First check if the admin already exists
    const { data, error: checkError } = await supabase.auth
      .admin.listUsers();
    
    if (checkError) {
      console.error("Error checking for existing admin:", checkError);
      throw checkError;
    }
    
    // Check if our admin email already exists in the list of users
    if (data && data.users && data.users.some((user: any) => 
      user.email === adminCredentials.email
    )) {
      console.log("Virtual admin account already exists");
      return;
    }

    // Create the admin user
    console.log("Creating virtual admin account...");
    const { data: adminData, error: adminError } = await supabase.auth.admin
      .createUser({
        email: adminCredentials.email,
        password: adminCredentials.password,
        email_confirm: true,
        user_metadata: {
          name: adminCredentials.name,
          is_admin: true
        }
      });

    if (adminError) {
      console.error("Failed to create admin account:", adminError);
      throw adminError;
    }

    // Add entry to the admin_users table
    if (adminData && adminData.user) {
      const { error: dbError } = await supabase
        .from('admin_users')
        .insert({
          user_id: adminData.user.id,
          name: adminCredentials.name
        });

      if (dbError) {
        console.error("Failed to add admin to admin_users table:", dbError);
        throw dbError;
      }
      
      console.log("Virtual admin account created successfully");
    }
  } catch (error) {
    console.error("Error creating virtual admin:", error);
    throw error;
  }
};
