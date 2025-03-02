export function Newsletter() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-to-r from-[#0056D2]/5 to-[#00A8E8]/5 p-12 rounded-2xl shadow-lg">
            <span className="inline-block bg-[#00A8E8] text-white px-2 py-1 rounded-md text-sm font-semibold">
              Stay Connected
            </span>
            <h2 className="text-3xl font-bold tracking-tight">Join Our Newsletter</h2>
            <p className="text-gray-600">
              Subscribe to our newsletter to receive updates on new products, special offers, and tech tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm focus:ring-2 focus:ring-[#00A8E8] focus:outline-none"
              />
              <button className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white rounded-full px-6 py-2 font-semibold shadow-md transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>
    );
  }