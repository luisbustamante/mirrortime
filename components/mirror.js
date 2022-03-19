import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";

const Mirror = ({ time }) => {
  const [mirror, setMirror] = useState({
    timePart: time,
    paragraphs: [""],
  });
  useEffect(() => {
    const fetchMirror = async () => {
      try {
        const response = await fetch(`/api/mirror/${mirror.timePart}`);
        const json = await response.json();
        console.log(json.paragraphs);
        setMirror({
          timePart: json.time,
          paragraphs: json.paragraphs,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchMirror();
  }, []);
  const paragraphs = mirror.paragraphs.map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>;
  });
  return (
    <div className={styles.card}>
      <h1>{mirror.timePart}</h1>
      {paragraphs}
    </div>
  );
};
export default Mirror;
