import React, { useState, Fragment } from "react";
import { Tab } from "@headlessui/react";
import { Star, ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const [selectedTab, setSelectedTab] = useState("hardware");

  const hardwareProducts = [
    {
      name: "Pro Gaming Laptop",
      price: "$1,299.99",
      image: "1",
      rating: 4.8,
      discount: "15% OFF",
      tag: "Best Seller",
    },
    {
      name: "Pro Gaming Laptop",
      price: "$1,299.99",
      image: "1",
      rating: 4.8,
      discount: "15% OFF",
      tag: "Best Seller",
    },
    {
      name: "Pro Gaming Laptop",
      price: "$1,299.99",
      image: "1",
      rating: 4.8,
      discount: "15% OFF",
      tag: "Best Seller",
    },
    {
      name: "Pro Gaming Laptop",
      price: "$1,299.99",
      image: "1",
      rating: 4.8,
      discount: "15% OFF",
      tag: "Best Seller",
    },
    {
      name: "Pro Gaming Laptop",
      price: "$1,299.99",
      image: "1",
      rating: 4.8,
      discount: "15% OFF",
      tag: "Best Seller",
    },
    {
      name: "Pro Gaming Laptop",
      price: "$1,299.99",
      image: "1",
      rating: 4.8,
      discount: "15% OFF",
      tag: "Best Seller",
    },
    {
      name: "Pro Gaming Laptop",
      price: "$1,299.99",
      image: "1",
      rating: 4.8,
      discount: "15% OFF",
      tag: "Best Seller",
    },
    {
      name: "Pro Gaming Laptop",
      price: "$1,299.99",
      image: "1",
      rating: 4.8,
      discount: "15% OFF",
      tag: "Best Seller",
    },
    // Add more products...
  ];

  const softwareProducts = [
    {
      name: "Professional Photo Editing Suite",
      price: "$19.99/month",
      image: "1",
      rating: 4.9,
      discount: "20% OFF",
      tag: "Most Popular",
    },
    {
      name: "Professional Photo Editing Suite",
      price: "$19.99/month",
      image: "1",
      rating: 4.9,
      discount: "20% OFF",
      tag: "Most Popular",
    },
    {
      name: "Professional Photo Editing Suite",
      price: "$19.99/month",
      image: "1",
      rating: 4.9,
      discount: "20% OFF",
      tag: "Most Popular",
    },
    {
      name: "Professional Photo Editing Suite",
      price: "$19.99/month",
      image: "1",
      rating: 4.9,
      discount: "20% OFF",
      tag: "Most Popular",
    },
    {
      name: "Professional Photo Editing Suite",
      price: "$19.99/month",
      image: "1",
      rating: 4.9,
      discount: "20% OFF",
      tag: "Most Popular",
    },
    {
      name: "Professional Photo Editing Suite",
      price: "$19.99/month",
      image: "1",
      rating: 4.9,
      discount: "20% OFF",
      tag: "Most Popular",
    },
    {
      name: "Professional Photo Editing Suite",
      price: "$19.99/month",
      image: "1",
      rating: 4.9,
      discount: "20% OFF",
      tag: "Most Popular",
    },
    {
      name: "Professional Photo Editing Suite",
      price: "$19.99/month",
      image: "1",
      rating: 4.9,
      discount: "20% OFF",
      tag: "Most Popular",
    },
    // Add more products...
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#00A8E8] text-white px-2 py-1 rounded-md text-sm font-semibold mb-2">
            Top Products
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium hardware and software solutions designed to enhance your tech experience.
          </p>
        </div>
        <Tab.Group>
          <Tab.List className="flex justify-center mb-8">
            <div className="bg-[#F6FBFF] p-1 rounded-full">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                      selected ? "bg-[#0056D2] text-white" : "text-gray-600 hover:text-[#0056D2]"
                    }`}
                    onClick={() => setSelectedTab("hardware")}
                  >
                    Hardware
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                      selected ? "bg-[#0056D2] text-white" : "text-gray-600 hover:text-[#0056D2]"
                    }`}
                    onClick={() => setSelectedTab("software")}
                  >
                    Software
                  </button>
                )}
              </Tab>
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {hardwareProducts.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="aspect-[4/3] relative bg-[#F6FBFF]">
                      {product.discount && (
                        <div className="absolute top-3 left-3 bg-[#FF6B00] text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                          {product.discount}
                        </div>
                      )}
                      {product.tag && (
                        <div className="absolute top-3 right-3 bg-[#0056D2] text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                          {product.tag}
                        </div>
                      )}
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-contain w-full h-full p-6"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="bg-white text-[#0056D2] hover:bg-white/90 px-4 py-2 rounded-md font-medium transition-colors">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <div className="flex items-center gap-1 text-amber-500 mb-2">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-current"
                              fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                            />
                          ))}
                        <span className="text-xs text-gray-600 ml-1">({product.rating})</span>
                      </div>
                      <div className="font-bold text-lg text-[#0056D2]">{product.price}</div>
                    </div>
                    <div className="p-4 pt-0">
                      <button className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-2 rounded-md font-medium transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {softwareProducts.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="aspect-[4/3] relative bg-[#F6FBFF]">
                      {product.discount && (
                        <div className="absolute top-3 left-3 bg-[#FF6B00] text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                          {product.discount}
                        </div>
                      )}
                      {product.tag && (
                        <div className="absolute top-3 right-3 bg-[#0056D2] text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                          {product.tag}
                        </div>
                      )}
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-contain w-full h-full p-6"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="bg-white text-[#0056D2] hover:bg-white/90 px-4 py-2 rounded-md font-medium transition-colors">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <div className="flex items-center gap-1 text-amber-500 mb-2">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-current"
                              fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                            />
                          ))}
                        <span className="text-xs text-gray-600 ml-1">({product.rating})</span>
                      </div>
                      <div className="font-bold text-lg text-[#0056D2]">{product.price}</div>
                    </div>
                    <div className="p-4 pt-0">
                      <button className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-2 rounded-md font-medium transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <div className="flex justify-center mt-12">
          <button className="border border-[#0056D2] text-[#0056D2] hover:bg-[#0056D2]/5 rounded-full px-8 py-3 font-semibold transition-colors flex items-center">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}