import { redirect } from "next/navigation";

import getScripts from "../config";

export default function Page() {
  const redirectUrl = "/script/" + getScripts()[0].path;
  redirect(redirectUrl);
}
