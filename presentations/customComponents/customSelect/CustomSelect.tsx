import React from "react";
import Select from "react-select";

const CustomSelect = (props: any) => {
  return (
    <Select
      className={`custom-selective`}
      classNamePrefix={"selective"}
      options={props.options}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      getOptionLabel={
        props.getOptionLabel ? props.getOptionLabel : (option) => option.name
      }
      getOptionValue={
        props.getOptionValue ? props.getOptionValue : (option) => option.id
      }
    />
  );
};

export default CustomSelect;
