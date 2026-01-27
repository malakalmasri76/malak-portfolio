import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "mdvzdco5", // ستجدينه في لوحة تحكم Sanity
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);