"use client";
import { ConciergeBell, Users, Gauge } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: <ConciergeBell className="w-8 h-8 text-[#0d1536]" />,
      title: "Manufacturing",
      description:
        "Rebar Couplers (Patented Product), Oil Grooving Bushes, Special Purpose Machines, Mechanical Components",
    },
    {
      icon: <Users className="w-8 h-8 text-[#0d1536]" />,
      title: "Trading",
      description:
        `Building Materials, Machine Components, Electronics & Fast-moving Consumer Goods`,
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#0d1536]" />,
      title: "Other services",
      description:
        "Manpower Supply, Hospitality Management, Calibration, Procurement Consultancy, Real Estate Development",
    }
  ];

  return (
    <section className="bg-[#f2f5f9] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 max-w-3xl mb-12">
          We offer a comprehensive range of services designed to meet all your
          needs.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-300 pt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-r border-gray-300 last:border-r hover:bg-white px-3 py-10"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {service.description}
              </p>
              < Link
                href="/industries"
                className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-indigo-600"
              >
                View Service
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
