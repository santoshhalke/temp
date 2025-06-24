"use client";
import { Building2, Briefcase } from "lucide-react";
import groups from "@/data/groups";

export default function CompaniesPage() {
  return (
    <section className="px-4 md:px-16 py-20 max-w-7xl mx-auto mt-10">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <Briefcase /> Our Companies
        </p>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          Part of Our Group
        </h1>
      </div>

      {/* Groups */}
      <div className="flex flex-col gap-12">
        {groups.map((group, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
              <Building2 className="text-blue-800" /> {group.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {group.companies.map((company, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-md flex flex-col items-center h-90 justify-between bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="w-full h-[80%] mb-2 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                <div className="p-3">
                  <p className="text-2xl font-semibold text-center">
                    {company.name}
                  </p>
                  <p className="text-xs text-gray-500 text-center">
                    {company.tagline}
                  </p>
                </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
