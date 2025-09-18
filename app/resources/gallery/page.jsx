"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Video, Calendar, MapPin } from "lucide-react";

const Gallery = () => {
  const photos = [
    {
      id: 1,
      title: "Women's Leadership Training in Isiolo",
      location: "Isiolo County",
      date: "2024-02-15",
      image:
        "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Training+Session",
      description:
        "Pastoralist women participating in leadership skills training",
    },
    {
      id: 2,
      title: "Climate Resilience Workshop",
      location: "Turkana County",
      date: "2024-01-20",
      image: "https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Workshop",
      description: "Community members learning climate adaptation strategies",
    },
    {
      id: 3,
      title: "Girl Child Education Campaign",
      location: "Marsabit County",
      date: "2023-12-10",
      image: "https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Education",
      description:
        "Promoting education access for girls in pastoralist communities",
    },
    {
      id: 4,
      title: "Peace Building Dialogue",
      location: "Garissa County",
      date: "2023-11-15",
      image:
        "https://via.placeholder.com/400x300/059669/FFFFFF?text=Peace+Building",
      description: "Inter-community dialogue for conflict resolution",
    },
    {
      id: 5,
      title: "Water Project Launch",
      location: "Wajir County",
      date: "2023-10-08",
      image:
        "https://via.placeholder.com/400x300/D97706/FFFFFF?text=Water+Project",
      description: "New water facility benefiting pastoralist families",
    },
    {
      id: 6,
      title: "Livestock Training Program",
      location: "Samburu County",
      date: "2023-09-22",
      image: "https://via.placeholder.com/400x300/0891B2/FFFFFF?text=Livestock",
      description: "Modern livestock management techniques training",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "HAI Impact Story: Transforming Lives in Northern Kenya",
      duration: "5:42",
      date: "2024-02-01",
      thumbnail:
        "https://via.placeholder.com/400x225/4F46E5/FFFFFF?text=Impact+Story",
      description:
        "Stories of women who have been empowered through HAI programs",
    },
    {
      id: 2,
      title: "Climate Adaptation in Pastoralist Communities",
      duration: "8:15",
      date: "2024-01-10",
      thumbnail:
        "https://via.placeholder.com/400x225/7C3AED/FFFFFF?text=Climate+Adaptation",
      description: "Documentary on climate change adaptation strategies",
    },
    {
      id: 3,
      title: "Education: Breaking Barriers for Pastoralist Girls",
      duration: "6:30",
      date: "2023-12-05",
      thumbnail:
        "https://via.placeholder.com/400x225/DC2626/FFFFFF?text=Education+Story",
      description: "Following girls who have overcome educational barriers",
    },
    {
      id: 4,
      title: "Peace Building Through Women's Groups",
      duration: "4:20",
      date: "2023-11-20",
      thumbnail:
        "https://via.placeholder.com/400x225/059669/FFFFFF?text=Peace+Building",
      description: "How women's groups are fostering peace in communities",
    },
  ];

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
                Gallery
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Visual stories of our impact and the communities we serve
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="photos" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="photos" className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  Photos
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  Videos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="photos">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((photo, index) => (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500">
                          <div className="relative overflow-hidden">
                            <img
                              src={photo.image}
                              alt={photo.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-lg">
                              <Camera className="h-4 w-4" />
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="font-semibold text-lg mb-2">
                              {photo.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                              {photo.description}
                            </p>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {photo.location}
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {new Date(photo.date).toLocaleDateString()}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="videos">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    {videos.map((video, index) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500">
                          <div className="relative overflow-hidden">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Button variant="warm" size="lg">
                                <Video className="h-5 w-5 mr-2" />
                                Play Video
                              </Button>
                            </div>
                            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-sm">
                              {video.duration}
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="font-semibold text-lg mb-2">
                              {video.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                              {video.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {new Date(video.date).toLocaleDateString()}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
