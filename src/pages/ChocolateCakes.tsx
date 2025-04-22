
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakeCard from "@/components/CakeCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getCakesByCategory } from "@/data/cakes";

const ChocolateCakes = () => {
  const chocolateCakes = getCakesByCategory("chocolate");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold mb-4">Chocolate Cakes</h1>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Indulge in our rich, decadent chocolate cakes crafted with premium cocoa and the finest ingredients. Perfect for chocolate lovers who appreciate exquisite taste.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chocolateCakes.map(cake => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>

          {chocolateCakes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No chocolate cakes available at the moment.</p>
              <Link to="/" className="text-rose-500 hover:text-rose-600">
                Go back to homepage
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Chocolate Facts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-playfair font-bold text-gray-900">Why Our Chocolate Cakes Are Special</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-500">1</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Premium Cocoa</h3>
              <p className="text-gray-600 text-center">
                We use only the finest cocoa beans sourced from ethical producers around the world, giving our chocolate cakes a rich and distinctive flavor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-500">2</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Perfect Moisture</h3>
              <p className="text-gray-600 text-center">
                Our special baking techniques ensure every chocolate cake has the perfect texture - moist and tender with just the right amount of density.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-500">3</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Artisanal Finishes</h3>
              <p className="text-gray-600 text-center">
                From ganache to buttercream, each cake is finished with handcrafted toppings made from scratch using traditional methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Craving Chocolate?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Don't wait to satisfy your chocolate cravings. Order one of our delectable chocolate cakes today!
          </p>
          <Link to="/order-form">
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
              Order Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChocolateCakes;
