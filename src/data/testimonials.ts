
export interface Testimonial {
  id: number;
  name: string;
  image?: string;
  text: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "The birthday cake I ordered was absolutely stunning! Not only did it look beautiful, but it tasted amazing too. Everyone at the party was impressed.",
    rating: 5,
    date: "March 15, 2024"
  },
  {
    id: 2,
    name: "Michael Carter",
    text: "I've ordered their chocolate cake three times now, and it's consistently delicious. Rich flavor without being too sweet. Delivery was also prompt and the cake arrived in perfect condition.",
    rating: 5,
    date: "February 8, 2024"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    text: "Ordered cake slices for a small office gathering and they were a hit! The variety was perfect and everyone found something they loved. Will definitely order again.",
    rating: 4,
    date: "April 2, 2024"
  },
  {
    id: 4,
    name: "David Wong",
    text: "Their Princess Cake design for my daughter's birthday was exactly what we wanted. The cake was moist and the frosting was perfect. My daughter and her friends loved it!",
    rating: 5,
    date: "January 20, 2024"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    text: "Elegant designs and exceptional flavors. The Salted Caramel Chocolate cake was to die for! The online ordering process was also very smooth.",
    rating: 5,
    date: "March 30, 2024"
  }
];
