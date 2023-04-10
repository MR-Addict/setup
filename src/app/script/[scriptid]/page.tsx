import { notFound } from "next/navigation";

import getScripts from "@/app/config";
import { serializeMDX } from "@/lib/pre";
import { CodePreview } from "@/components";
import { setMetadata } from "@/lib/utils";

export default async function Page({ params: { scriptid } }: { params: { scriptid: string } }) {
  const script = getScripts().find((script) => script.path === scriptid);
  if (!script) notFound();

  const serializedMDX = await serializeMDX(script.path);

  return (
    <main className='w-full max-w-4xl flex-1 flex flex-col'>
      <CodePreview serializedMDX={serializedMDX} />
    </main>
  );
}

export function generateStaticParams() {
  return getScripts().map((script) => ({ scriptid: script.path }));
}

export async function generateMetadata({ params: { scriptid } }: { params: { scriptid: string } }) {
  return setMetadata(`Setup • ${getScripts().find((script) => script.path === scriptid)?.name}`);
}
