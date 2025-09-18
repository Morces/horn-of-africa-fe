"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PartnerCarousel = () => {
  // Sample partner logos - replace with actual partner data
  const partners = [
    {
      name: "Partner 1",
      logo: "https://via.placeholder.com/150x80/4F46E5/FFFFFF?text=Partner+1",
    },
    {
      name: "Partner 2",
      logo: "https://via.placeholder.com/150x80/7C3AED/FFFFFF?text=Partner+2",
    },
    {
      name: "Partner 3",
      logo: "https://via.placeholder.com/150x80/2563EB/FFFFFF?text=Partner+3",
    },
    {
      name: "Partner 4",
      logo: "https://via.placeholder.com/150x80/DC2626/FFFFFF?text=Partner+4",
    },
    {
      name: "Partner 5",
      logo: "https://via.placeholder.com/150x80/059669/FFFFFF?text=Partner+5",
    },
  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

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
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-40 h-20 bg-background rounded-lg shadow-sm flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={50}
                  className="max-w-full max-h-full object-contain"
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
