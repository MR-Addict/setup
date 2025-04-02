import { scripts } from "@/data/data";

export function GET(req: Request, { params: { slug } }: { params: { slug: string } }) {
  const script = scripts.find((script) => script.id === slug);
  if (!script) return new Response("No such script", { status: 404 });

  return new Response(script.shell, { status: 200 });
}

export function generateStaticParams() {
  return scripts.map((script) => ({ slug: script.id }));
}
