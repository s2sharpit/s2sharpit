import skillData from "@/data/skillData";

export async function GET(request: Request) {
  return new Response(JSON.stringify(skillData), {
    headers: { "Content-Type": "application/json" },
  });
}
