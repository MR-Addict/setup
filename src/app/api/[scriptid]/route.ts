import getScripts from "@/app/config";
import { readScript } from "@/lib/pre";

export function GET(request: Request, { params: { scriptid } }: { params: { scriptid: string } }) {
  const script = getScripts().find((script) => script.path === scriptid);
  if (!script) return new Response("No such script", { status: 400 });

  const content = readScript(scriptid);
  return new Response(content, { status: 200 });
}
