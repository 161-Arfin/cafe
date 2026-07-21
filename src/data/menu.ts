import type { MenuCategory } from "@/types";

export const menuCategories: MenuCategory[] = [
  {
    id: "espresso",
    title: "Espresso",
    subtitle: "Klasik, bersih, dan selalu bisa diandalkan.",
    items: [
      { name: "Espresso", description: "House blend dengan crema tebal dan clean finish.", price: "Rp15K" },
      { name: "Americano", description: "Espresso dan air; tersedia regular atau large.", price: "Rp17K / 24K" },
      { name: "Caffè Latte", description: "Espresso dengan steamed milk yang lembut.", price: "Rp18K / 24K", featured: true },
      { name: "Cappuccino", description: "Espresso, susu, dan microfoam yang seimbang.", price: "Rp18K / 24K" },
      { name: "Dirty Latte", description: "Ristretto berlapis susu dingin yang creamy.", price: "Rp22K / 32K" },
      { name: "Affogato", description: "Ristretto dengan es krim vanila.", price: "Rp20K / 30K" },
    ],
  },
  {
    id: "signature",
    title: "Signature",
    subtitle: "Rasa khas LYON’S yang tidak kamu temukan di tempat lain.",
    items: [
      { name: "Butterscotch Seasalt Caramel", description: "Butterscotch creamy, karamel, dan sentuhan sea salt.", price: "Rp27K", featured: true },
      { name: "White Rumbollyon’s", description: "Latte creamy dengan aroma rum dan karamel hangat.", price: "Rp27K" },
      { name: "Havilla on Cloud", description: "Vanilla latte dengan lapisan foam lembut.", price: "Rp27K" },
      { name: "Blue Mocha", description: "Mocha bold dengan sentuhan blueberry.", price: "Rp27K" },
      { name: "Crème Brûlée", description: "Kopi susu karamel dengan permukaan gula yang ditorch.", price: "Rp28K", featured: true },
      { name: "Palm Sugar Latte", description: "Espresso, susu creamy, dan manis gula aren.", price: "Rp22K / 24K" },
    ],
  },
  {
    id: "cold-brew",
    title: "Caffeine Based",
    subtitle: "Cold brew & filter coffee",
    items: [
      { name: "O.G Cold Brew", description: "Smooth, mellow, dan rendah acidity.", price: "Rp22K", featured: true },
      { name: "Pink Paradise", description: "Cold brew dengan mint dan strawberry pulp.", price: "Rp25K" },
      { name: "Summer Blue", description: "Cold brew, blueberry pulp, dan mint.", price: "Rp25K" },
      { name: "Mont Blanc", description: "Cold brew yuzu dengan creamy cloud.", price: "Rp26K" },
      { name: "Lemon Blitz", description: "Cold brew dengan lemonade yuzu yang segar.", price: "Rp24K" },
      { name: "V60 / Japanese", description: "Manual brew hot atau langsung di atas es.", price: "Rp28K / 29K" },
    ],
  },
  {
    id: "refreshers",
    title: "House Refreshers",
    subtitle: "Creamy, chocolate & white mocktail",
    items: [
      { name: "Chocolate", description: "Minuman dark chocolate yang kaya rasa.", price: "Rp24K / 26K" },
      { name: "Matcha", description: "Premium matcha yang dipadukan dengan susu.", price: "Rp24K / 26K", featured: true },
      { name: "Red Velvet", description: "Minuman creamy dengan rasa red velvet dan cocoa.", price: "Rp24K / 26K" },
      { name: "Cookies N Cream", description: "Minuman berbasis susu dengan cookie crumbles.", price: "Rp28K" },
      { name: "O.G Chocolate", description: "Cokelat klasik dengan tekstur creamy.", price: "Rp24K / 26K" },
      { name: "Yuzu Milk Cloud", description: "Sparkling milk drink dengan rasa yuzu.", price: "Rp24K" },
      { name: "Blue Milky Cloud", description: "Sparkling milk drink dengan rasa blueberry.", price: "Rp25K" },
      { name: "Mango Milk Cloud", description: "Sparkling milk drink dengan rasa harum manis.", price: "Rp26K" },
    ],
  },
  {
    id: "food",
    title: "Mains & Sides",
    subtitle: "Main course, pasta & snacks",
    items: [
      { name: "American Breakfast", description: "Telur, grilled chicken, kentang, jamur, dan sayuran.", price: "Rp33K", featured: true },
      { name: "Chicken Parmigiana", description: "Breaded chicken, tomato sauce, dan mozzarella.", price: "Rp38K" },
      { name: "Nashville Chicken with Rice", description: "Crispy chicken, Nashville hot sauce, dan nasi.", price: "Rp36K" },
      { name: "Spaghetti Carbonara", description: "Creamy sauce, smoked beef, dan parmesan.", price: "Rp32K" },
      { name: "Club Sandwich", description: "Sandwich ayam, telur, sayuran, dan kentang goreng.", price: "Rp33K" },
      { name: "Mix Platter", description: "Wings, kentang goreng, sosis, dan saus.", price: "Rp30K" },
    ],
  },
];
