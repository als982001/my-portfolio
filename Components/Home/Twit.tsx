import styles from "./Twit.module.css";
import TwitImages from "./TwitImages";

interface IProps {
  twit: {
    author: string;
    createdDate: string;
    email: string;
    imageUrl: string;
    twit: string;
    id: string;
  };
}

export default function Twit({ twit }: IProps) {
  return (
    <section id={styles.twit}>
      <section id={styles.twit__main}>
        <img
          id={styles.twit__user__icon}
          src="https://pbs.twimg.com/media/F01zutAWwAITpl4?format=jpg&name=large"
          alt="icon"
        />
        <section id={styles.twit__contents}>
          <section id={styles.twit__info}>
            <h4 id={styles.twit__author}>{twit.author}</h4>
            <h5>{twit.createdDate}</h5>
          </section>
          <h5 id={styles.twit__content}>{twit.twit}</h5>
        </section>
      </section>
      <TwitImages imageUrl={twit.imageUrl} />
    </section>
  );
}