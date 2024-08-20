import styles from "./SignProp.module.css";
function SignsProp({ prop, handleClick }) {
  return (
    <div
      className={styles.signProp}
      value={prop}
      type="button"
      onClick={() => handleClick(prop)}
    >
      {prop}
    </div>
  );
}

export default SignsProp;
