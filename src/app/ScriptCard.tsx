import Link from "next/link";
import { CiLogin } from "react-icons/ci";

import { ScriptType } from "./config";
import { CopyButton } from "./components";

export default function ScriptCard({ script, index }: { script: ScriptType; index: number }) {
  return (
    <li className='flex flex-col gap-1'>
      <div className='flex flex-row items-center gap-1'>
        <h1>{index}.</h1>
        <h1>{script.name}</h1>
      </div>

      <div className='rounded-md px-2 py-1 bg-gray-500/30 border border-gray-500 flex flex-col md:flex-row md:items-center justify-between md:gap-5'>
        <code className='break-words'>{script.cmd}</code>

        <div className='flex flex-row items-center gap-1'>
          <Link aria-label='script link' href={"/script/" + script.path}>
            <CiLogin size={18} />
          </Link>
          <CopyButton text={script.cmd} />
        </div>
      </div>
    </li>
  );
}
