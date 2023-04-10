export interface ScriptType {
  name: string;
  path: string;
  cmd: string;
}

const origin = "https://" + (process.env.VERCEL_URL || "example.com");

const scripts: ScriptType[] = [
  {
    name: "Git",
    path: "git",
    cmd: `curl -sL ${origin}/api/git | bash`,
  },
  {
    name: "Clash",
    path: "clash",
    cmd: `curl -sL ${origin}/api/clash | bash`,
  },
  {
    name: "Docker",
    path: "docker",
    cmd: `curl -sL ${origin}/api/docker | bash`,
  },
  {
    name: "Vim",
    path: "vim",
    cmd: `curl -sL ${origin}/api/docker | bash`,
  },
  {
    name: "Alias",
    path: "alias",
    cmd: `curl -sL ${origin}/api/docker | bash`,
  },
  {
    name: "Grub",
    path: "grub",
    cmd: `curl -sL ${origin}/api/docker | bash`,
  },
  {
    name: "Mdbook",
    path: "mdbook",
    cmd: `curl -sL ${origin}/api/docker | bash`,
  },
  {
    name: "Oh-my-posh",
    path: "omp",
    cmd: `curl -sL ${origin}/api/docker | bash`,
  },
  {
    name: "Powershell",
    path: "pwsh",
    cmd: `curl -sL ${origin}/api/docker | bash`,
  },
];

export default scripts;
