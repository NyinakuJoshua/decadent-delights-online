
import { Testimonial } from "@/data/testimonials";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          {testimonial.image ? (
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
              <span className="text-rose-500 font-semibold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < testimonial.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="ml-auto text-xs text-gray-500">
          {testimonial.date}
        </div>
      </div>
      <blockquote>
        <p className="text-gray-600 italic">"{testimonial.text}"</p>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
