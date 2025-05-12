
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface AddCakeButtonProps {
  category: 'birthday' | 'chocolate' | 'slices' | 'featured';
  className?: string;
}

const AddCakeButton = ({ category, className }: AddCakeButtonProps) => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  if (!isAdmin) return null;

  const handleAddCake = () => {
    // For now, just show a toast and navigate to a placeholder route
    // In a full implementation, this would open a form or navigate to a dedicated page
    toast.info(`Creating new ${category} cake`);
    navigate(`/add-cake?category=${category}`);
  };

  return (
    <Button 
      onClick={handleAddCake}
      className={`bg-rose-500 hover:bg-rose-600 text-white ${className}`}
      size="sm"
    >
      <PlusCircle className="mr-1 h-4 w-4" />
      Add Cake
    </Button>
  );
};

export default AddCakeButton;
