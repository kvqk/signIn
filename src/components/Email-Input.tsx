import React from "react";

interface IEmail {
  name: string;
  ref?: any;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EmailInput: React.FC<IEmail> = (props) => {
  return (
    <input
      placeholder="Email"
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
export default EmailInput;
