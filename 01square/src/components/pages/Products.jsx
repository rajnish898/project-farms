import ProductCard from "../ProductCard";

export default function Products() {
  const items = [
    { name: "Mango", img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba" },
    { name: "Litchi", img: "https://images.unsplash.com/photo-1592928302636-c83cf1c82c80" },
    { name: "Coconut", img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc" },
    { name: "Vegetables", img: "https://images.unsplash.com/photo-1542838132-92c53300491e" },
    { name: "Banana", img: "https://images.unsplash.com/photo-1574226516831-e1dff420e43b" },
    { name: "Tomato", img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337" },
    { name: "Potato", img: "https://images.unsplash.com/photo-1582515073490-dc6f1d8c3c6b" },
    { name: "Onion", img: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae" },
    { name: "Apple", img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce" },
    { name: "Grapes", img: "https://images.unsplash.com/photo-1519183071298-a2962be96c0f" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}