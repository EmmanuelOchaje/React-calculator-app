import Body from "./Body";
import Display from "./Display";
import styles from "./Calculator.module.css";
import Digits from "./Digits";
import Signs from "./signs";
import SignsProp from "./SignProp";
import { useState } from "react";
import * as math from "mathjs";

export default function Calculator() {
  const [value, setValue] = useState("");
  /* function Delete() {
    return setValue("");
  } */

  function addValue(val) {
    return setValue((value) => [...value, val + " "]);
  }

  function handleClick(val) {
    return val;
  }
  function Clear() {
    return setValue("");
  }

  function EvaluateResults() {
    const input = value.join("");
    setValue(math.evaluate(input));
  }
  return (
    <div className={styles.calc}>
      <Display value={value} setValue={setValue} />
      <Body>
        <Digits
          value={value}
          setValue={setValue}
          addValue={addValue}
          handleClick={handleClick}
          Clear={Clear}
        />
        <Signs value={value} setValue={setValue} handleClick={handleClick}>
          <SignsProp
            prop="*"
            value={value}
            setValue={setValue}
            handleClick={addValue}
          />
          <SignsProp
            prop="/"
            value={value}
            setValue={setValue}
            handleClick={addValue}
          />
          <SignsProp
            prop="-"
            value={value}
            setValue={setValue}
            handleClick={addValue}
          />
          <SignsProp
            prop="="
            value={value}
            setValue={setValue}
            handleClick={EvaluateResults}
          />
          <SignsProp
            prop="+"
            value={value}
            setValue={setValue}
            handleClick={addValue}
          />
        </Signs>
      </Body>
    </div>
  );
}
