import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "src/scripts");

export default function readScript(id: string) {
  const filePath = path.join(postsDir, `${id}.sh`);
  const fileContent = fs.readFileSync(filePath, "utf8").replace("$ORIGIN_URL", process.env.ORIGIN_URL || "");

  return fileContent;
}
