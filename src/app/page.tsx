import Link from "next/link";
import { PiShare } from "react-icons/pi";
import { LiaFileAlt } from "react-icons/lia";

import style from "./page.module.css";
import { scripts } from "@/data/data";

import CopyButton from "@/components/CopyButton/CopyButton";

export default function Page() {
  return (
    <main className={style.wrapper}>
      <header className={style.header}>
        <h1>Setup scripts</h1>

        <p>
          This is a collection of <strong>personal</strong> scripts that I used to set up my ubuntu machine environment
          quickly and easily. If you want to use them, you can <strong>double</strong> check the scripts by view the its
          content and make sure they are safe to use.
        </p>
      </header>

      <div className="max-w-full overflow-x-auto">
        <table className={style.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {scripts.map((script) => (
              <tr key={script.name}>
                <td>{script.name}</td>
                <td>{script.description}</td>
                <td className="min-w-24 h-full">
                  <Link href={`/script/${script.id}`} className={style.link} />
                  <div className={style.actions}>
                    <CopyButton text={script.urlCmd} title="Copy install command" />
                    <a href={`/api/script/${script.id}`} title="Download script" download={`${script.id}.sh`}>
                      <LiaFileAlt />
                    </a>
                    <a href={`/api/script/${script.id}`} title="View script" target="_blank">
                      <PiShare />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
