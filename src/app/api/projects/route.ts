import projectData from "@/data/projectData";

export async function GET(request: Request) {
  return new Response(JSON.stringify(projectData), {
    headers: { "Content-Type": "application/json" },
  })
}
