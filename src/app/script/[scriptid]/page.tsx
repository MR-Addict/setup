import { Gist } from "@/components";
import getScripts from "@/app/config";
import { setMetadata } from "@/lib/utils";
import { notFound } from "next/navigation";

export default function Page({ params: { scriptid } }: { params: { scriptid: string } }) {
  const script = getScripts().find((script) => script.path === scriptid);
  if (!script) notFound();

  return (
    <main className='w-full max-w-4xl flex-1 flex flex-col'>
      <Gist owner='MR-Addict' id={script.id} height={590} />
    </main>
  );
}

export function generateStaticParams() {
  return getScripts().map((script) => ({ scriptid: script.path }));
}

export async function generateMetadata({ params: { scriptid } }: { params: { scriptid: string } }) {
  return setMetadata(`Setup • ${getScripts().find((script) => script.path === scriptid)?.name}`);
}
