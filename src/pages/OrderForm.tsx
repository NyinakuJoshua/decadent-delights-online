
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderForm from "@/components/OrderForm";

const OrderFormPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Order Form Header */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Order Now</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Complete the form below to place your order. CICIS BAKERY team will ensure your delicious cake is delivered fresh and on time for your special occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OrderForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderFormPage;
