"use client";

import "./style/prism-vscode-light.css";
import "./style/prism-line-numbers.css";
import "./style/rehype-code-title.css";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import Pre from "./Pre/Pre";

export default function CodePreview({ serializedMDX }: { serializedMDX: MDXRemoteSerializeResult }) {
  return <MDXRemote {...serializedMDX} components={{ pre: Pre }} />;
}
