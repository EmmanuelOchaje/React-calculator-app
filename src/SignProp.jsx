import styles from "./SignProp.module.css";
function SignsProp({ prop }) {
  return (
    <div
      className={styles.signProp}
      value={prop}
      type="button"
      // onClick={(e) => setValue(value + e.target.value)}
    >
      {prop}
    </div>
  );
}

export default SignsProp;
