import "./CustomDatePicker.css";
import DatePicker from "react-datepicker";

const CustomDatePicker = (props) => {
  return (
    <div className="date-picker">
      <label>{props.label}</label>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={props.selected}
        onChange={props.onChange}
      />
    </div>
  );
};

export default CustomDatePicker;
