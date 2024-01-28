import PropTypes from "prop-types";

const Input = ({ name, label, value, setValue }) => {
  return (
    <div className="flex flex-col w-20 mx-1 ">
      <label htmlFor={name} className="text-center">
        {label}
      </label>
      <input
        type="number"
        id="pomodoro"
        value={value}
        className="text-center border-2"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
export default Input;
