import React from "react";

interface IDob {
  name: string;
  ref: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DOBInput: React.FC<IDob> = (props) => {
  return (
    <input
      placeholder="Date Of Birth"
      name={props.name}
      type="date"
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
