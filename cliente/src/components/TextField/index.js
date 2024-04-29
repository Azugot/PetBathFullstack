import "./TextField.css";

const TextField = (props) => {
  const TextPlaceHolder = `${props.placeholder}`;

  //let textValue = '0';

  const textChange = (event) => {
    props.onValueChange(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        type={props.onlyNumbers ? "number" : "text"}
        value={props.value}
        onChange={textChange}
        required={props.required}
        placeholder={TextPlaceHolder}
        min={props.min}
      />
    </div>
  );
};

export default TextField;
