"use client";
import { useState } from "react";
import careerData from "@/data/careerData";

type Company = {
  id: string;
  title: string;
  description: string;
  image: string;
  jobs: {
    id: string;
    title: string;
    location: string;
    type: string;
  }[];
};

export default function CareerPage() {
  const [selectedSector, setSelectedSector] = useState<Company | null>(null);

  const handleApply = (sectorId: string) => {
    const sector = careerData.find((s) => s.id === sectorId);
    setSelectedSector(sector || null);
  };

  const handleBack = () => {
    setSelectedSector(null);
  };

  if (selectedSector) {
    return (
      <section className="px-4 md:px-16 py-20 max-w-7xl mx-auto">
        <button
          onClick={handleBack}
          className="mb-8 text-blue-900 underline hover:text-blue-700"
        >
          ← Go back to Career Page
        </button>
        <h2 className="text-3xl font-bold mb-6">{selectedSector.title}</h2>

        {selectedSector.jobs.length > 0 ? (
          <div className="space-y-4">
            {selectedSector.jobs.map((job) => (
              <div
                key={job.id}
                className="border p-4 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div>
                  <h3 className="text-lg font-medium">{job.title}</h3>
                  <p className="text-sm text-gray-500">
                    {job.location} • {job.type}
                  </p>
                </div>
                <button className="text-sm font-semibold text-blue-900 underline hover:text-blue-700 mt-2 sm:mt-0">
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            Currently, no positions available. Stay tuned for updates!
          </p>
        )}
      </section>
    );
  }

  // Default Career List View
  return (
    <section className="px-4 md:px-16 py-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-16">
        Explore Career Opportunities
      </h1>
      {careerData.map((sector, index) => (
        <div key={sector.id}>
          <div
            className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 w-full">
              <img
                src={sector.image}
                alt={sector.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl font-semibold mb-3">{sector.title}</h2>
              <p className="text-gray-600 mb-5">{sector.description}</p>
              <button
                onClick={() => handleApply(sector.id)}
                className="bg-blue-950 text-white px-6 py-2 border rounded-full hover:bg-white hover:border-black hover:text-black transition"
              >
                Apply Now →
              </button>
            </div>
          </div>

          {/* Divider line after each sector */}
          <div className="w-full border-t border-gray-300 mb-12"></div>
        </div>
      ))}
    </section>
  );
}
