"use client";

import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Users,
  Heart,
  Globe,
  Calendar,
  Building,
  Binoculars,
} from "lucide-react";

const GetInvolved = () => {
  const involvementOptions = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers and contribute your skills to our programs and initiatives.",
      action: "Volunteer Now",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Donate",
      description:
        "Make a financial contribution to support our work in empowering pastoralist women and girls.",
      action: "Donate Today",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "International Funding",
      description:
        "Collaborate with international organizations and donors to scale our impact across the region.",
      action: "Learn More",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Events",
      description:
        "Participate in our events, workshops, and community gatherings.",
      action: "View Events",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Corporate Partnerships",
      description:
        "Partner with us to create sustainable change through corporate social responsibility initiatives.",
      action: "Partner With Us",
    },
    {
      icon: <Binoculars className="h-8 w-8" />,
      title: "Research/Consultancy",
      description:
        "Collaborate with us on research projects or provide consultancy services to enhance our programs.",
      action: "Reach Out",
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
                Get Involved
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Be part of the change you want to see in pastoralist communities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Involvement Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ways to Get Involved</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose how you'd like to contribute to our mission
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {involvementOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-elegant transition-all duration-500">
                    <CardHeader className="text-center">
                      <div className="mx-auto bg-primary/10 p-4 rounded-lg w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                        {option.icon}
                      </div>
                      <CardTitle className="text-xl">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-6">
                        {option.description}
                      </p>
                      <Button className="w-full">{option.action}</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-accent-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions or want to learn more? We'd love to hear from
                you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this about?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how you'd like to get involved or any questions you have..."
                        className="min-h-32"
                      />
                    </div>

                    <Button variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
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
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Every action, no matter how small, contributes to positive
                change in pastoralist communities.
              </p>
              <Button variant="warm" size="lg">
                Start Your Journey
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GetInvolved;
