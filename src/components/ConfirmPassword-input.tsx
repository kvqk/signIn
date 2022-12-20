

interface IConfirmPassword {
  name: string,
  ref: any,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const ConfirmPassWordInput:  React.FC<IConfirmPassword> = (props) => {
  return (
    <input
      placeholder="Confirm Password"
      name={props.name}
      type="password"
      style={{
        borderRadius: "5px",
        border: "2px solid black",
        paddingLeft: "13px",
        height: "30px",
        width: "300px",
        borderLeftStyle: "hidden",
        borderRightStyle: "hidden" ,
        borderTopStyle: "hidden"
      }}
      onChange={props.handleChange}
    />
  );
};
export default ConfirmPassWordInput;
