import Link from "next/link";
import { CiLogin } from "react-icons/ci";

import { ScriptType } from "./config";
import { CopyButton } from "./components";

export default function ScriptCard({ script }: { script: ScriptType }) {
  return (
    <li className='flex flex-col rounded-md border border-gray-200 shadow-md'>
      <div className='flex flex-row justify-between px-3 py-2 rounded-t-md'>
        <h1 className='flex flex-row items-center gap-1 font-semibold'>{script.name}</h1>

        <Link aria-label='script link' href={"/script/" + script.path}>
          <CiLogin size={18} />
        </Link>
      </div>

      <div className='flex flex-col md:flex-row md:items-center justify-between py-1 px-3 bg-gray-200 '>
        <code className='break-words'>{script.cmd}</code>

        <CopyButton text={script.cmd} />
      </div>
    </li>
  );
}
