import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import readScript from "./readScript";

export default async function serializeMDX(id: string) {
  const fileContent = readScript(id);

  const markdown = `\`\`\`sh:${id}.sh\n${fileContent}${fileContent.endsWith("\n") ? "" : "\n"}\`\`\``;
  const serializedMDX: MDXRemoteSerializeResult = await serialize(markdown, {
    mdxOptions: { rehypePlugins: [rehypeCodeTitles, [rehypePrism, { showLineNumbers: true, ignoreMissing: true }]] },
  });

  return serializedMDX;
}
