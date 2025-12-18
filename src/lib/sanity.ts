import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "4zzphlos",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
