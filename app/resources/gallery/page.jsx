"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Video, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { client } from "@/lib/contentful";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Gallery = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    getContent();
  }, []);

  async function getContent() {
    try {
      const res = await client.getEntries({ content_type: "gallery" });

      if (res.items && res.items.length > 0) {
        setContent(res.items);
      } else {
        setContent([]);
      }
    } catch (error) {
      console.log("Error fetching content", error);
      setContent([]);
    }
  }

  const videos = content?.filter((con) => con?.fields?.docType === "video");

  const photos = content?.filter((con) => con?.fields?.docType === "photo");

  const [video, setVideo] = useState({});

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleVideoClick = (video) => {
    setVideo(video);
    setVideoModalOpen(true);
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
                  {photos?.length === 0 ? (
                    <Card className="flex w-full justify-center items-center">
                      <p className="">No photos found</p>
                    </Card>
                  ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {photos?.map((photo, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500">
                            <div className="relative overflow-hidden">
                              <img
                                src={`https:${photo?.fields?.file?.fields?.file?.url}`}
                                alt={photo?.fields?.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-lg">
                                <Camera className="h-4 w-4" />
                              </div>
                            </div>
                            <CardContent className="p-6">
                              <h3 className="font-semibold text-lg mb-2">
                                {photo?.fields?.title}
                              </h3>
                              <p className="text-muted-foreground text-sm mb-4">
                                {photo?.fields?.description}
                              </p>
                              <div className="space-y-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  {photo?.fields?.location}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  {new Date(
                                    photo?.fields?.date
                                  ).toLocaleDateString()}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="videos">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500">
                          <div className="relative overflow-hidden">
                            <img
                              src={`/vlc.png`}
                              alt={"VLC Logo"}
                              className="w-full h-30 object-contain flex justify-center items-center group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Button
                                variant="warm"
                                size="lg"
                                onClick={() => handleVideoClick(video)}
                              >
                                <Video className="h-5 w-5 mr-2" />
                                Play Video
                              </Button>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="font-semibold text-lg mb-2">
                              {video?.fields?.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                              {video?.fields?.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {new Date(
                                video?.fields?.date
                              ).toLocaleDateString()}
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

      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{video?.fields?.title}</DialogTitle>
          </DialogHeader>
          <div className="my-3 w-full">
            <video
              src={`https:${video?.fields?.file?.fields?.file?.url}`}
              controls
              className="w-full h-auto"
            ></video>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
