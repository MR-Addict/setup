"use client";

import { useRef } from "react";

import style from "./Pre.module.css";
import { CopyButton } from "@/components";

export default function Pre(props: React.ComponentProps<"pre">) {
  const ref = useRef<HTMLPreElement>(null);

  return (
    <div className={style.container}>
      <pre {...props} ref={ref}>
        <CopyButton text={ref} className={style["copy-btn"]} />
        {props.children}
      </pre>
    </div>
  );
}
