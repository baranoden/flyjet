import React from "react";
import Select from "react-select";

const CustomSelect = (props: any) => {
  return (
    <Select
      className={`custom-selective`}
      classNamePrefix={"selective"}
      options={props.options}
      placeholder={props.placeholder}
    />
  );
};

export default CustomSelect;
