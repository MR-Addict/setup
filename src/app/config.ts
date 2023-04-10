import env from "@/types/env";

export interface ScriptType {
  name: string;
  path: string;
  id: string;
  cmd: string;
}

const scripts = [
  {
    name: "Git",
    path: "git",
    id: "2d6c51c433227720de5da1b83710aa90",
  },
  {
    name: "Clash",
    path: "clash",
    id: "406af2553eba7300940968c5f14fba2f",
  },
  {
    name: "Docker",
    path: "docker",
    id: "406af2553eba7300940968c5f14fba2f",
  },
  {
    name: "Vim",
    path: "vim",
    id: "406af2553eba7300940968c5f14fba2f",
  },
  {
    name: "Alias",
    path: "alias",
    id: "406af2553eba7300940968c5f14fba2f",
  },
  {
    name: "Grub",
    path: "grub",
    id: "406af2553eba7300940968c5f14fba2f",
  },
  {
    name: "Mdbook",
    path: "mdbook",
    id: "406af2553eba7300940968c5f14fba2f",
  },
  {
    name: "Oh-my-posh",
    path: "omp",
    id: "406af2553eba7300940968c5f14fba2f",
  },
  {
    name: "Powershell",
    path: "pwsh",
    id: "406af2553eba7300940968c5f14fba2f",
  },
];

export default function getScripts(): ScriptType[] {
  return scripts.map((script) => {
    return { ...script, cmd: `curl -sL ${env.ORIGIN_URL}/api/${script.path} | bash` };
  });
}
