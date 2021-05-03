import React from "react";
import { Dropdown } from "primereact/dropdown";

function PrimeReactSelect(props) {
const {name,label,dropdownValues,handleChange,value,onBlur,touched,error} = props;
  return (
    <div>
      <Dropdown
        name={name}
        value={value}
        options={dropdownValues}
        onChange={handleChange}
        optionLabel={label}
        placeholder={label}
      />
    </div>
  );
}

export default PrimeReactSelect;
