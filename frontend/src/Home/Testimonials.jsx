import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Developer",
      comment:
        "The customer service is exceptional. They helped me find the perfect laptop for my development needs and the price was better than competitors.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Graphic Designer",
      comment:
        "I've been buying all my tech from TechStore for years. Their product range is extensive and the quality is always top-notch. Their software selection is particularly impressive.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "IT Manager",
      comment:
        "As an IT manager for a growing company, I rely on TechStore for all our hardware and software needs. Their business support team is responsive and knowledgeable.",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-[#F6FBFF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#007BFF] text-white px-2 py-1 rounded-md text-sm font-semibold mb-2">
            Customer Reviews
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with TechStore.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#0056D2]/10 w-10 h-10 flex items-center justify-center text-[#0056D2] font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}