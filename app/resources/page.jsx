"use client";

import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, HandHeart, Building, Globe } from "lucide-react";

const Resources = () => {
  const mobilizationAreas = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Financial Support",
      description:
        "Direct funding for our programs and initiatives that empower pastoralist women and girls across the Horn of Africa.",
      cta: "Donate Now",
    },
    {
      icon: <HandHeart className="h-8 w-8" />,
      title: "Volunteer Programs",
      description:
        "Join our team of dedicated volunteers and contribute your skills to make a meaningful impact in communities.",
      cta: "Get Involved",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Corporate Partnerships",
      description:
        "Partner with us to create sustainable change through corporate social responsibility initiatives.",
      cta: "Partner With Us",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "International Funding",
      description:
        "Collaborate with international organizations and donors to scale our impact across the region.",
      cta: "Learn More",
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
                Resource Mobilization
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Together, we can create lasting change for pastoralist
                communities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mobilization Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">How You Can Help</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to support our mission and amplify our impact
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {mobilizationAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full group hover:shadow-elegant transition-all duration-500">
                    <CardHeader className="text-center">
                      <div className="mx-auto bg-primary/10 p-4 rounded-lg w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                        {area.icon}
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-6">
                        {area.description}
                      </p>
                      <Button className="w-full">
                        {area.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Our Mission Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Your support helps us empower pastoralist women and build
                resilient communities across the Horn of Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="warm" size="lg">
                  Make a Donation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Where Your Support Goes
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transparency in how we utilize resources for maximum impact
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  percentage: "70%",
                  area: "Direct Programs",
                  description:
                    "Funding resilience building and empowerment initiatives",
                },
                {
                  percentage: "20%",
                  area: "Capacity Building",
                  description: "Training and institutional development",
                },
                {
                  percentage: "10%",
                  area: "Administration",
                  description: "Operational costs and governance",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.area}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {item.percentage}
                  </div>
                  <div className="text-xl font-semibold mb-2">{item.area}</div>
                  <div className="text-muted-foreground">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resources;
