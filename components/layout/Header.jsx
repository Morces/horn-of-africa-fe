"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Get Involved", href: "/get-involved" },
  ];

  const resourceItems = [
    // { name: "Mobilization", href: "resources/mobilization" },
    { name: "HAI Training Toolkits", href: "/resources/training-toolkits" },
    { name: "Research Work", href: "/resources/research" },
    { name: "Gallery", href: "/resources/gallery" },
    { name: "Reports", href: "/resources/reports" },
    { name: "Blogs", href: "/resources/blogs" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>0740540946</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>
                Kiwanjani Checheles B. House no. 7050, PO Box: 503-60300 Isiolo,
                Kenya-Isiolo
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="warm" size="sm">
              Donate
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/">
                <Image
                  src="/assets/logo-1.png"
                  width={200}
                  height={200}
                  alt="Logo"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-foreground cursor-pointer hover:text-primary transition-colors duration-300 font-medium relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}

              {/* Resource Mobilization Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary cursor-pointer transition-colors duration-300 font-medium relative group flex items-center gap-1">
                  Resource Mobilization
                  <ChevronDown className="h-4 w-4" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background/95 backdrop-blur-md border border-border">
                  {resourceItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <a href={item.href} className="w-full cursor-pointer">
                        {item.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-background border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Resource Mobilization */}
              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-2">
                  Resource Mobilization
                </p>
                {resourceItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <Button variant="hero" className="w-full mt-4">
                Donate
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};

export default Header;
