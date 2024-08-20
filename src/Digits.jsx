/* eslint-disable no-unused-vars */
import styles from "./Digits.module.css";

const Digits = ({ value, setValue, handleClick, addValue, Clear }) => {
  return (
    <div className={styles.digits}>
      <Row>
        <Number prop="AC" />
        <Number prop="AE" />
        <Number prop="DE" handleClick={Clear} />
      </Row>
      <Row>
        <Number
          prop="9"
          value={value}
          setValue={setValue}
          handleClick={addValue}
        />
        <Number
          handleClick={addValue}
          prop="8"
          value={value}
          setValue={setValue}
        />
        <Number
          handleClick={addValue}
          prop="7"
          value={value}
          setValue={setValue}
        />
      </Row>
      <Row>
        <Number
          prop="6"
          handleClick={addValue}
          value={value}
          setValue={setValue}
        />
        <Number
          prop="5"
          handleClick={addValue}
          value={value}
          setValue={setValue}
        />
        <Number
          prop="4"
          handleClick={addValue}
          value={value}
          setValue={setValue}
        />
      </Row>
      <Row>
        <Number
          prop="3"
          handleClick={addValue}
          // value={value}
          // setValue={setValue}
        />
        <Number
          prop="2"
          handleClick={addValue}
          value={value}
          setValue={setValue}
        />
        <Number
          prop="1"
          handleClick={addValue}
          value={value}
          setValue={setValue}
        />
      </Row>
      <Row>
        <Number
          prop="0"
          handleClick={addValue}
          value={value}
          setValue={setValue}
        />
        <Number
          prop="."
          handleClick={addValue}
          value={value}
          setValue={setValue}
        />
        <Number prop="e" value={value} setValue={setValue} />
      </Row>
    </div>
  );
};

export default Digits;

function Row({ children }) {
  return (
    <div>
      <form action="">
        <div className={styles.row}>{children}</div>
      </form>
    </div>
  );
}

function Number({ prop, handleClick }) {
  return (
    <div
      className={styles.numb}
      type="button"
      onClick={() => handleClick(prop)}
    >
      {prop}
    </div>
  );
}
