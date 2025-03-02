import { Truck, Clock, Shield, CreditCard } from "lucide-react";

export default function Features() {
  const features = [
    { icon: Truck, title: "Free Shipping", description: "On orders over $100" },
    { icon: Clock, title: "24/7 Support", description: "Expert assistance anytime" },
    { icon: Shield, title: "Secure Payment", description: "100% protected checkout" },
    { icon: CreditCard, title: "Easy Returns", description: "30-day money back guarantee" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="rounded-full bg-[#0056D2]/10 p-3 text-[#0056D2]">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}