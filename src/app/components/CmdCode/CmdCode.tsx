"use client";

export default function CmdCode({ cmd }: { cmd: string }) {
  const origion = location.origin;

  return <code className='break-words'>{cmd.replace("${origion}", origion)}</code>;
}
