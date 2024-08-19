import Body from "./Body";
import Display from "./Display";
import styles from "./Calculator.module.css";
import Digits from "./Digits";
import Signs from "./signs";
import SignsProp from "./SignProp";
import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");
  /* function Delete() {
    return setValue("");
  } */

  function addValue(val) {
    return setValue((value) => [...value, val + " "]);
  }

  return (
    <div className={styles.calc}>
      <Display value={value} setValue={setValue} />
      <Body>
        <Digits value={value} setValue={setValue} addValue={addValue} />
        <Signs value={value} setValue={setValue}>
          <SignsProp prop={"*"} value={value} setValue={setValue} />
          <SignsProp prop={"/"} value={value} setValue={setValue} />
          <SignsProp prop={"-"} value={value} setValue={setValue} />
          <SignsProp prop={"="} value={value} setValue={setValue} />
          <SignsProp prop={"+"} value={value} setValue={setValue} />
        </Signs>
      </Body>
    </div>
  );
}
