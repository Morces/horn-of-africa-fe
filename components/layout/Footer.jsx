"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61553011951103&sk=about_details",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: " https://x.com/hornofafrica_4?s=21&t=tsgYofesSVRI_3OMnRWD2g",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/hornafricainstitute/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/horn-of-africa-institute-b29a85300?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3UIudHoKSLuCcbzD7USK1g%3D%3D",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Get Involved", href: "get-involved" },
    { name: "Resources", href: "/resources/mobilization" },
    // { name: "Contact", href: "/contact" },
  ];

  const [showDialog, setShowDialog] = useState(false);

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Organization Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/assets/logo.jpeg"
                  width={200}
                  height={200}
                  alt="Logo"
                />
              </div>

              <p className="text-background/80 leading-relaxed mb-6 max-w-md">
                Empowering pastoralist women and girls through evidence-based
                development programs, advocacy, and resilience building across
                the Horn of Africa region.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-light flex-shrink-0" />
                  <span className="text-background/80">0740540946</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-light flex-shrink-0 mt-0.5" />
                  <span className="text-background/80">
                    Kiwanjani Checheles B. House no. 7050,
                    <br />
                    PO Box: 503-60300 Isiolo, Kenya-Isiolo
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary-light flex-shrink-0" />
                  <span className="text-background/80">
                    info@hornafricainstitute.co.ke
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-primary-light transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setShowDialog(true)}
                >
                  <p className="text-background/80 cursor-pointer hover:text-primary-light transition-colors duration-300 inline-block hover:translate-x-1 transform">
                    Download HAI Complaint Mechanism Guideline
                  </p>
                </motion.li>
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Stay Connected</h4>

              {/* Newsletter */}
              <div className="mb-8">
                <p className="text-background/80 mb-4">
                  Subscribe to our newsletter for updates on our programs and
                  impact.
                </p>
                <div className="flex w-full px-4 py-2 rounded-lg bg-background/10 border-none">
                  <input
                    type="email"
                    placeholder="Your email"
                    className=" text-background placeholder:text-background/60 focus:outline-none focus:ring-0"
                  />
                  <Button size="sm">
                    <Send />
                  </Button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-background/80 mb-4">
                  Follow us on social media
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary-light hover:scale-110 transition-all duration-300"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                className="text-background/60 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} Horn of Africa Institute. All
                rights reserved.
              </motion.p>

              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-background/60 hover:text-primary-light text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-background/60 hover:text-primary-light text-sm transition-colors"
                >
                  Terms of Service
                </a>

                {/* Back to Top */}
                <motion.button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary-light hover:scale-110 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Download HAI Complaint Mechanism Guideline
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="my-3 flex flex-col gap-3">
              <Button asChild onClick={() => setShowDialog(false)}>
                <a
                  href="/HAI-COMPLAINTS MECHANISMS GUIDELINES.pdf"
                  download
                  // className="text-primary underline hover:text-primary/80 "
                >
                  Download HAI Complaints Mechanisms Guidelines (PDF)
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </footer>
  );
};

export default Footer;
