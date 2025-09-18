"use client";

import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import Image from "next/image";
import CountingNumber from "@/components/CountingNumber";

const Work = () => {
  const workAreas = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Girl Child Empowerment",
      description:
        "Empowering young girls through education, mentorship, and advocacy programs that build confidence and create opportunities for a brighter future.",
      image: "/assets/girl-child.jpeg",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Peace Building and Counter Violence Extremism",
      description:
        "Working to build sustainable peace in communities through conflict resolution, dialogue facilitation, and counter-extremism initiatives.",
      image: "/assets/violence.jpeg",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Protection",
      description:
        "Implementing comprehensive social protection programs that provide safety nets for vulnerable pastoralist communities.",
      image: "/assets/social-protection.jpeg",
    },
  ];

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
                Our Work
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Transforming communities through targeted programs and
                sustainable interventions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay updated with our ongoing initiatives and impact in the Horn
                of Africa
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {workAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden h-full group hover:shadow-elegant transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <Image
                        src={area.image}
                        width={200}
                        height={200}
                        alt={area.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-lg">
                        {area.icon}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {area.description}
                      </p>
                      <Button variant="outline" className="w-full">
                        More Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Measuring the difference we make in pastoralist communities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: 9, label: "Counties Served", suffix: "+" },
                { number: 15, label: "Years of Experience", suffix: "+" },
                { number: 10000, label: "Women Empowered", suffix: "+" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <CountingNumber
                    end={stat.number}
                    suffix={
                      stat.label === "Women Empowered" ? "K+" : stat.suffix
                    }
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    duration={2 + index * 0.5}
                  />
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;
