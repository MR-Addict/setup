"use client";

import { BiCheck } from "react-icons/bi";
import { VscCopy } from "react-icons/vsc";
import { useEffect, useState } from "react";

import { copyToClipboard } from "@/lib/utils";

export default function CopyButton({ text, ...rest }: { text: string | undefined } & React.ComponentProps<"button">) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  function handleClick() {
    copyToClipboard(text || "");
    setCopied(true);
  }

  return (
    <button {...rest} type='button' disabled={copied} onClick={handleClick} aria-label='Copy to Clipboard'>
      {copied ? <BiCheck size={16} /> : <VscCopy size={16} />}
    </button>
  );
}
