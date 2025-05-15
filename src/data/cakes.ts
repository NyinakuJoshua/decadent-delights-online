
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
    name: "Pink Birthday Celebration",
    category: "birthday",
    price: 42.99,
    description: "Beautiful pink buttercream cake with detailed piping and gold butterfly decorations. Perfect for elegant celebrations.",
    image: "/lovable-uploads/15a1bc8f-2bb3-4b47-989a-9171776857ce.png",
    featured: true,
    tags: ["birthday", "celebration"]
  },
  {
    id: 3,
    name: "Raspberry Chocolate Slice",
    category: "slices",
    price: 6.99,
    description: "Decadent chocolate cake slice with layers of raspberry mousse, topped with fresh raspberries and chocolate drizzle.",
    image: "/lovable-uploads/37107b8b-6b40-436f-b070-0aeda1ff4b37.png",
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
    name: "Luxury Opera Cake Slice",
    category: "slices",
    price: 7.99,
    description: "Elegant layered cake slice with chocolate, coffee buttercream and gold decoration.",
    image: "/lovable-uploads/2e5d14ef-e935-4771-80e8-767a07f4172d.png",
    tags: ["luxury", "premium"]
  },
  {
    id: 6,
    name: "Classic Birthday Cake",
    category: "birthday",
    price: 48.99,
    description: "Classic chocolate birthday cake with alternating chocolate and vanilla rosettes and a happy birthday plaque.",
    image: "/lovable-uploads/de39ad6a-b8b9-4bce-bbfd-a52561874f9b.png",
    tags: ["birthday", "classic"]
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
    name: "Chocolate Drip Birthday Cake",
    category: "birthday",
    price: 50.99,
    description: "White cake with chocolate drip, topped with chocolate bars and a gold 'Happy Birthday' topper.",
    image: "/lovable-uploads/d395245e-3991-487c-bb3b-cb4ccbcd29fe.png",
    tags: ["themed", "trendy"]
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
    name: "Caramel Birthday Cake",
    category: "birthday",
    price: 55.99,
    description: "Vanilla cake with caramel drizzle, whipped cream rosettes, and customizable birthday message.",
    image: "/lovable-uploads/30c6d68d-b130-41cf-be86-a04b443f8051.png",
    featured: true,
    tags: ["custom", "modern"]
  },
  {
    id: 13,
    name: "Chocolate Rose Cake",
    category: "chocolate",
    price: 52.99,
    description: "Elegant white cake with chocolate roses, gold accents and intricate piping details.",
    image: "/lovable-uploads/f4c4f5b1-609b-4ae1-9fed-c846ae598983.png",
    featured: true,
    tags: ["luxury", "elegant"]
  },
  {
    id: 14,
    name: "Valentine Hearts Cake",
    category: "birthday",
    price: 48.99,
    description: "White cake decorated with pink buttercream roses and red and pink fondant hearts - perfect for Valentine's Day birthdays.",
    image: "/lovable-uploads/43e41289-ae3a-40ba-9654-f96a97593cb5.png",
    tags: ["romantic", "themed"]
  },
  {
    id: 15,
    name: "Wedding Tier Cake",
    category: "featured",
    price: 120.99,
    description: "Elegant white tiered cake with red roses and pearl details. Perfect for weddings and special occasions.",
    image: "/lovable-uploads/8ebf2062-4ec0-4c26-a154-abe954f6e895.png",
    featured: true,
    tags: ["wedding", "luxury", "special occasion"]
  },
  {
    id: 16,
    name: "Pink Drip Birthday Cake",
    category: "birthday",
    price: 46.99,
    description: "Pink buttercream cake with chocolate drip, Oreo cookies and 'Happy Birthday' topper.",
    image: "/lovable-uploads/f47c16a0-48cb-4ead-b2d1-b06415c5ff7c.png",
    featured: true,
    tags: ["trendy", "birthday", "popular"]
  },
  {
    id: 17,
    name: "Chocolate Raspberry Cake",
    category: "chocolate",
    price: 49.99,
    description: "Rich chocolate cake with raspberry filling and chocolate ganache, topped with fresh raspberries.",
    image: "/lovable-uploads/14d940ef-14c2-4603-a8ae-1b757da3bfba.png",
    tags: ["fruity", "chocolate", "premium"]
  },
  {
    id: 18,
    name: "Red Velvet Heart Cake",
    category: "birthday",
    price: 54.99,
    description: "Heart-shaped red velvet cake with intricate piping details and fresh rose decorations.",
    image: "/lovable-uploads/19f7ffbc-8709-4cff-b549-3968c9d77bd8.png",
    featured: true,
    tags: ["romantic", "special"]
  },
  {
    id: 19,
    name: "Chocolate Heart Delight",
    category: "birthday",
    price: 57.99,
    description: "Heart-shaped chocolate cake with elaborate chocolate decorations and romantic design elements.",
    image: "/lovable-uploads/529d6b3d-8001-46ad-a033-d17c968eb9dc.png",
    featured: true,
    tags: ["romantic", "premium", "special occasion"]
  },
  {
    id: 20,
    name: "Rose Heart Love Cake",
    category: "birthday",
    price: 53.99,
    description: "Heart-shaped cake with elegant red and white fondant rose decorations and intricate piping.",
    image: "/lovable-uploads/ea192ad2-59d3-43c8-a788-a91d211ce931.png", 
    tags: ["romantic", "celebration"]
  },
  {
    id: 21,
    name: "Pink Heart Valentine Cake",
    category: "birthday",
    price: 46.99,
    description: "White cake with pink ombré frosting, chocolate drip, and heart decorations.",
    image: "/lovable-uploads/84fe27e9-7697-427b-9d00-a092e95ab8f5.png",
    tags: ["romantic", "trendy"]
  },
  {
    id: 22, 
    name: "Floral Heart Cake",
    category: "birthday",
    price: 51.99,
    description: "White cake with floral fondant decorations and elegant heart motif design.",
    image: "/lovable-uploads/5014038b-b1ad-44a6-a583-530807cc1f7a.png",
    tags: ["elegant", "floral"]
  },
  {
    id: 23,
    name: "Luxury Chocolate Layered Cake",
    category: "chocolate",
    price: 59.99,
    description: "Premium chocolate layer cake with rich chocolate ganache and fresh berries.",
    image: "/lovable-uploads/57b7f730-400b-4343-94e7-ccd9221ae648.png",
    featured: true,
    tags: ["premium", "chocolate"]
  },
  {
    id: 24,
    name: "Chocolate Vanilla Layered Cake",
    category: "chocolate",
    price: 48.99,
    description: "Alternating layers of chocolate and vanilla cake with decadent chocolate frosting.",
    image: "/lovable-uploads/ece06b17-52f6-41da-a8f8-e04c1b586026.png",
    tags: ["classic", "bestseller"]
  }
];

export const getFeaturesCakes = () => cakes.filter(cake => cake.featured);
export const getCakesByCategory = (category: string) => cakes.filter(cake => cake.category === category);
export const getCakeById = (id: number) => cakes.find(cake => cake.id === id);
