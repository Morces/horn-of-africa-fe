"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import resilienceImage from "@/assets/resilience-image.jpg";
// import advocacyImage from "@/assets/advocacy-image.jpg";

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-20 bg-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            OUR <span className="text-primary">APPROACH</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We employ comprehensive strategies to empower pastoralist
            communities and advocate for their rights
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Resilience Building */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  RESILIENCE BUILDING
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Strengthening the capacity of people especially women and girls,
                institutions and systems to prevent, mitigate and respond to
                diverse risks including crisis, conflict, natural disasters,
                climate and social and economic shocks.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Community capacity building and empowerment programs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Climate adaptation and disaster risk reduction
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Economic empowerment and livelihood diversification
                  </p>
                </div>
              </div>

              <Button variant="outline" size="lg" className="group">
                More Details
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/assets/resilience.jpeg"
                width={150}
                height={150}
                alt="Resilience Building Programs"
                className="w-full rounded-2xl shadow-warm"
              />
              <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            </motion.div>
          </motion.div>

          {/* Advocacy & Communications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              className="relative lg:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/assets/advocacy.jpeg"
                width={150}
                height={150}
                alt="Advocacy and Communications"
                className="w-full rounded-2xl shadow-warm"
              />
              <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            </motion.div>

            <div className="space-y-6 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-xl">
                  <Megaphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  ADVOCACY & COMMUNICATIONS
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Promoting policy change and social transformation through
                strategic advocacy, communications, and engagement with
                stakeholders at local, national, and regional levels to advance
                pastoralist women's rights.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Policy advocacy and legal framework development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Community mobilization and awareness campaigns
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Research and evidence-based programming
                  </p>
                </div>
              </div>

              <Button variant="outline" size="lg" className="group">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Data */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground uppercase">
                  Use of data, evidence and learning by doing
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Routinely and across all our thematic areas of work, we
                systematically collect, organize, analyze and use data,
                information and evidence to inform everything we do, each time
                to enable us to do it better.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Community capacity building and empowerment programs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Climate adaptation and disaster risk reduction
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Economic empowerment and livelihood diversification
                  </p>
                </div>
              </div>

              <Button variant="outline" size="lg" className="group">
                More Details
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/assets/data.jpeg"
                width={150}
                height={150}
                alt="Learning By Doing"
                className="w-full rounded-2xl shadow-warm"
              />
              <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            </motion.div>
          </motion.div>

          {/* Social Inclusion */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              className="relative lg:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/assets/social-inclusion.jpeg"
                width={150}
                height={150}
                alt="Social Inclusion"
                className="w-full rounded-2xl shadow-warm"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 to-transparent rounded-2xl"></div>
            </motion.div>

            <div className="space-y-6 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-xl">
                  <Megaphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  SOCIAL INCLUSION
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A rights-based approach centered on empowerment, inclusion,
                equity, human agency and women’s rights and empowerment which
                recognizes that poverty and inequality are multidimensional.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Policy advocacy and legal framework development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Community mobilization and awareness campaigns
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Research and evidence-based programming
                  </p>
                </div>
              </div>

              <Button variant="outline" size="lg" className="group">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center bg-primary rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us in empowering pastoralist communities and building resilient
            futures across the Horn of Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Partner With Us
            </Button>
            <Button variant="warm" size="lg">
              Support Our Cause
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
