"use client";

export default function CmdCode({ cmd }: { cmd: string }) {
  let origin = "";
  if (typeof window !== "undefined") origin = window.location.origin;

  return <code className='break-words h-[25.5px]'>{origin ? cmd.replace("${origion}", origin) : ""}</code>;
}
