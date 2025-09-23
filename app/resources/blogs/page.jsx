"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { client } from "@/lib/contentful";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Empowering Pastoralist Women: A Journey of Transformation",
      excerpt:
        "Discover how pastoralist women in Northern Kenya are breaking barriers and becoming leaders in their communities through HAI's empowerment programs.",
      content: "Full blog content would be loaded from CMS...",
      author: {
        name: "Dr. Sarah Kiptoo",
        avatar: "https://via.placeholder.com/40x40/4F46E5/FFFFFF?text=SK",
        role: "Executive Director",
      },
      publishDate: "2024-02-20",
      readTime: "5 min read",
      category: "Women Empowerment",
      tags: ["Leadership", "Pastoralist", "Women", "Empowerment"],
      featured: true,
      image:
        "https://via.placeholder.com/600x300/4F46E5/FFFFFF?text=Women+Empowerment",
    },
    {
      id: 2,
      title: "Climate Change and Pastoralism: Adapting to New Realities",
      excerpt:
        "Exploring innovative adaptation strategies that pastoralist communities are using to cope with changing climate patterns in the Horn of Africa.",
      content: "Full blog content would be loaded from CMS...",
      author: {
        name: "Ahmed Hassan",
        avatar: "https://via.placeholder.com/40x40/7C3AED/FFFFFF?text=AH",
        role: "Field Coordinator",
      },
      publishDate: "2024-02-15",
      readTime: "7 min read",
      category: "Climate Change",
      tags: ["Climate", "Adaptation", "Pastoralism", "Resilience"],
      featured: true,
      image:
        "https://via.placeholder.com/600x300/7C3AED/FFFFFF?text=Climate+Change",
    },
    {
      id: 3,
      title: "Education as a Tool for Girl Child Empowerment",
      excerpt:
        "How education is transforming the lives of girls in pastoralist communities and breaking the cycle of early marriage and poverty.",
      content: "Full blog content would be loaded from CMS...",
      author: {
        name: "Grace Chebet",
        avatar: "https://via.placeholder.com/40x40/DC2626/FFFFFF?text=GC",
        role: "Communications Officer",
      },
      publishDate: "2024-02-10",
      readTime: "6 min read",
      category: "Education",
      tags: ["Education", "Girls", "Empowerment", "Child Rights"],
      featured: false,
      image: "https://via.placeholder.com/600x300/DC2626/FFFFFF?text=Education",
    },
    {
      id: 4,
      title: "Building Peace Through Women's Leadership",
      excerpt:
        "The crucial role of women in conflict resolution and peace building processes in pastoralist communities across the Horn of Africa.",
      content: "Full blog content would be loaded from CMS...",
      author: {
        name: "Mary Wanjiku",
        avatar: "https://via.placeholder.com/40x40/059669/FFFFFF?text=MW",
        role: "Program Manager",
      },
      publishDate: "2024-02-05",
      readTime: "8 min read",
      category: "Peace Building",
      tags: ["Peace", "Conflict Resolution", "Women", "Leadership"],
      featured: false,
      image:
        "https://via.placeholder.com/600x300/059669/FFFFFF?text=Peace+Building",
    },
    {
      id: 5,
      title: "The Power of Data in Development Programming",
      excerpt:
        "How evidence-based programming is improving outcomes for pastoralist communities and ensuring accountability to stakeholders.",
      content: "Full blog content would be loaded from CMS...",
      author: {
        name: "Peter Lorot",
        avatar: "https://via.placeholder.com/40x40/D97706/FFFFFF?text=PL",
        role: "Research Analyst",
      },
      publishDate: "2024-01-30",
      readTime: "5 min read",
      category: "Data & Evidence",
      tags: ["Data", "Evidence", "Programming", "Accountability"],
      featured: false,
      image:
        "https://via.placeholder.com/600x300/D97706/FFFFFF?text=Data+Evidence",
    },
    {
      id: 6,
      title: "Water Security and Gender: A Critical Connection",
      excerpt:
        "Examining the relationship between water security and gender roles in arid and semi-arid lands, and the implications for development.",
      content: "Full blog content would be loaded from CMS...",
      author: {
        name: "Dr. Sarah Kiptoo",
        avatar: "https://via.placeholder.com/40x40/4F46E5/FFFFFF?text=SK",
        role: "Executive Director",
      },
      publishDate: "2024-01-25",
      readTime: "6 min read",
      category: "Water Security",
      tags: ["Water", "Gender", "Security", "ASAL"],
      featured: false,
      image:
        "https://via.placeholder.com/600x300/0891B2/FFFFFF?text=Water+Security",
    },
  ];

  const categories = [
    "All",
    "Women Empowerment",
    "Climate Change",
    "Education",
    "Peace Building",
    "Data & Evidence",
    "Water Security",
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Women Empowerment": "bg-pink-100 text-pink-800",
      "Climate Change": "bg-green-100 text-green-800",
      Education: "bg-blue-100 text-blue-800",
      "Peace Building": "bg-purple-100 text-purple-800",
      "Data & Evidence": "bg-orange-100 text-orange-800",
      "Water Security": "bg-cyan-100 text-cyan-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const router = useRouter();

  const [posts, setPosts] = useState(blogPosts);

  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() {
    try {
      const res = await client.getEntries({ content_type: "blogPage" });

      if (res?.items && res?.items.length > 0) {
        setPosts(res?.items);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setPosts([]);
    }
  }

  const goToBlog = (id) => {
    router.push(`/resources/blogs/${id}`);
  };

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
                Blogs & Insights
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Stories, insights, and perspectives from the field on
                pastoralist communities and development
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our latest and most impactful stories from the field
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {posts
                .filter((post) => post?.fields?.isFeatured)
                .map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500 h-full">
                      <div className="relative overflow-hidden">
                        <img
                          href={`https:${post?.fields?.image?.fields?.file?.url}`}
                          alt={post?.fields?.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl line-clamp-2">
                          {post?.fields?.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post?.fields?.description}
                        </p>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <div>
                              <div className="text-sm font-medium">
                                {post?.fields?.author}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(
                              post?.fields?.publishedAt
                            ).toLocaleDateString()}
                          </div>
                          <span>{post?.fields?.numberOfMinutes} read</span>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => goToBlog(post?.sys.id)}
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* All Blog Posts */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">All Articles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our complete collection of insights and stories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts?.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500 h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={`https:${post?.fields?.file?.fields?.file?.url}`}
                        alt={post?.fields?.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {post?.fields?.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post?.fields?.description}
                      </p>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="text-sm">
                          <div className="font-medium">
                            {post?.fields?.author}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(
                            post?.fields?.publishedAt
                          ).toLocaleDateString()}
                        </div>
                        <span>{post?.fields?.numberOfMinutes} min read</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post?.fields?.tags?.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => goToBlog(post?.sys.id)}
                      >
                        Read Article
                        <ArrowRight className="h-3 w-3 ml-2" />
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

export default Blogs;
