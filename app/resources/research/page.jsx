"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, User, Eye } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/lib/contentful";

const Research = () => {
  const researchWorks = [
    {
      title:
        "Climate Change Adaptation Strategies Among Pastoralist Women in Northern Kenya",
      abstract:
        "This study examines the innovative adaptation strategies employed by pastoralist women in response to changing climate patterns in Northern Kenya.",
      author: "Dr. Sarah Kiptoo",
      publicationDate: "2024-02-15",
      type: "Research Paper",
      status: "Published",
      tags: ["Climate Change", "Women Empowerment", "Adaptation"],
    },
    {
      title: "Gender Dynamics in Pastoralist Decision-Making Processes",
      abstract:
        "An analysis of how gender roles influence decision-making in pastoralist communities and the implications for development programming.",
      author: "Mary Wanjiku & James Kiprotich",
      publicationDate: "2023-11-20",
      type: "Case Study",
      status: "Published",
      tags: ["Gender", "Decision Making", "Community Development"],
    },
    {
      title:
        "Education Access and Barriers for Girls in Pastoralist Communities",
      abstract:
        "Comprehensive research on the challenges and opportunities for improving educational outcomes for girls in pastoralist settings.",
      author: "Grace Chebet",
      publicationDate: "2023-09-10",
      type: "Survey Report",
      status: "Published",
      tags: ["Education", "Girls", "Barriers"],
    },
    {
      title: "Economic Empowerment Through Livestock Value Chains",
      abstract:
        "Exploring how women can be better integrated into livestock value chains to improve household income and economic resilience.",
      author: "Ahmed Hassan",
      publicationDate: "2024-01-05",
      type: "Policy Brief",
      status: "Published",
      tags: ["Economic Empowerment", "Livestock", "Value Chains"],
    },
    {
      title: "Conflict Resolution Mechanisms in Pastoralist Communities",
      abstract:
        "Traditional and modern approaches to conflict resolution in pastoralist communities and their effectiveness in promoting peace.",
      author: "Peter Lorot",
      publicationDate: "2023-12-12",
      type: "Research Paper",
      status: "Under Review",
      tags: ["Conflict Resolution", "Peace Building", "Traditional Mechanisms"],
    },
    {
      title: "Water Security and Gender Roles in Arid Lands",
      abstract:
        "Examining the relationship between water security and gender roles in arid and semi-arid lands of the Horn of Africa.",
      author: "Dr. Sarah Kiptoo & Ahmed Hassan",
      publicationDate: "2024-03-01",
      type: "Research Paper",
      status: "Draft",
      tags: ["Water Security", "Gender", "Arid Lands"],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Draft":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const [research, setResearch] = useState([]);

  useEffect(() => {
    getResearch();
  }, []);

  async function getResearch() {
    try {
      const res = await client.getEntries({ content_type: "researchWork" });

      console.log(res?.items[0]);

      if (res.items && res.items.length > 0) {
        setResearch(res.items);
      } else {
        setResearch([]);
      }
    } catch (error) {
      console.error("Error fetching research work:", error);
      setResearch([]);
    }
  }

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Research Work
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Evidence-based research driving policy and programming decisions
                for pastoralist communities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Research Papers */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Published Research</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our latest research publications and ongoing studies
              </p>
            </motion.div>

            {research?.length === 0 ? (
              <Card className="flex w-full justify-center items-center">
                <p className="">No research work published yet!</p>
              </Card>
            ) : (
              <div className="grid lg:grid-cols-2 gap-8">
                {research?.map((research, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full group hover:shadow-elegant transition-all duration-500">
                      <CardHeader>
                        <CardTitle className="text-lg leading-tight">
                          {research?.fields?.title}
                        </CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {research?.fields?.category}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {research?.fields?.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-4 w-4" />
                            {research?.fields?.author}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {new Date(
                              research?.fields?.publishedOn
                            ).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {research?.fields?.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href={`https:${research?.fields?.file?.fields?.file?.url}`}
                          download={
                            research?.fields?.file?.fields?.file?.fileName
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button variant="outline" className="w-full">
                            <Eye className="h-4 w-4 mr-2" />
                            View Research
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Collaborate with Our Research Team
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Interested in partnering with us on research initiatives? Get in
                touch to explore collaboration opportunities.
              </p>
              <Button variant="warm" asChild size="lg">
                <Link href="/get-involved">Contact Research Team</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Research;
