// sections/FeaturedProperties.tsx
import PropertyCard from "@/sections/PropertyCard";

const properties = [
  {
    image: "/home/featured_1.png",
    title: "Golden Bay Penthouse",
  },
  {
    image: "/home/featured_2.png",
    title: "Riverbend Estates",
  },
  {
    image: "/home/featured_3.png",
    title: "Maple Grove Cottage",
  },
  {
    image: "/home/featured_4.png",
    title: "Luxury Heights Mansion",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20">
      <p className="text-sm text-gray-500 mb-2">🏡 Exclusive Listings</p>
      <h2 className="text-3xl font-semibold mb-10">Featured Properties</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            title={property.title}
          />
        ))}
      </div>
    </section>
  );
}
