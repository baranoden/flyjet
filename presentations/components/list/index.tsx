import React from "react";
import styles from "./List.module.scss";
import Item from "./item";
import { useAppSelector } from "store";

const List = () => {
  const flights = useAppSelector((state) => state.airports.flights);
  console.log(flights);
  return (
    <div className={styles.container}>
      {flights.length >= 1 ? (
        flights.map((item) => <Item data={item} />)
      ) : (
        <p>There are no flights between those dates.</p>
      )}
    </div>
  );
};

export default List;
