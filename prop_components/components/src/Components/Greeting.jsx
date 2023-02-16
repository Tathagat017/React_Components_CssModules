import React from "react";
import { useContext } from "react";
import AppContext from "../Context";
import styles from "./Greetings.module.css";
export const Greetings = () => {
  console.log(styles);
  const { greeting, setGreeting } = useContext(AppContext);
  console.log(greeting);
  function handleNewGreeting(e) {
    setGreeting(() => e.target.value);
  }
  return (
    <div>
      <h1 className={styles.App} style={{ fontStyle: "italic" }}>
        {greeting}
      </h1>
      <input
        type="text"
        onChange={(e) => {
          handleNewGreeting(e);
        }}
      ></input>
    </div>
  );
};
