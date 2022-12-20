import React from "react";

interface Ipassword {
  name?: string;
  ref?: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<Ipassword> = (props, name) => {
  return (
    <input
      placeholder="Password"
      type="password"
      name={props.name}
      style={{
        borderRadius: "5px",
        border: "2px solid black",
        marginBottom: "15px",
        paddingLeft: "13px",
        height: "30px",
        width: "300px",
        borderLeftStyle: "hidden",
        borderRightStyle: "hidden",
        borderTopStyle: "hidden",
      }}
      onChange={props.handleChange}
    />
  );
};
export default PasswordInput;
