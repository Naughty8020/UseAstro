import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  image?: { url: string; height: number; width: number };
  tags?: string; // カンマ区切りの文字列（例: "React, TypeScript"）を想定
  category: string;
  link?: string;
  github?: string;
  featured: boolean;
};

export const microcmsClient = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN || "YOUR_SERVICE_DOMAIN",
  apiKey: import.meta.env.MICROCMS_API_KEY || "YOUR_API_KEY",
});

export const getWorks = async (queries?: MicroCMSQueries) => {
  return await microcmsClient.getList<Work>({ endpoint: "works", queries });
};
