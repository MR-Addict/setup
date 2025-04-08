import { notFound } from "next/navigation";
import { scripts, ScriptType } from "@/data/data";

import style from "./page.module.css";
import setMetadata from "@/lib/utils/setMetadata";

import MarkdownRenderer from "@/components/MarkdownRenderer/MarkdownRenderer";

const generateMarkdown = (script: ScriptType) => {
  return `
[Back](/)

# ${script.name}

${script.description}.

You can install this script by running the following command in your terminal.

\`\`\`sh
${script.urlCmd}
\`\`\`

Below is the raw script content, which you can also get from the command above from the api ${script.url}.

\`\`\`sh
${script.shell}
\`\`\`
`.trim();
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const script = scripts.find((script) => script.id === slug);
  if (!script) return notFound();

  return (
    <main className={style.wrapper}>
      <MarkdownRenderer content={generateMarkdown(script)} className={style.markdown} />
    </main>
  );
}

export function generateStaticParams() {
  return scripts.map((script) => ({ slug: script.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return setMetadata(scripts.find((script) => script.id === slug)?.name);
}
