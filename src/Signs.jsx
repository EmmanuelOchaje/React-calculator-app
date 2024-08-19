import styles from "./SignProp.module.css";
const Signs = ({ children }) => {
  return <div className={styles.sign}>{children}</div>;
};

export default Signs;
