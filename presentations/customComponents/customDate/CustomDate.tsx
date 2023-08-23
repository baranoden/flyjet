import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CustomDate = (props: any) => {
  return (
    <DatePicker
      selected={props.selected}
      onChange={props.onChange}
      placeholderText={props.placeholder}
    />
  );
};
export default CustomDate;
