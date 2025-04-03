"use client";

import { BiCheck } from "react-icons/bi";
import { VscCopy } from "react-icons/vsc";
import { useEffect, useState } from "react";

import copyToClipboard from "@/lib/utils/copyToClipboard";

type Props = { text: string } & React.ComponentProps<"button">;

export default function CopyButton({ text, ...rest }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  function handleClick() {
    if (copyToClipboard(text)) setCopied(true);
    else alert("Current environment does not support copying to clipboard.");
  }

  return (
    <button {...rest} type="button" disabled={copied} onClick={handleClick} aria-label="Copy">
      {copied ? <BiCheck size={16} /> : <VscCopy size={16} />}
    </button>
  );
}
