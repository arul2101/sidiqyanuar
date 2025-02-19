import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "sk4j2ubm",
  dataset: "production",
  useCdn: true,
});
