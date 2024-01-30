import PropTypes from "prop-types";

const InputSoundSelect = ({ label, options, value, onChange }) => {
  return (
    <div className="flex flex-row w-full mx-1  justify-between">
      <label htmlFor={label.replaceAll(" ", "")}>{label}</label>
      <select
        name={label.replaceAll(" ", "")}
        id={label.replaceAll(" ", "")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-select"
      >
        {options.map((el) => {
          return (
            <option value={el} key={el} className="input-option">
              {el.charAt(0) + el.toLowerCase().slice(1)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

InputSoundSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSoundSelect;
