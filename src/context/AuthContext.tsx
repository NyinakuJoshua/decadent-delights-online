
import { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  signOut: () => Promise<void>;
  loading: boolean;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  signOut: async () => {},
  loading: true,
  isAdmin: false
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth state changed:", event);
        setSession(session);
        setUser(session?.user ?? null);
        
        // Check if user is admin using the admin_users table
        if (session?.user) {
          try {
            const { data, error } = await supabase
              .from('admin_users')
              .select('admin_id')
              .eq('user_id', session.user.id)
              .maybeSingle();
            
            if (error) {
              console.error("Error checking admin status:", error);
              setIsAdmin(false);
            } else {
              setIsAdmin(!!data);
              if (data) {
                console.log("User is an admin with ID:", data.admin_id);
              }
            }
          } catch (error) {
            console.error("Error checking admin status:", error);
            setIsAdmin(false);
          }
        } else {
          setIsAdmin(false);
        }
        
        setLoading(false);
        
        // Show appropriate toasts for auth events
        if (event === 'SIGNED_IN') {
          console.log("User signed in successfully");
        } else if (event === 'SIGNED_OUT') {
          console.log("User signed out");
        } else if (event === 'TOKEN_REFRESHED') {
          console.log("Auth token refreshed");
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      console.log("Initial session check:", session ? "logged in" : "no session");
      setSession(session);
      setUser(session?.user ?? null);
      
      // Check if user is admin
      if (session?.user) {
        try {
          const { data, error } = await supabase
            .from('admin_users')
            .select('admin_id')
            .eq('user_id', session.user.id)
            .maybeSingle();
          
          if (error) {
            console.error("Error checking admin status:", error);
            setIsAdmin(false);
          } else {
            setIsAdmin(!!data);
            if (data) {
              console.log("User is an admin with ID:", data.admin_id);
            }
          }
        } catch (error) {
          console.error("Error checking admin status:", error);
          setIsAdmin(false);
        }
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, signOut, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
