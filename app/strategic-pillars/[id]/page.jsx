"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/lib/contentful";
import { Skeleton } from "@/components/ui/skeleton";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export default function Pillar() {
  const { id } = useParams();
  const [pillar, setPillar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    async function getPillar() {
      try {
        const res = await client.getEntry(id);
        setPillar(res.fields);
      } catch (err) {
        console.error("Error fetching pillar:", err);
      } finally {
        setLoading(false);
      }
    }
    getPillar();
  }, [id]);

  const imageUrl = pillar?.image?.fields?.file?.url
    ? `https:${pillar.image.fields.file.url}`
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

  if (!pillar) return <div className="p-6 text-center">Pillar not found</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{pillar?.title}</h1>

      {imageUrl && (
        <div className="mb-6">
          <Image
            src={imageUrl}
            alt={pillar?.image?.fields?.title || "Pillar Image"}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
      )}

      <p className="mb-8 text-lg text-gray-700">{pillar?.description}</p>

      <div className="prose max-w-none">
        {documentToReactComponents(pillar?.body, options)}
      </div>
    </div>
  );
}
