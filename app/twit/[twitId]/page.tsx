"use client";

import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./page.module.css";
import useGetTwit from "@/Hooks/useGetTwit";
import Twit from "@/Components/Home/Twit";
import CommentInput from "@/Components/Twit/CommentInput";
import { ITwit } from "@/utils/types";
import Comments from "@/Components/Twit/Comments";

export default function Detail() {
  const { twit, isLoading } = useGetTwit();

  return (
    <main id={styles.main}>
      <header id={styles.header}>
        <AiOutlineArrowLeft id={styles.header__icon} />
        <h4 id={styles.header__title}>트윗</h4>
      </header>
      <section id={styles.twit}>
        {isLoading ? (
          <h6>"로딩중..."</h6>
        ) : twit ? (
          <Twit twit={twit} />
        ) : (
          <h4>없음!</h4>
        )}
      </section>
      {twit && <CommentInput twit={twit as ITwit} />}
      {twit && <Comments commentIds={twit.comments as string[]} />}
    </main>
  );
}
