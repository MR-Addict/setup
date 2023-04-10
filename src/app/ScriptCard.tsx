import Link from "next/link";
import { CiLogin } from "react-icons/ci";

import { ScriptType } from "./config";
import { CopyButton } from "@/components";

export default function ScriptCard({ script }: { script: ScriptType }) {
  return (
    <li className='flex flex-col rounded-md shadow'>
      <div className='flex flex-row justify-between px-3 py-1.5 rounded-t-md'>
        <h1 className='flex flex-row items-center gap-1 font-semibold'>{script.name}</h1>

        <div className='flex flex-row items-center gap-1'>
          <CopyButton text={script.cmd} className='md:hidden' />

          <Link aria-label='script link' href={"/script/" + script.path}>
            <CiLogin size={18} />
          </Link>
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:items-center justify-between py-2 px-3 border-t border-t-gray-300 bg-gray-100 rounded-b-md'>
        <input
          disabled
          value={script.cmd}
          aria-label={script.path}
          className='w-full bg-none outline-none text-black'
        />

        <CopyButton text={script.cmd} className='hidden md:block' />
      </div>
    </li>
  );
}
