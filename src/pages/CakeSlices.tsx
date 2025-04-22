
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakeCard from "@/components/CakeCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getCakesByCategory } from "@/data/cakes";

const CakeSlices = () => {
  const cakeSlices = getCakesByCategory("slices");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Cake Slices</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Perfect for small indulgences or sampling our exquisite range. Our cake slices offer the same quality and taste as our full cakes in a convenient single-serving format.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakeSlices.map(cake => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>

          {cakeSlices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No cake slices available at the moment.</p>
              <Link to="/" className="text-rose-500 hover:text-rose-600">
                Go back to homepage
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Box Sets Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1547414368-ac947d00b91d?q=80&w=1170&auto=format&fit=crop" 
                  alt="Cake slice box set" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Box Sets Now Available</h2>
                <p className="text-gray-700 mb-6">
                  Can't decide on just one flavor? Our cake slice box sets let you try a variety of our most popular cakes. Perfect for office gatherings, family dessert nights, or as a thoughtful gift.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  <li>Choose 4, 6, or 9 slices in a beautiful gift box</li>
                  <li>Mix and match your favorite flavors</li>
                  <li>Special dietary options available (gluten-free, vegan)</li>
                  <li>Perfect for sampling before ordering a full cake</li>
                </ul>
                <Link to="/order-form">
                  <Button className="bg-rose-500 hover:bg-rose-600">
                    Order a Box Set
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CakeSlices;
