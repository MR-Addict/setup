"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

import links from "./config";
import style from "./Navbar.module.css";

export default function Navbar() {
  const rootPath = (usePathname() || "/").split("/").slice(0, 2).join("/");

  return (
    <nav className={style.nav}>
      <ul className='flex flex-row gap-4'>
        {links.map((link) => (
          <li key={link.name} className={classNames(style.link, rootPath === link.path ? style.active : "")}>
            {link.local ? (
              <Link href={link.path}>{link.name}</Link>
            ) : (
              <a href={link.path} target='_blank'>
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
