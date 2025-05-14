
import { Cake } from "@/data/cakes";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CakeCardProps {
  cake: Cake;
}

const CakeCard = ({ cake }: CakeCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(cake, 1);
    toast.success(`${cake.name} added to cart!`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/cake/${cake.id}`}>
        <div className="h-56 overflow-hidden">
          <AspectRatio ratio={4/3} className="w-full h-full">
            <img 
              src={cake.image}
              alt={cake.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </AspectRatio>
        </div>
      </Link>
      <div className="p-5">
        {cake.tags && cake.tags.includes("bestseller") && (
          <span className="inline-block bg-rose-100 text-rose-600 text-xs font-semibold px-2 py-1 rounded-full mb-2">
            Bestseller
          </span>
        )}
        <Link to={`/cake/${cake.id}`}>
          <h3 className="font-playfair text-lg font-semibold mb-1 text-gray-900 hover:text-rose-500 transition-colors">
            {cake.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{cake.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-semibold">${cake.price.toFixed(2)}</span>
          <Button 
            size="sm" 
            className="bg-rose-500 hover:bg-rose-600 text-white flex items-center"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-1 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
