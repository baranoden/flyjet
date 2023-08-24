import React from "react";
import styles from "./List.module.scss";
import Item from "./item";
import flights from "../../../libs/flights.json";
import { useAppSelector } from "store";

const List = () => {
  const flights = useAppSelector((state) => state.airports.flights);
  return (
    <div className={styles.container}>
      {flights.map((item) => (
        <Item data={item} />
      ))}
    </div>
  );
};

export default List;
