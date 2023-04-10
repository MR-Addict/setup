"use client";

export default function CmdCode({ cmd }: { cmd: string }) {
  let origion = "http://example.com/";

  if (typeof window !== "undefined") origion = window.location.origin;
  return <code className='break-words'>{cmd.replace("${origion}", origion)}</code>;
}
