"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/lib/contentful";
import { Skeleton } from "@/components/ui/skeleton";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export default function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    async function getBlog() {
      try {
        const res = await client.getEntry(id);
        setBlog(res.fields);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    }
    getBlog();
  }, [id]);

  const imageUrl = blog?.image?.fields?.file?.url
    ? `https:${blog.image.fields.file.url}`
    : "";

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-3xl font-bold mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl font-semibold mb-3">{children}</h2>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc list-inside mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal list-inside mb-4">{children}</ol>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4">
          {children}
        </blockquote>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      ),
    },
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <Skeleton className="h-8 w-3/4" /> {/* title */}
        <Skeleton className="h-4 w-1/3" /> {/* meta */}
        <Skeleton className="h-64 w-full rounded-lg" /> {/* image */}
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-9/12" />
        </div>
      </div>
    );
  }

  if (!blog) return <div className="p-6 text-center">Blog not found</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>

      <div className="text-sm text-gray-500 mb-6">
        By <span className="font-medium">{blog.author}</span> •{" "}
        {new Date(blog.publishedAt).toLocaleDateString()}
      </div>

      {imageUrl && (
        <div className="mb-6">
          <Image
            src={imageUrl}
            alt={blog.image?.fields?.title || "Blog Image"}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
      )}

      <p className="mb-8 text-lg text-gray-700">{blog.description}</p>

      <div className="prose max-w-none">
        {documentToReactComponents(blog.body, options)}
      </div>

      {blog.tags && blog.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
