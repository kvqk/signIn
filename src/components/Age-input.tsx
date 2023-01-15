import React from "react";

interface IAge {
  name?: string;
  ref?: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AgeInput: React.FC<IAge> = (props) => {
  return (
    <input
      placeholder="Age"
      type="number"
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
