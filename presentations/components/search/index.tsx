import React, { useState } from "react";
import styles from "./Search.module.scss";
import CustomSelect from "../../customComponents/customSelect/CustomSelect";
import { IAirportsSlice } from "store/models/common";
import { AiOutlineSwap } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import CustomDate from "presentations/customComponents/customDate/CustomDate";
import Button from "react-bootstrap/Button";
import Check from "react-bootstrap/FormCheck";

type IProps = {
  options: IAirportsSlice;
};
const Search = (props: IProps) => {
  const [count, setCount] = useState<number>(0);
  const [oneWay, setOneWay] = useState<boolean>(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className={styles.container}>
      <div className={styles.formInputs}>
        <CustomSelect placeholder={"From..."} options={props.options} />
        <CustomSelect placeholder={"To..."} options={props.options} />
        <CustomDate
          selected={startDate}
          placeholder={"Departure..."}
          onChange={(e) => setStartDate(e)}
        />
        {oneWay ? (
          <CustomDate
            selected={endDate}
            onChange={(e) => setEndDate(e)}
            placeholder={"Return..."}
          />
        ) : null}
      </div>
      <div className={styles.guests}>
        <label>Passengers</label>
        <div className={styles.counter}>
          <Button
            className={styles.incrementers}
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
          <span>{count}</span>
          <Button
            className={styles.incrementers}
            onClick={() => {
              count !== 0 ? setCount(count - 1) : null;
            }}
          >
            -
          </Button>
        </div>
        <label>One way</label>
        <div className={styles.return}>
          <input
            type="checkbox"
            id="checkbox"
            checked={oneWay}
            className={styles.checkbox}
            onClick={() => setOneWay(!oneWay)}
          />
        </div>
        <Button className={styles.searchBtn}>Search</Button>
      </div>
    </div>
  );
};

export default Search;
