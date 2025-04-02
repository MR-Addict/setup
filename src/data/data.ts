import path from "path";
import { env } from "@/data/env";
import { readFileSync } from "fs";

interface ScriptShellContentType {
  /**
   * The url to download the script from.
   * This is the url to the api that will return the script content.
   * The url is in the format of `https://<host>/api/<script_id>`.
   */
  url: string;

  /**
   * The command to run the script.
   * This is the command that will be run in the terminal to download and run the script.
   * The command is in the format of `curl -sL <url> | bash`.
   */
  urlCmd: string;

  /**
   * The shell content of the script.
   * This is the content of the script that will be displayed in the terminal.
   */
  shell: string;
}

interface ScriptPropertyType {
  /**
   * The id of the script.
   * This is the id of the script that will be used in the url.
   */
  id: string;

  /**
   * The name of the script.
   * This is the name of the script that will be displayed in the table.
   */
  name: string;

  /**
   * The description of the script.
   * This is the description of the script that will be displayed in the table.
   */
  description: string;
}

export type ScriptType = ScriptPropertyType & ScriptShellContentType;

function getScript(id: string) {
  const filePath = path.join(process.cwd(), "src/data/scripts", id + ".sh");
  return readFileSync(filePath, "utf-8").trim();
}

export const scripts: ScriptType[] = (() => {
  const data: ScriptPropertyType[] = [
    { id: "alias", name: "Alias", description: "Personal terminal aliases for linux." },
    { id: "clash", name: "Clash", description: "Proxy server, clash core." },
    { id: "docker", name: "Docker", description: "Docker and docker-compose." },
    { id: "git", name: "Git", description: "Personal git configuration." },
    { id: "grub", name: "Grub", description: "Grub configuration." },
    { id: "mdbook", name: "Mdbook", description: "Markdown static documentation generation tool." },
    { id: "omp", name: "Oh my posh", description: "Prompt theme engine." },
    { id: "pwsh", name: "Powershell", description: "PowerShell 7 for linux." },
    { id: "vim", name: "Vim", description: "Personal vim configuration." }
  ];

  return data.map((script) => {
    const url = `${env.HOST}/api/script/${script.id}`;
    const urlCmd = `curl -sL ${url} | bash`;
    const shell = getScript(script.id).replace("$HOST", env.HOST);
    return { ...script, url, urlCmd, shell };
  });
})();
