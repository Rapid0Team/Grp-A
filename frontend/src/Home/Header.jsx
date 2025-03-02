import { HardDrive, Search, ShoppingCart, User ,Logs, X  } from "lucide-react";
import HeaderPhone from "./HeaderPhone";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


export default function Header() {
  const [show, setShow]=useState(false);
  return (

    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">

      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <HardDrive className="h-6 w-6 text-[#0056D2]" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0056D2] via-[#007BFF] to-[#00A8E8]">
              TechStore
            </span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium hover:text-[#0056D2] transition-colors">
              Hardware
            </a>
            <a href="#" className="text-sm font-medium hover:text-[#0056D2] transition-colors">
              Software
            </a>
            <a href="#" className="text-sm font-medium hover:text-[#0056D2] transition-colors">
              Accessories
            </a>
            <a href="#" className="text-sm font-medium hover:text-[#0056D2] transition-colors">
              Deals
            </a>
            <a href="#" className="text-sm font-medium hover:text-[#0056D2] transition-colors">
              Support
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search products..."
              className="rounded-full border border-gray-300 bg-white pl-8 pr-3 py-2 text-sm focus:ring-2 focus:ring-[#00A8E8] focus:outline-none transition-all w-[200px] focus:w-[300px]"
            />
          </div>
          <button className="relative p-2 text-gray-600 hover:text-[#0056D2] transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-[#FF6B00] text-white text-xs font-bold rounded-full">
              3
            </span>
          </button>
          <button className="p-2 text-gray-600 hover:text-[#0056D2] transition-colors">
            <User className="h-5 w-5" />
          </button>
          <button onClick={()=> setShow(!show)} className="p-2 sm:hidden   text-gray-600 hover:text-[#0056D2] transition-colors">
            {show ? <X  className="h-5 w-5" /> : 
            <Logs  className="h-5 w-5" />
            }
            
          </button>
          <button className="hidden md:flex bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-4 py-2 rounded-md shadow-md transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
      
      {/* Header Phone */}
     
      <AnimatePresence>
        {show && (
          <motion.div
            className="w-full min-h-screen"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <HeaderPhone setShow={setShow} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}