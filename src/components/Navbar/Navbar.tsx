"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

import getScripts from "@/app/config";
import style from "./Navbar.module.css";

function Scripts({ rootPath }: { rootPath: string[] }) {
  return (
    <li className='group'>
      <button
        type='button'
        className={classNames(style.link, rootPath.slice(0, 2).join("/") === "/script" ? style.active : "", "relative")}
      >
        Script
      </button>

      <ul className='z-10 invisible opacity-0 scale-95 origin-top group-hover:visible group-hover:opacity-100 group-hover:scale-100 delay-100 duration-300 absolute mt-0.5 left-1/2 -translate-x-1/2 py-3 px-5 bg-white rounded-md space-y-2.5 shadow'>
        {getScripts().map((script) => (
          <li
            key={script.path}
            className={classNames(
              style.link,
              rootPath.join("/") === "/script/" + script.path ? style.active : "",
              "border-b"
            )}
          >
            <Link href={"/script/" + script.path}>{script.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Navbar() {
  const rootPath = (usePathname() || "/").split("/").slice(0, 3);

  return (
    <nav className='py-2 px-7 rounded-3xl shadow'>
      <ul className='flex flex-row gap-4'>
        <li className={classNames(style.link, rootPath.join("/") === "/" ? style.active : "")}>
          <Link href='/'>Home</Link>
        </li>

        <Scripts rootPath={rootPath} />

        <li className={style.link}>
          <a href='https://github.com/MR-Addict/setup' target='_blank'>
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}
