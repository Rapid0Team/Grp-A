import { Laptop, MousePointer, Monitor, Headphones } from "lucide-react";

export default function SpecialOffer() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0056D2] to-[#007BFF] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-white text-[#0056D2] px-2 py-1 rounded-md text-sm font-semibold">
              Limited Time Offer
            </span>
            <h2 className="text-4xl font-bold tracking-tight">Ultimate Tech Bundle</h2>
            <p className="text-lg max-w-[600px] text-white/90 leading-relaxed">
              Get a complete workstation setup with our premium hardware and software bundle. Save up to 25% when purchased together.
            </p>
            <ul className="space-y-2">
              {["High-Performance Laptop", "4K Monitor", "Wireless Peripherals", "Premium Software Suite", "3-Year Extended Warranty"].map(
                (item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="rounded-full bg-white/20 p-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3334 4L6.00008 11.3333L2.66675 8"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {item}
                  </li>
                )
              )}
            </ul>
            <div className="pt-4 flex items-center gap-6">
              <button className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white shadow-md rounded-full px-8 py-3 font-semibold transition-colors">
                Shop Bundle Now
              </button>
              <div className="flex flex-col">
                <span className="text-lg line-through opacity-70">$2,499.99</span>
                <span className="text-2xl font-bold">$1,899.99</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute  -top-8 -left-8 bg-[#FF6B00] text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-xl shadow-md">
                25%<br />OFF
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-white/10 backdrop-blur-[2px] rounded-2xl p-8 flex items-center justify-center">
                  <Laptop className="h-16 w-16" />
                </div>
                <div className="bg-white/10 backdrop-blur-[2px] rounded-2xl p-8 flex items-center justify-center">
                  <MousePointer className="h-16 w-16" />
                </div>
                <div className="bg-white/10 backdrop-blur-[2px] rounded-2xl p-8 flex items-center justify-center">
                  <Monitor className="h-16 w-16" />
                </div>
                <div className="bg-white/10 backdrop-blur-[2px] rounded-2xl p-8 flex items-center justify-center">
                  <Headphones className="h-16 w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}