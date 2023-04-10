import fs from "fs";
import path from "path";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const postsDir = path.join(process.cwd(), "src/scripts");

async function serializeMDX(markdown: string) {
  return await serialize(markdown, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, [rehypePrism, { showLineNumbers: true, ignoreMissing: true }]],
    },
  });
}

export default async function getScriptContent(id: string) {
  const filePath = path.join(postsDir, `${id}.sh`);
  const fileContent = fs.readFileSync(filePath, "utf8").replace("$ORIGIN_URL", process.env.ORIGIN_URL || "");

  const markdown = `\`\`\`sh:${id}.sh\n${fileContent}${fileContent.endsWith("\n") ? "" : "\n"}\`\`\``;
  const serializedMDX: MDXRemoteSerializeResult = await serializeMDX(markdown);

  return serializedMDX;
}
