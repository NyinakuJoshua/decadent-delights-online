
import { useState } from "react";
import { Link } from "react-router-dom";
import { CakeSlice, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakeCard from "@/components/CakeCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { getFeaturesCakes } from "@/data/cakes";
import { testimonials } from "@/data/testimonials";

const Index = () => {
  const featuredCakes = getFeaturesCakes();
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-rose-50 to-rose-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-4">
                Exquisite Cakes for Every Occasion
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Handcrafted with love using the finest ingredients. Elevate your celebrations with our artisanal cakes.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/order-form">
                  <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                    Order Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white p-4 rounded-lg shadow-xl transform rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" 
                  alt="Luxurious Chocolate Cake" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-3 rounded-lg shadow-lg transform -rotate-6 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=300&auto=format&fit=crop" 
                  alt="Birthday Cake" 
                  className="rounded-lg w-40 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900">Our Cake Categories</h2>
            <p className="mt-4 text-lg text-gray-600">Explore our delicious range of cakes for any occasion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Birthday Cakes",
                image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=500&auto=format&fit=crop",
                description: "Custom cakes to make your birthday celebrations unforgettable.",
                link: "/birthday-cakes"
              },
              {
                title: "Chocolate Cakes",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500&auto=format&fit=crop",
                description: "Indulge in our rich and decadent chocolate creations.",
                link: "/chocolate-cakes"
              },
              {
                title: "Cake Slices",
                image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?q=80&w=500&auto=format&fit=crop",
                description: "Perfect individual portions for a sweet treat anytime.",
                link: "/cake-slices"
              }
            ].map((category, index) => (
              <Link 
                to={category.link}
                key={index}
                className="block group" 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <div className="h-64 bg-gray-200">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-playfair font-bold text-white">{category.title}</h3>
                    <p className="text-white/90 mt-2">{category.description}</p>
                    <div className={`mt-4 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-2' : 'translate-x-0'}`}>
                      <span className="text-rose-300 flex items-center">
                        View Collection <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-900">Featured Cakes</h2>
              <p className="mt-2 text-lg text-gray-600">Our most popular and loved creations</p>
            </div>
            <Link to="/order-form">
              <Button className="bg-rose-500 hover:bg-rose-600">Order Now</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCakes.map(cake => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Crafting Sweet Memories Since 2010</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Decadent Delights, we believe that every celebration deserves a cake that's as unique as the occasion itself. Our master bakers use only the finest ingredients to create edible works of art that taste as good as they look.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From birthdays to weddings, anniversaries to corporate events, our cakes are crafted with passion, precision, and a whole lot of love.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=500&auto=format&fit=crop" 
                    alt="Baker decorating cake" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1464195244916-405fa0a8763d?q=80&w=500&auto=format&fit=crop" 
                    alt="Cake preparation" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1551879400-111a9087cd86?q=80&w=500&auto=format&fit=crop" 
                    alt="Pastry chef" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=500&auto=format&fit=crop" 
                    alt="Baking ingredients" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CakeSlice className="h-8 w-8 text-rose-500 mx-auto mb-4" />
            <h2 className="text-3xl font-playfair font-bold text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-rose-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Ready to Sweeten Your Day?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Order now and experience the magic of our handcrafted cakes. Perfect for any occasion or just because you deserve a treat!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/order-form">
              <Button size="lg" variant="default" className="bg-white text-rose-500 hover:bg-gray-100">
                Place an Order
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-rose-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
