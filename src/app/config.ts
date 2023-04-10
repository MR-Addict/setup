export interface ScriptType {
  name: string;
  path: string;
  cmd: string;
}

const scripts: ScriptType[] = [
  {
    name: "Git",
    path: "git",
    cmd: "curl -sL ${origion}/api/git | bash",
  },
  {
    name: "Clash",
    path: "clash",
    cmd: "curl -sL ${origion}/api/clash | bash",
  },
  {
    name: "Docker",
    path: "docker",
    cmd: "curl -sL ${origion}/api/docker | bash",
  },
  {
    name: "Vim",
    path: "vim",
    cmd: "curl -sL ${origion}/api/docker | bash",
  },
  {
    name: "Alias",
    path: "alias",
    cmd: "curl -sL ${origion}/api/docker | bash",
  },
  {
    name: "Grub",
    path: "grub",
    cmd: "curl -sL ${origion}/api/docker | bash",
  },
  {
    name: "Mdbook",
    path: "mdbook",
    cmd: "curl -sL ${origion}/api/docker | bash",
  },
  {
    name: "Oh-my-posh",
    path: "omp",
    cmd: "curl -sL ${origion}/api/docker | bash",
  },
  {
    name: "Powershell",
    path: "pwsh",
    cmd: "curl -sL ${origion}/api/docker | bash",
  },
];

export default scripts;
