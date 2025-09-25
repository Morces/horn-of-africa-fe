"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  MessageSquare,
  BarChart3,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/lib/contentful";
import { ClipLoader } from "react-spinners";
import { sliceString } from "@/lib/sliceString";

const StrategicPillars = () => {
  const pillars = [
    {
      id: 1,
      icon: <Shield className="h-8 w-8" />,
      title: "Resilience Building",
      description:
        "Strengthening the capacity of people especially women and girls, institutions and systems to prevent, mitigate and respond to diverse risks including crisis, conflict, natural disasters, climate and social and economic shocks.",
    },
    {
      id: 2,
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Advocacy & Communication",
      description:
        "Promoting policy change and social transformation through strategic advocacy, communications, and engagement with stakeholders at local, national, and regional levels to advance pastoralist women's rights.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data, Evidence & Learning",
      description:
        "Routinely and across all our thematic areas of work, we systematically collect, organize, analyze and use data, information and evidence to inform everything we do, each time to enable us to do it better.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Inclusion",
      description:
        "A rights-based approach centered on empowerment, inclusion, equity, human agency and women’s rights and empowerment which recognizes that poverty and inequality are multidimensional.",
    },
  ];

  const [allPillars, setPillars] = useState(pillars);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPillars();
  }, []);

  async function getPillars() {
    setLoading(true);
    try {
      const res = await client.getEntries({
        content_type: "strategicPillars",
        order: "fields.no",
      });

      if (res.items && res?.items.length > 0) {
        setPillars(res?.items);
      } else {
        setPillars([]);
      }
    } catch (error) {
      console.error("Error fetching pillars:", error);
      setLoading(false);
      setPillars([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Strategic Pillars
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our framework for creating sustainable change and empowering
            pastoralist communities
          </p>
        </motion.div>

        {loading ? (
          <div className="w-full justify-center items-center my-5 min-h-[200px]">
            <ClipLoader size={50} color={"#CC320A"} loading={loading} />
          </div>
        ) : allPillars?.length === 0 ? (
          <Card className="w-full justify-center items-center">
            <CardContent>
              <p className="text-muted-foreground">
                No strategic pillars available at the moment.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {allPillars?.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full group hover:shadow-elegant transition-all duration-500">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                        <Shield className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">
                        {pillar?.fields?.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {sliceString(pillar?.fields?.description, 250)}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild>
                      <div className="flex">
                        <Link href={`/strategic-pillars/${pillar?.sys?.id}`}>
                          Learn More
                        </Link>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button variant="hero" size="lg" asChild>
            <Link href="/work">Learn More About Our Work</Link>
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default StrategicPillars;
