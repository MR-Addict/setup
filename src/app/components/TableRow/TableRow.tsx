"use client";

import Link from "next/link";
import { useMemo } from "react";
import { PiShare, PiDownloadSimple } from "react-icons/pi";

import style from "./TableRow.module.css";
import { ScriptType } from "@/data/data";
import { getUserPlatform } from "@/lib/utils/getUserPlatform";

import CopyButton from "@/components/CopyButton/CopyButton";

export default function TableRow({ script }: { script: ScriptType }) {
  const isSafari = useMemo(() => getUserPlatform().browser === "safari", []);

  return (
    <tr className={style.row}>
      <td>{isSafari ? <Link href={`/script/${script.id}`}>{script.name}</Link> : script.name}</td>
      <td>{script.description}</td>
      <td className={style.actions}>
        <div>
          <CopyButton text={script.urlCmd} title="Copy install command" className={style.btn} />
          <a title="Download" className={style.btn} href={`/api/script/${script.id}`} download={`${script.name}.sh`}>
            <PiDownloadSimple />
          </a>
          <Link className={style.btn} title="View" href={`/api/script/${script.id}`} target="_blank">
            <PiShare />
          </Link>
        </div>
      </td>
      <td>{!isSafari && <Link href={`/script/${script.id}`} className={style.link} />}</td>
    </tr>
  );
}
