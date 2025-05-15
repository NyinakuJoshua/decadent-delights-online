
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Image 1 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/f47c16a0-48cb-4ead-b2d1-b06415c5ff7c.png" 
                alt="Pink Birthday Cake with Chocolate Decorations" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Pink Striped Birthday Cake</h3>
                <p className="text-sm text-gray-500">Pink buttercream with chocolate decorations and "Happy Birthday" topper</p>
              </div>
            </div>

            {/* Gallery Image 2 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/d395245e-3991-487c-bb3b-cb4ccbcd29fe.png" 
                alt="White Chocolate Drip Birthday Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Chocolate Drip Celebration Cake</h3>
                <p className="text-sm text-gray-500">White cake with chocolate drip, gold birthday topper and chocolate decorations</p>
              </div>
            </div>

            {/* Gallery Image 3 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/de39ad6a-b8b9-4bce-bbfd-a52561874f9b.png" 
                alt="Chocolate Birthday Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Classic Chocolate Birthday Cake</h3>
                <p className="text-sm text-gray-500">Chocolate cake with alternating white and chocolate frosting rosettes</p>
              </div>
            </div>

            {/* Gallery Image 4 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/43e41289-ae3a-40ba-9654-f96a97593cb5.png" 
                alt="Valentine Heart Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Heart-Themed Celebration Cake</h3>
                <p className="text-sm text-gray-500">White cake with pink and red hearts, perfect for Valentine's birthdays</p>
              </div>
            </div>

            {/* Gallery Image 5 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/30c6d68d-b130-41cf-be86-a04b443f8051.png" 
                alt="Caramel Drip Birthday Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Caramel Drizzle Birthday Cake</h3>
                <p className="text-sm text-gray-500">White cake with caramel drip and personalized birthday message</p>
              </div>
            </div>

            {/* Gallery Image 6 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/15a1bc8f-2bb3-4b47-989a-9171776857ce.png" 
                alt="Pink Butterfly Cake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Pink Butterfly Birthday Cake</h3>
                <p className="text-sm text-gray-500">Pink frosting with elegant gold butterfly decorations</p>
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
