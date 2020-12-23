import { Input } from "antd";
import React from "react";

export default function Password(props) {
  return (
    <Input.Password
      placeholder={props.placeholder}
      size="large"
      style={{ width: 300, margin: 5 }}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
     />
  );
}
