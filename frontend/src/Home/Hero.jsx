import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowRight, Laptop, Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-[#F6FBFF] bg-opacity-50  md:py-32">
      <div className="relative w-full flex justify-center pb-10 pt-5 sm:hidden ">
            <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search products..."
              className="rounded-full border border-gray-300 bg-white pl-8 pr-3 py-2 text-sm focus:ring-2 focus:ring-[#00A8E8] focus:outline-none transition-all w-[200px] focus:w-[300px]"
            />
            </div>
          </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-[#00A8E8] text-white px-4 py-1 rounded-full text-sm font-semibold">
            New Technology
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Upgrade Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0056D2] via-[#007BFF] to-[#00A8E8]">
              Tech Setup
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-[600px] leading-relaxed">
            Discover the latest hardware and software solutions for your professional and personal needs with expert guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white shadow-md rounded-full px-8 py-3 font-semibold flex items-center justify-center transition-colors">
              Shop Hardware
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="border border-[#0056D2] text-[#0056D2] hover:bg-[#0056D2]/5 rounded-full px-8 py-3 font-semibold transition-colors">
              Explore Software
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative accordion-down 0.2s ease-out accordion-up w-full max-w-md aspect-[4/3] bg-gradient-to-br from-[#0056D2]/10 via-[#007BFF]/10 to-[#00A8E8]/20 rounded-2xl flex items-center justify-center shadow-lg animate-float">
            <div className="absolute -top-6 -right-6 bg-[#FF6B00] text-white rounded-full px-4 py-2 font-bold shadow-md">
              25% OFF
            </div>
            <DotLottieReact
              src="https://lottie.host/684d4e05-c79a-4a65-b2ef-12470f844a8d/jgTpneNj2D.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </div>
  );
}