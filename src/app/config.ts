export interface ScriptType {
  name: string;
  path: string;
  cmd: string;
}

const scripts = [
  { name: "Alias", path: "alias" },
  { name: "Clash", path: "clash" },
  { name: "Docker", path: "docker" },
  { name: "Git", path: "git" },
  { name: "Grub", path: "grub" },
  { name: "Mdbook", path: "mdbook" },
  { name: "Oh-my-posh", path: "omp" },
  { name: "Powershell", path: "pwsh" },
  { name: "Vim", path: "vim" }
];

export default function getScripts(): ScriptType[] {
  return scripts
    .map((script) => {
      return { ...script, cmd: `curl -sL ${process.env.ORIGIN_URL}/api/${script.path} | bash` };
    })
    .sort((a, b) => a.path.localeCompare(b.path));
}
