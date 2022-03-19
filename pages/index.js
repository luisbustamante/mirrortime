import Head from "next/head";
import Mirror from "../components/mirror";

import styles from "../styles/Home.module.css";

export default function Home() {
  const date = new Date();
  const hourPart =
    date.getMinutes() < date.getHours() ? date.getHours() - 1 : date.getHours();
  const mirrorTime = String(hourPart).padStart(2, "0");
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Hora espejo :)`}</title>
        <meta name="description" content="Consulta tu hora espejo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Mirror time={`${mirrorTime}-${mirrorTime}`} />
      </main>
    </div>
  );
}
