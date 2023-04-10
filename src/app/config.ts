import env from "@/types/env";

export interface ScriptType {
  name: string;
  path: string;
  cmd: string;
}

const scripts: ScriptType[] = [
  {
    name: "Git",
    path: "git",
    cmd: `curl -sL ${env.ORIGIN_URL}/api/git | bash`,
  },
  {
    name: "Clash",
    path: "clash",
    cmd: `curl -sL ${env.ORIGIN_URL}/api/clash | bash`,
  },
  {
    name: "Docker",
    path: "docker",
    cmd: `curl -sL ${env.ORIGIN_URL}/api/docker | bash`,
  },
  {
    name: "Vim",
    path: "vim",
    cmd: `curl -sL ${env.ORIGIN_URL}/api/docker | bash`,
  },
  {
    name: "Alias",
    path: "alias",
    cmd: `curl -sL ${env.ORIGIN_URL}/api/docker | bash`,
  },
  {
    name: "Grub",
    path: "grub",
    cmd: `curl -sL ${env.ORIGIN_URL}/api/docker | bash`,
  },
  {
    name: "Mdbook",
    path: "mdbook",
    cmd: `curl -sL ${env.ORIGIN_URL}/api/docker | bash`,
  },
  {
    name: "Oh-my-posh",
    path: "omp",
    cmd: `curl -sL ${env.ORIGIN_URL}/api/docker | bash`,
  },
  {
    name: "Powershell",
    path: "pwsh",
    cmd: `curl -sL ${env.ORIGIN_URL}/api/docker | bash`,
  },
];

export default scripts;
