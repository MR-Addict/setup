import style from "./page.module.css";
import { scripts } from "@/data/data";

import TableRow from "./components/TableRow/TableRow";

export default function Page() {
  return (
    <main className={style.wrapper}>
      <header className={style.header}>
        <h1>Setup scripts</h1>

        <div>
          <p>
            This is a collection of <strong>personal</strong> scripts that I used to set up my ubuntu machine
            environment quickly and easily.
          </p>

          <p>
            If you want to use them, you can double <strong>check</strong> the scripts by view the its content and make
            sure they are safe to use.
          </p>
        </div>
      </header>

      <div className="max-w-full overflow-x-auto">
        <table className={style.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {scripts.map((script) => (
              <TableRow key={script.id} script={script} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
