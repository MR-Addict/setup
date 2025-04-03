"use client";

import clsx from "clsx";
import { BiCheck } from "react-icons/bi";
import { VscCopy } from "react-icons/vsc";
import { useEffect, useState } from "react";

import style from "../../Preview.module.css";
import copyToClipboard from "@/lib/utils/copyToClipboard";

type Props = { preRef: React.RefObject<HTMLPreElement> } & React.ComponentProps<"button">;

export default function CopyButton({ preRef, ...rest }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  function handleClick() {
    const text = preRef.current?.innerText.replaceAll("\n\n", "\n");
    if (text && copyToClipboard(text)) setCopied(true);
    else alert("Current environment does not support copying to clipboard.");
  }

  return (
    <button
      {...rest}
      title="Copy"
      type="button"
      disabled={copied}
      onClick={handleClick}
      className={clsx(style.btn, rest.className)}
    >
      {copied ? <BiCheck size={16} /> : <VscCopy size={16} />}
    </button>
  );
}
