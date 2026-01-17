import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");
  
  const searchList = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description || "",
    pubDate: post.data.pubDate,
    tags: post.data.tags || [],
    slug: `/blog/${post.id}/`,
  }));

  return new Response(JSON.stringify(searchList), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
