import React, { useState } from "react";
import styles from "./Search.module.scss";
import CustomSelect from "../../customComponents/customSelect/CustomSelect";
import { IAirportsSlice } from "store/models/common";
import { AiOutlineSwap } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import CustomDate from "presentations/customComponents/customDate/CustomDate";
import Button from "react-bootstrap/Button";

type IProps = {
  options: IAirportsSlice;
};
const Search = (props: IProps) => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  return (
    <div className={styles.container}>
      <div className={styles.formInputs}>
        <CustomSelect placeholder={"From..."} options={props.options} />
        <CustomSelect placeholder={"To..."} options={props.options} />
        <CustomDate selected={date} placeholder={"Departure..."} />
        <CustomDate
          selected={date}
          onChange={(e) => setDate(e)}
          placeholder={"Return..."}
        />
      </div>
      <div className={styles.guests}>
        <label>How many tickets?</label>
        <div className={styles.counter}>
          <Button className={styles.incrementers}>+</Button>
          <span>{count}</span>
          <Button className={styles.incrementers}>-</Button>
        </div>
        <Button className={styles.searchBtn}>Search</Button>
      </div>
    </div>
  );
};

export default Search;
