
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
    const { data: userData, error: userError } = await supabase.auth
      .signInWithPassword({
        email: adminCredentials.email,
        password: adminCredentials.password
      });
    
    if (!userError && userData.user) {
      console.log("Virtual admin account already exists");
      return;
    }
    
    // Create the admin user
    console.log("Creating virtual admin account...");
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: adminCredentials.email,
      password: adminCredentials.password,
      options: {
        data: {
          full_name: adminCredentials.name,
        },
        emailRedirectTo: `${window.location.origin}/auth`
      }
    });

    if (authError) {
      console.error("Failed to create admin account:", authError);
      throw authError;
    }

    // Add entry to the admin_users table
    if (authData && authData.user) {
      const adminId = `ADM-${Math.floor(10000 + Math.random() * 90000)}`;
      
      const { error: dbError } = await supabase
        .from('admin_users')
        .insert({
          user_id: authData.user.id,
          name: adminCredentials.name,
          email: adminCredentials.email,
          admin_id: adminId
        });

      if (dbError) {
        console.error("Failed to add admin to admin_users table:", dbError);
        throw dbError;
      }
      
      console.log("Virtual admin account created successfully with admin ID:", adminId);
    }
  } catch (error) {
    console.error("Error creating virtual admin:", error);
    throw error;
  }
};
