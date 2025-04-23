import projectData from "@/data/projectData";

export async function GET() {
  return new Response(JSON.stringify(projectData), {
    headers: { "Content-Type": "application/json" },
  })
}
