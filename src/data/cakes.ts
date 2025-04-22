
export interface Cake {
  id: number;
  name: string;
  category: 'birthday' | 'chocolate' | 'slices' | 'featured';
  price: number;
  description: string;
  image: string;
  featured?: boolean;
  tags?: string[];
}

export const cakes: Cake[] = [
  {
    id: 1,
    name: "Classic Chocolate Cake",
    category: "chocolate",
    price: 38.99,
    description: "Rich chocolate sponge layered with smooth chocolate ganache, topped with chocolate shavings.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500&auto=format&fit=crop",
    featured: true,
    tags: ["popular", "bestseller"]
  },
  {
    id: 2,
    name: "Vanilla Birthday Celebration",
    category: "birthday",
    price: 42.99,
    description: "Moist vanilla sponge with buttercream frosting and rainbow sprinkles. Perfect for any celebration.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=500&auto=format&fit=crop",
    featured: true,
    tags: ["birthday", "celebration"]
  },
  {
    id: 3,
    name: "Red Velvet Slice",
    category: "slices",
    price: 6.99,
    description: "A generous slice of our famous red velvet cake with cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?q=80&w=500&auto=format&fit=crop",
    tags: ["popular"]
  },
  {
    id: 4,
    name: "Triple Chocolate Mousse",
    category: "chocolate",
    price: 45.99,
    description: "Layers of dark, milk, and white chocolate mousse on a chocolate sponge base.",
    image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=500&auto=format&fit=crop",
    featured: true,
    tags: ["luxury"]
  },
  {
    id: 5,
    name: "Lemon Drizzle Slice",
    category: "slices",
    price: 5.99,
    description: "A zesty lemon sponge slice drizzled with lemon syrup and topped with icing.",
    image: "https://images.unsplash.com/photo-1464195244916-405fa0a8763d?q=80&w=500&auto=format&fit=crop",
    tags: ["refreshing"]
  },
  {
    id: 6,
    name: "Princess Birthday Cake",
    category: "birthday",
    price: 48.99,
    description: "Pink vanilla sponge with buttercream roses and edible gold accents. A royal treat!",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=500&auto=format&fit=crop",
    tags: ["kids", "themed"]
  },
  {
    id: 7,
    name: "Dark Chocolate Truffle",
    category: "chocolate",
    price: 40.99,
    description: "Decadent dark chocolate cake with truffle center and mirror glaze finish.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500&auto=format&fit=crop",
    tags: ["rich", "dark"]
  },
  {
    id: 8,
    name: "Vanilla Raspberry Slice",
    category: "slices",
    price: 6.99,
    description: "Light vanilla sponge with layers of raspberry compote and vanilla bean cream.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=500&auto=format&fit=crop",
    tags: ["fruity"]
  },
  {
    id: 9,
    name: "Sports Theme Birthday Cake",
    category: "birthday",
    price: 50.99,
    description: "Customizable sports-themed cake, perfect for the sports enthusiast's special day.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=500&auto=format&fit=crop",
    tags: ["themed", "customizable"]
  },
  {
    id: 10,
    name: "Belgian Chocolate Mousse Slice",
    category: "slices",
    price: 7.99,
    description: "Indulgent Belgian chocolate mousse on a thin chocolate biscuit base.",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=500&auto=format&fit=crop",
    tags: ["premium"]
  },
  {
    id: 11,
    name: "Salted Caramel Chocolate Cake",
    category: "chocolate",
    price: 43.99,
    description: "Chocolate sponge with salted caramel filling and dark chocolate ganache.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=500&auto=format&fit=crop",
    tags: ["trending"]
  },
  {
    id: 12,
    name: "Number Cake",
    category: "birthday",
    price: 55.99,
    description: "Custom number-shaped cake with fresh berries and edible flowers. Specify your number when ordering.",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=500&auto=format&fit=crop",
    featured: true,
    tags: ["custom", "modern"]
  },
];

export const getFeaturesCakes = () => cakes.filter(cake => cake.featured);
export const getCakesByCategory = (category: string) => cakes.filter(cake => cake.category === category);
export const getCakeById = (id: number) => cakes.find(cake => cake.id === id);
