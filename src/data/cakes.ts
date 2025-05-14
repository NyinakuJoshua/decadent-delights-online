
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
    image: "/lovable-uploads/dd0355a0-1b23-4901-8a7b-6e66fc6569b1.png",
    featured: true,
    tags: ["popular", "bestseller"]
  },
  {
    id: 2,
    name: "Vanilla Birthday Celebration",
    category: "birthday",
    price: 42.99,
    description: "Moist vanilla sponge with buttercream frosting and rainbow sprinkles. Perfect for any celebration.",
    image: "/lovable-uploads/8ac5b547-6d38-4089-860b-90d33ee5a818.png",
    featured: true,
    tags: ["birthday", "celebration"]
  },
  {
    id: 3,
    name: "Red Velvet Slice",
    category: "slices",
    price: 6.99,
    description: "A generous slice of our famous red velvet cake with cream cheese frosting.",
    image: "/lovable-uploads/714dde5b-9800-4c38-82e6-7a1488b4f5b6.png",
    tags: ["popular"]
  },
  {
    id: 4,
    name: "Triple Chocolate Mousse",
    category: "chocolate",
    price: 45.99,
    description: "Layers of dark, milk, and white chocolate mousse on a chocolate sponge base.",
    image: "/lovable-uploads/437ff464-4dd9-4ddc-82a6-84530e1244a6.png",
    featured: true,
    tags: ["luxury"]
  },
  {
    id: 5,
    name: "Lemon Drizzle Slice",
    category: "slices",
    price: 5.99,
    description: "A zesty lemon sponge slice drizzled with lemon syrup and topped with icing.",
    image: "/lovable-uploads/399c19f6-1d89-4f63-97a0-fc17b2f1f91d.png",
    tags: ["refreshing"]
  },
  {
    id: 6,
    name: "Princess Birthday Cake",
    category: "birthday",
    price: 48.99,
    description: "Pink vanilla sponge with buttercream roses and edible gold accents. A royal treat!",
    image: "/lovable-uploads/e16e2656-a1a3-4569-9e06-9d2479d652bb.png",
    tags: ["kids", "themed"]
  },
  {
    id: 7,
    name: "Dark Chocolate Truffle",
    category: "chocolate",
    price: 40.99,
    description: "Decadent dark chocolate cake with truffle center and mirror glaze finish.",
    image: "/lovable-uploads/72a88c0a-a2c1-434f-a18f-4383e9fca304.png",
    tags: ["rich", "dark"]
  },
  {
    id: 8,
    name: "Vanilla Raspberry Slice",
    category: "slices",
    price: 6.99,
    description: "Light vanilla sponge with layers of raspberry compote and vanilla bean cream.",
    image: "/lovable-uploads/f2e8aa9f-fef6-455f-ac02-953f1166c4dd.png",
    tags: ["fruity"]
  },
  {
    id: 9,
    name: "Sports Theme Birthday Cake",
    category: "birthday",
    price: 50.99,
    description: "Customizable sports-themed cake, perfect for the sports enthusiast's special day.",
    image: "/lovable-uploads/74a6a85c-3534-4e6d-9b96-e65ee61bda04.png",
    tags: ["themed", "customizable"]
  },
  {
    id: 10,
    name: "Belgian Chocolate Mousse Slice",
    category: "slices",
    price: 7.99,
    description: "Indulgent Belgian chocolate mousse on a thin chocolate biscuit base.",
    image: "/lovable-uploads/714dde5b-9800-4c38-82e6-7a1488b4f5b6.png",
    tags: ["premium"]
  },
  {
    id: 11,
    name: "Salted Caramel Chocolate Cake",
    category: "chocolate",
    price: 43.99,
    description: "Chocolate sponge with salted caramel filling and dark chocolate ganache.",
    image: "/lovable-uploads/fecd67ca-cbe0-42ed-b9cb-1b10c4dc79a3.png",
    tags: ["trending"]
  },
  {
    id: 12,
    name: "Number Cake",
    category: "birthday",
    price: 55.99,
    description: "Custom number-shaped cake with fresh berries and edible flowers. Specify your number when ordering.",
    image: "/lovable-uploads/b32403c7-b157-4122-8382-34fc73513680.png",
    featured: true,
    tags: ["custom", "modern"]
  },
  {
    id: 13,
    name: "Cookies and Cream Cake",
    category: "chocolate",
    price: 44.99,
    description: "Delicious chocolate cake with cookies and cream frosting, topped with chocolate cookies and gold accents.",
    image: "/lovable-uploads/289d3015-4b37-4cc5-9455-b622f108ea75.png",
    featured: true,
    tags: ["popular", "cookies"]
  },
  {
    id: 14,
    name: "Fruit Cheesecake",
    category: "slices",
    price: 8.99,
    description: "Creamy cheesecake topped with an assortment of fresh seasonal fruits.",
    image: "/lovable-uploads/dfe3f2fa-1dca-4598-826d-514879646e65.png",
    tags: ["fruity", "premium"]
  }
];

export const getFeaturesCakes = () => cakes.filter(cake => cake.featured);
export const getCakesByCategory = (category: string) => cakes.filter(cake => cake.category === category);
export const getCakeById = (id: number) => cakes.find(cake => cake.id === id);
