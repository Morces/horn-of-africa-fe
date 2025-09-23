"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";
import { client } from "@/lib/contentful";

const Reports = () => {
  const reports = [
    {
      title: "Annual Report 2023",
      type: "Annual Report",
      description:
        "Comprehensive overview of HAI's achievements, impact, and financial performance in 2023.",
      year: "2023",
      pages: 48,
      publishDate: "2024-03-01",
      category: "Organizational",
      featured: true,
    },
    {
      title: "Women's Empowerment Impact Assessment",
      type: "Impact Report",
      description:
        "Detailed analysis of the impact of women's empowerment programs across nine counties.",
      year: "2023",
      pages: 32,
      publishDate: "2024-01-15",
      category: "Program Impact",
      featured: true,
    },
    {
      title: "Climate Resilience Program Evaluation",
      type: "Evaluation Report",
      description:
        "External evaluation of climate resilience building programs in pastoralist communities.",
      year: "2023",
      pages: 56,
      publishDate: "2023-12-20",
      category: "Program Evaluation",
      featured: false,
    },
    {
      title: "Financial Audit Report 2023",
      type: "Audit Report",
      description:
        "Independent audit of HAI's financial statements and compliance with donor requirements.",
      year: "2023",
      pages: 24,
      publishDate: "2024-02-10",
      category: "Financial",
      featured: false,
    },
    {
      title: "Girl Child Education Baseline Study",
      type: "Research Report",
      description:
        "Baseline study on education access and completion rates for girls in target counties.",
      year: "2023",
      pages: 40,
      publishDate: "2023-11-30",
      category: "Research",
      featured: false,
    },
    {
      title: "Peace Building Initiative Report",
      type: "Program Report",
      description:
        "Progress report on peace building and conflict resolution initiatives in the region.",
      year: "2023",
      pages: 28,
      publishDate: "2023-10-15",
      category: "Program Impact",
      featured: false,
    },
    {
      title: "Quarterly Progress Report Q4 2023",
      type: "Quarterly Report",
      description:
        "Detailed progress update on all programs and activities for the fourth quarter of 2023.",
      year: "2023",
      pages: 20,
      publishDate: "2024-01-30",
      category: "Progress Update",
      featured: false,
    },
    {
      title: "Donor Impact Report 2023",
      type: "Impact Report",
      description:
        "Comprehensive report on donor-funded projects and their outcomes for stakeholder transparency.",
      year: "2023",
      pages: 36,
      publishDate: "2024-02-28",
      category: "Donor Relations",
      featured: true,
    },
  ];

  const categories = [
    "All",
    "Organizational",
    "Program Impact",
    "Program Evaluation",
    "Financial",
    "Research",
    "Progress Update",
    "Donor Relations",
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Organizational: "bg-blue-100 text-blue-800",
      "Program Impact": "bg-green-100 text-green-800",
      "Program Evaluation": "bg-purple-100 text-purple-800",
      Financial: "bg-orange-100 text-orange-800",
      Research: "bg-indigo-100 text-indigo-800",
      "Progress Update": "bg-yellow-100 text-yellow-800",
      "Donor Relations": "bg-red-100 text-red-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const [allReports, setReports] = useState(reports);

  useEffect(() => {
    getReports();
  }, []);

  async function getReports() {
    try {
      const res = await client.getEntries({ content_type: "reports" });

      if (res?.items && res?.items.length > 0) {
        setReports(res?.items);
      } else {
        setReports([]);
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
      setReports([]);
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
                Reports & Publications
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Access our comprehensive reports, evaluations, and
                organizational documents
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Reports */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Featured Reports</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our most important publications and recent reports
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {allReports
                .filter((report) => report?.fields?.isFeatured)
                .map((report, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="h-full group hover:shadow-elegant transition-all duration-500 border-primary/20">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <BarChart3 className="h-8 w-8 text-primary flex-shrink-0" />
                          <span
                            className={`text-xs px-2 py-1 rounded ${getCategoryColor(
                              report?.fields?.tag
                            )}`}
                          >
                            {report?.fields?.tag}
                          </span>
                        </div>
                        <CardTitle className="text-xl">
                          {report?.fields?.title}
                        </CardTitle>
                        {/* <div className="text-sm text-primary font-medium">
                          {report.type} • {report.year}
                        </div> */}
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {report?.fields?.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(
                              report?.fields?.date
                            ).toLocaleDateString()}
                          </div>
                        </div>
                        <a
                          href={`https:${report?.fields?.file?.fields?.file?.url}`}
                          download={
                            report?.fields?.file?.fields?.file?.fileName
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button variant="hero" className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            Download Report
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* All Reports */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                All Reports & Documents
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete archive of our organizational reports and publications
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {allReports?.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="group hover:shadow-elegant transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg leading-tight">
                              {report?.fields?.title}
                            </h3>
                            <span
                              className={`text-xs px-2 py-1 rounded whitespace-nowrap ml-2 ${getCategoryColor(
                                report?.fields?.tag
                              )}`}
                            >
                              {report?.fields?.tag}
                            </span>
                          </div>
                          {/* <div className="text-sm text-primary font-medium mb-2">
                            {report.type} • {report.year}
                          </div> */}
                          <p className="text-muted-foreground text-sm mb-4">
                            {report?.fields?.description}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(
                                  report?.fields?.date
                                ).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <a
                            href={`https:${report?.fields?.file?.fields?.file?.url}`}
                            download={
                              report?.fields?.file?.fields?.file?.fileName
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </a>
                        </div>
                      </div>
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

export default Reports;
