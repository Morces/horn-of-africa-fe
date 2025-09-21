"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Users, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { client } from "@/lib/contentful";

const TrainingToolkits = () => {
  const toolkits = [
    {
      title: "HAI Women Empowerment Entrepreneurship Program (WEEP)",
      description:
        "A practical guide to fostering women’s economic independence through entrepreneurship, financial literacy, and sustainable business development in pastoralist communities.",
      type: "PDF",
      pages: 40,
      lastUpdated: "2024-06-12",
    },
    {
      title: "Pamoja Girls SRHR Training Manual",
      description:
        "Comprehensive training material on Sexual and Reproductive Health and Rights (SRHR) designed to educate, empower, and protect adolescent girls and young women.",
      type: "PDF",
      pages: 36,
      lastUpdated: "2024-05-18",
    },
    {
      title: "Prevention of Sexual Exploitation and Abuse (PSEA)",
      description:
        "Guidelines and tools to prevent, identify, and respond to sexual exploitation and abuse, promoting safe and ethical engagement within vulnerable communities.",
      type: "PDF",
      pages: 30,
      lastUpdated: "2024-04-10",
    },
    {
      title: "GBV Case Management and Referral Pathways Handbook",
      description:
        "Step-by-step procedures for managing Gender-Based Violence (GBV) cases, including survivor support, legal frameworks, and effective referral mechanisms.",
      type: "PDF",
      pages: 34,
      lastUpdated: "2024-03-22",
    },
  ];
  const policies = [
    {
      title: "Financial Policy",
      description:
        "Guidelines for effective financial planning, management, and reporting to ensure transparency and accountability across all organizational operations.",
      type: "Policy Document",
      lastUpdated: "2024-06-10",
    },
    {
      title: "Procurement Policy",
      description:
        "Framework outlining fair, transparent, and cost-effective procurement procedures for goods and services.",
      type: "Policy Document",
      lastUpdated: "2024-06-05",
    },
    {
      title: "Human Resource Manual",
      description:
        "Comprehensive handbook covering staff recruitment, development, welfare, and performance management practices.",
      type: "Manual",
      lastUpdated: "2024-05-25",
    },
    {
      title: "Sustainability Plan Manual",
      description:
        "Strategic guide to integrating environmental, social, and economic sustainability across programs and operations.",
      type: "Manual",
      lastUpdated: "2024-05-12",
    },
    {
      title: "Resource Mobilization Strategy",
      description:
        "Action plan for securing financial and non-financial resources through partnerships, fundraising, and donor engagement.",
      type: "Strategy Document",
      lastUpdated: "2024-04-30",
    },
    {
      title: "MEAL Manual",
      description:
        "Monitoring, Evaluation, Accountability, and Learning (MEAL) framework for tracking progress, ensuring accountability, and fostering continuous improvement.",
      type: "Manual",
      lastUpdated: "2024-04-18",
    },
    {
      title: "Risk Management Policy and Risk Register",
      description:
        "Policy and toolset for identifying, assessing, and mitigating organizational risks to safeguard assets and operations.",
      type: "Policy & Register",
      lastUpdated: "2024-04-05",
    },
    {
      title: "Complaint Mechanism",
      description:
        "Clear procedures for stakeholders and beneficiaries to report concerns, provide feedback, and seek redress in a safe and confidential manner.",
      type: "Policy Document",
      lastUpdated: "2024-03-22",
    },
  ];

  const [materials, setMaterials] = useState(toolkits);

  useEffect(() => {
    fetchMaterials();
  }, []);

  async function fetchMaterials() {
    try {
      const res = await client.getEntries({
        content_type: "trainingMaterials",
      });

      console.log(res?.items);

      if (res.items && res.items.length > 0) {
        setMaterials(res.items);
      } else {
        setMaterials([]);
      }
    } catch (error) {
      console.error("Error fetching training materials:", error);
      setMaterials([]);
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
                HAI Training Toolkits
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Comprehensive training resources and operational policies for
                community empowerment
              </p>
            </motion.div>
          </div>
        </section>

        {/* Training Toolkits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Training Materials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Access our comprehensive training toolkits designed for
                community empowerment
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {materials.map((toolkit, index) => (
                <motion.div
                  key={toolkit?.title || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full group hover:shadow-elegant transition-all duration-500">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          PDF
                        </span>
                      </div>
                      <CardTitle className="text-xl">
                        {toolkit?.fields?.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {toolkit?.fields?.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(
                            toolkit?.fields?.publishedOn
                          ).toLocaleDateString()}
                        </div>
                      </div>
                      <a
                        href={`https:${toolkit?.fields?.file?.fields?.file?.url}`}
                        download={toolkit?.fields?.file?.fields?.file?.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button variant="outline" className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Policies */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Operational Policies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our organizational policies ensuring transparency,
                accountability, and best practices
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {policies.map((policy, index) => (
                <motion.div
                  key={policy.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-elegant transition-all duration-500">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <Users className="h-8 w-8 text-primary flex-shrink-0" />
                        <span className="text-xs bg-secondary/80 text-secondary-foreground px-2 py-1 rounded">
                          {policy.type}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{policy.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {policy.description}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
                        <Calendar className="h-4 w-4" />
                        Updated:{" "}
                        {new Date(policy.lastUpdated).toLocaleDateString()}
                      </div>
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download Policy
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TrainingToolkits;
