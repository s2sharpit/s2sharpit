import qualifiData from "@/data/qualifiData";

export async function GET() {
  return new Response(JSON.stringify(qualifiData), {
    headers: { "Content-Type": "application/json" },
  });
}
