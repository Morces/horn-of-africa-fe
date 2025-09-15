"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Target, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-background to-muted/30"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ABOUT <span className="text-primary">US</span>
          </h2>
          <div className="w-24 h-1 bg-[--gradient-primary] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/assets/africa-map.jpg"
                alt="Horn of Africa Region"
                className="w-full rounded-2xl shadow-warm"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-glow"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-3xl font-bold">2007</div>
                <div className="text-sm">Established</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Horn of Africa Institute (HAI)
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Formally Foundation for Pastoralist Women (FOPAWO), registered in
              2007, is a regional women-led and evidence-based development
              organization that works to empower and protect the rights of
              pastoralist women and girls.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              In Kenya, our programming landscape covers the Frontier Counties
              Development Council (FCDC) economic bloc including Isiolo,
              Turkana, Baringo, West Pokot, Samburu, Marsabit, Garissa, Wajir,
              and Tana River counties.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              HAI aims at expanding its operational scope to regional level for
              purpose of experience and good practice sharing among pastoralist
              women in Ethiopia, Somalia, Eritrea, Uganda, South Sudan, Sudan
              and Djibouti.
            </p>

            <Button variant="default" size="lg" className="group">
              Learn More About Our Impact
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-glow transition-all duration-300 group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[--gradient-primary] rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4">
              Our Mission
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              To empower and protect the rights of pastoralist women and girls
              through evidence-based development programs, advocacy, and
              resilience building.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-glow transition-all duration-300 group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              A resilient Horn of Africa where pastoralist women and girls enjoy
              equal rights, opportunities, and participation in sustainable
              development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-glow transition-all duration-300 group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-warm rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="h-8 w-8 text-foreground" />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Our Values
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Integrity, inclusivity, empowerment, sustainability, and
              evidence-based approaches in all our development interventions and
              advocacy efforts.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
