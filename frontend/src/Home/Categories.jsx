import { Laptop, Monitor, Cpu, Headphones, Smartphone, Wifi, ChevronRight } from "lucide-react";

export default function Categories() {
  const categories = [
    { icon: Laptop, name: "Laptops", count: "24 Products" },
    { icon: Monitor, name: "Monitors", count: "18 Products" },
    { icon: Cpu, name: "Components", count: "32 Products" },
    { icon: Headphones, name: "Accessories", count: "45 Products" },
    { icon: Smartphone, name: "Mobile", count: "29 Products" },
    { icon: Wifi, name: "Networking", count: "16 Products" },
  ];

  return (
    <section className="py-16 bg-[#F6FBFF]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="inline-block bg-[#007BFF] text-white px-2 py-1 rounded-md text-sm font-semibold mb-2">
              Browse Categories
            </span>
            <h2 className="text-3xl font-bold tracking-tight">Shop By Category</h2>
          </div>
          <a href="#" className="text-sm font-medium flex items-center gap-1 text-[#0056D2] hover:underline">
            View all <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <a
              href="#"
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="rounded-full bg-[#0056D2]/10 p-4 mb-4">
                <category.icon className="h-10 w-10 text-[#0056D2]" />
              </div>
              <h3 className="font-semibold text-center">{category.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{category.count}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}