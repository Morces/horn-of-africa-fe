"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Target, Eye, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
            OUR <span className="text-primary">VALUES</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-glow transition-all duration-300 group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
            <p className="text-muted-foreground leading-relaxed">
              To champion the rights of indigenous women and girls, working to
              eliminate discrimination, violence, and inequality through
              evidence-based programming and advocacy in Kenya and Horn of
              Africa.
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
              A society free from exclusion and injustice where everyone can
              achieve their full potential.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="my-6">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
            Our Core Values
          </h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            We are driven by a set of core values that guide our actions and
            decisions:
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-card/90 to-card rounded-2xl p-8 shadow-lg hover:shadow-glow transition-all duration-300 group"
        >
          <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">
            Our Core Values
          </h2>

          <ol className="space-y-4">
            {[
              {
                title: "Integrity",
                description:
                  "We are committed to the highest forms of accountability and honesty.",
              },
              {
                title: "Dignity",
                description:
                  "We believe in freedom of choice and autonomy regarding bodily integrity.",
              },
              {
                title: "Solidarity",
                description:
                  "Inspired by the principles of diversity, equity, and equality, we empathize with and support women and girls to access social justice and human dignity.",
              },
              {
                title: "Commitment",
                description:
                  "We are passionate about working for the safety and wellbeing of women and girls, fulfilling every promise we make.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
