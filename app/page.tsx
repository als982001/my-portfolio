"use client";

import styles from "./page.module.css";
import Header from "@/Components/Home/Header";
import Write from "@/Components/Home/Write";
import Twits from "@/Components/Home/Twits";
import useGetTwits from "@/Hooks/useGetTwits";

export const dynamic = "force-dynamic"; // <= 추가한 코드

export default async function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <section id={styles.twits}>
        <Write />
        <Twits />
      </section>
    </main>
  );
}
