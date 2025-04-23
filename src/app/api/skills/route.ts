import skillData from "@/data/skillData";

export async function GET() {
  return new Response(JSON.stringify(skillData), {
    headers: { "Content-Type": "application/json" },
  });
}
