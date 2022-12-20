interface IName {
  name: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  ref: any

}

const NameInput: React.FC<IName> = (props ) => {
  return (
    <input
      placeholder="Name"
      name={props.name}
      style={{
        border: "2px solid black",
        marginBottom: "15px",
        paddingLeft: "13px",
        marginTop: "49px",
        borderRadius: "5px",
        height: "30px",
        width: "300px",
        borderBottom: "2px solid black",
        borderLeftStyle: "hidden",
        borderRightStyle: "hidden",
        borderTopStyle: "hidden",
      }}
      onChange={props.handleChange}
    />
  );
};
export default NameInput;
