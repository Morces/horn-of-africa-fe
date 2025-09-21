"use client";

import { client } from "@/lib/contentful";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const PartnerCarousel = () => {
  // Sample partner logos - replace with actual partner data
  const partners = [
    {
      name: "Partner 1",
      logo: "https://placehold.co/150x80/4F46E5/FFFFFF?text=Partner+1",
    },
    {
      name: "Partner 2",
      logo: "https://placehold.co/150x80/7C3AED/FFFFFF?text=Partner+2",
    },
    {
      name: "Partner 3",
      logo: "https://placehold.co/150x80/2563EB/FFFFFF?text=Partner+3",
    },
    {
      name: "Partner 4",
      logo: "https://placehold.co/150x80/DC2626/FFFFFF?text=Partner+4",
    },
    {
      name: "Partner 5",
      logo: "https://placehold.co/150x80/059669/FFFFFF?text=Partner+5",
    },
  ];

  useEffect(() => {
    fetchPartners();
  }, []);

  const [partnerList, setPartnerList] = useState(partners);

  async function fetchPartners() {
    try {
      const res = await client.getEntries({ content_type: "partners" });

      if (res.items && res.items.length > 0) {
        setPartnerList(res.items);
      } else {
        setPartnerList([]);
      }
    } catch (error) {
      console.error("Error fetching partners:", error);
      setPartnerList(partners);
    }
  }

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partnerList, ...partnerList];

  return (
    <section className="py-16 bg-accent/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Working together with organizations that share our vision for
            empowering pastoralist communities
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex space-x-8 animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-82 h-40 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:scale-110 cursor-pointer transition-all duration-300"
              >
                <img
                  src={`https:${partner?.fields?.image?.fields?.file?.url}`}
                  alt={partner?.name}
                  width={400}
                  height={250}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for seamless effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-accent/30 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-accent/30 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnerCarousel;
