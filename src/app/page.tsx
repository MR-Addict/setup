import scripts from "./config";
import ScriptCard from "./ScriptCard";
import { setMetadata } from "@/lib/utils";

export const metadata = setMetadata("Setup");

export default function Page() {
  return (
    <main className='w-full max-w-4xl'>
      <ul className='w-full flex flex-col gap-7'>
        {scripts.map((script, index) => (
          <ScriptCard key={script.name} script={script} index={index + 1} />
        ))}
      </ul>
    </main>
  );
}
