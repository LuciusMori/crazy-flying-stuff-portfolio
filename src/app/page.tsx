import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: "OGIma - Naima & Ognjen",
    description: "Social Media & Webentwicklung - Wir gehen Hand in Hand",
    openGraph: {
      title: "OGIma - Naima & Ognjen",
      description: "Social Media & Webentwicklung - Wir gehen Hand in Hand",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "OGIma - Naima & Ognjen Portfolio",
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "OGIma - Naima & Ognjen",
      description: "Social Media & Webentwicklung - Wir gehen Hand in Hand",
      images: ["/og-image.jpg"],
    },
  };
}

export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return <SliceZone slices={home.data.slices} components={components} />;
}
