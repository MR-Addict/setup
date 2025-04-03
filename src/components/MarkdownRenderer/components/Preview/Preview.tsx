import { useRef } from "react";

import style from "./Preview.module.css";

import CopyButton from "./components/CopyButton/CopyButton";

export default function Pre(props: React.ComponentProps<"pre">) {
  const preRef = useRef<HTMLPreElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapperRef} className={style.wrapper}>
      <div className={style.btns}>
        <CopyButton preRef={preRef} />
      </div>

      <pre {...props} ref={preRef}>
        {props.children}
      </pre>
    </div>
  );
}
