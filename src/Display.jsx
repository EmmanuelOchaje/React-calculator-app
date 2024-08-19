import styles from "./Display.module.css";

const Display = ({ value }) => {
  return <div className={styles.screen}>{value}</div>;
};

export default Display;
