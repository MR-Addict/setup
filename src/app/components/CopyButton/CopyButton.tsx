"use client";

import { BiCheck } from "react-icons/bi";
import { VscCopy } from "react-icons/vsc";
import { useEffect, useState } from "react";

import { copyToClipboard } from "@/lib/utils";

export default function CopyButton({ text }: { text: string }) {
  let origin = "";
  if (typeof window !== "undefined") origin = window.location.origin;

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  function handleClick() {
    copyToClipboard(text.replace("${origion}", origin));
    setCopied(true);
  }

  return (
    <button
      type='button'
      disabled={copied}
      onClick={handleClick}
      aria-label='Copy to Clipboard'
      className='outline-none'
    >
      {copied ? <BiCheck size={16} /> : <VscCopy size={16} />}
    </button>
  );
}
