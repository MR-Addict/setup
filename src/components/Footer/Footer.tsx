"use client";

import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.wrapper}>
      <span>Copyright &copy; {new Date().getFullYear()}</span>
      <span> | </span>
      <a href="https://github.com/MR-Addict/setup" target="_blank">
        MR-Addict
      </a>
    </footer>
  );
}
