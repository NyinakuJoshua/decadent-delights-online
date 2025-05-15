
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakeCard from "@/components/CakeCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getCakesByCategory } from "@/data/cakes";

const BirthdayCakes = () => {
  const birthdayCakes = getCakesByCategory("birthday");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Birthday Cakes</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Make your special day unforgettable with our exquisite range of birthday cakes. From classic vanilla to custom themed designs, we've got the perfect centerpiece for your celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {birthdayCakes.map(cake => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>

          {birthdayCakes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No birthday cakes available at the moment.</p>
              <Link to="/" className="text-rose-500 hover:text-rose-600">
                Go back to homepage
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Featured Birthday Cakes Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6 text-center">Featured Birthday Cake Designs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First row of gallery images */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/84fe27e9-7697-427b-9d00-a092e95ab8f5.png" 
                alt="Pink Heart Valentine Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Pink Heart Valentine Cake</h3>
                <p className="text-sm text-gray-500">Pink ombré cake with chocolate drip and heart decorations</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/529d6b3d-8001-46ad-a033-d17c968eb9dc.png" 
                alt="Chocolate Heart Delight" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Chocolate Heart Delight</h3>
                <p className="text-sm text-gray-500">Elegant heart-shaped chocolate cake with detailed decorations</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/5014038b-b1ad-44a6-a583-530807cc1f7a.png" 
                alt="Floral Heart Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Floral Heart Cake</h3>
                <p className="text-sm text-gray-500">White cake with delicate floral details and heart motif</p>
              </div>
            </div>
            
            {/* Second row of gallery images */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/19f7ffbc-8709-4cff-b549-3968c9d77bd8.png" 
                alt="Red Velvet Heart Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Red Velvet Heart Cake</h3>
                <p className="text-sm text-gray-500">Heart-shaped red cake with intricate piping and flowers</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/ea192ad2-59d3-43c8-a788-a91d211ce931.png" 
                alt="Rose Heart Love Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Rose Heart Love Cake</h3>
                <p className="text-sm text-gray-500">Heart-shaped cake with elegant red and white rose decorations</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/2f4132aa-ee8b-48a9-b0b8-71793312d780.png" 
                alt="Pink Striped Birthday Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Pink Striped Birthday Cake</h3>
                <p className="text-sm text-gray-500">Two-tier pink cake with chocolate drip and gold decorations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-3">Need a Custom Birthday Cake?</h2>
              <p className="text-gray-600">
                We specialize in creating personalized birthday cakes tailored to your specific requirements. Whether it's a character theme, photo cake, or unique flavor combination, we can bring your vision to life.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Link to="/order-form">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                  Request a Custom Cake
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BirthdayCakes;
