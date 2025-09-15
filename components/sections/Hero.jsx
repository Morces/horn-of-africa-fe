"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/image-1.jpeg"
          width={1000}
          height={400}
          alt="Horn of Africa Institute - Empowering Communities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <motion.p
              className="text-primary-light text-lg font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome To
            </motion.p>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              HORN OF AFRICA
              <br />
              <span className="text-primary-light">INSTITUTE</span>
            </motion.h1>

            <motion.p
              className="text-2xl lg:text-3xl font-light mb-8 text-primary-light italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Ideas beyond borders
            </motion.p>

            <motion.p
              className="text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              A regional women-led development organization empowering and
              protecting the rights of pastoralist women and girls across the
              Horn of Africa.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="group">
                Learn About Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Get Involved
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3 mx-auto">
                  <Users className="h-6 w-6 text-primary-light" />
                </div>
                <div className="text-2xl font-bold text-primary-light">9+</div>
                <div className="text-sm text-white/80">Counties Covered</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3 mx-auto">
                  <Heart className="h-6 w-6 text-primary-light" />
                </div>
                <div className="text-2xl font-bold text-primary-light">16+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3 mx-auto">
                  <Globe className="h-6 w-6 text-primary-light" />
                </div>
                <div className="text-2xl font-bold text-primary-light">7+</div>
                <div className="text-sm text-white/80">Regional Countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side content - floating elements */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-warm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <h3 className="text-white text-xl font-semibold mb-4">
                Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed">
                To empower pastoralist women and girls through evidence-based
                development programs, advocacy, and resilience building across
                the Horn of Africa region.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
