"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Horn of Africa Institute
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Empowering pastoralist women and girls across the Horn of Africa
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    Horn of Africa Institute (HAI), formally Foundation for
                    Pastoralist Women (FOPAWO) Registered in 2007, is regional
                    based not-for-profit women-led and evidenced based
                    development organization that works to empower and protect
                    the rights of pastoralist women/girls.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    In Kenya, our programming landscape covers the Frontier
                    Counties Development Council (FCDC) economic bloc (Isiolo,
                    Turkana, Baringo, West Pokot, Samburu, Marsabit, Garissa,
                    Wajir, and Tana River counties).
                  </p>
                  <p className="text-muted-foreground">
                    HAI aims at expanding its operational scope to regional
                    level for purpose of experience and good practice sharing
                    among pastoralist women in Ethiopia, Somalia, Eritrea,
                    Uganda, South Sudan, Sudan and Djibouti (East and central
                    Africa).
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/assets/africa-map.jpg"
                  alt="Horn of Africa Map"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-elegant w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and define our commitment to
                excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Commitment", "Fairness", "Flexibility", "Integrity"].map(
                (value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="text-center p-6 h-full">
                      <CardContent className="p-0">
                        <h3 className="text-xl font-semibold text-primary">
                          {value}
                        </h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
