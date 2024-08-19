import styles from "./Digits.module.css";

const Digits = ({ value, setValue, handleClick }) => {
  return (
    <div className={styles.digits}>
      <Row>
        <Number prop="AC" />
        <Number prop="AE" />
        <Number prop="DE" />
      </Row>
      <Row>
        <Number
          prop="9"
          value={value}
          setValue={setValue}
          addValue={handleClick}
        />
        <Number prop="8" value={value} setValue={setValue} />
        <Number prop="7" value={value} setValue={setValue} />
      </Row>
      <Row>
        <Number prop="6" value={value} setValue={setValue} />
        <Number prop="5" value={value} setValue={setValue} />
        <Number prop="4" value={value} setValue={setValue} />
      </Row>
      <Row>
        <Number prop="3" value={value} setValue={setValue} />
        <Number prop="2" value={value} setValue={setValue} />
        <Number prop="1" value={value} setValue={setValue} />
      </Row>
      <Row>
        <Number prop="0" value={value} setValue={setValue} />
        <Number prop="." value={value} setValue={setValue} />
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
    <div className={styles.numb} type="button" onClick={handleClick(prop)}>
      {prop}
    </div>
  );
}
