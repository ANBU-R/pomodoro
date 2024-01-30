import PropTypes from "prop-types";

const InputSoundSelect = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label.replaceAll(" ", "")}>{label}</label>
      <select
        name={label.replaceAll(" ", "")}
        id={label.replaceAll(" ", "")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((el) => {
          return (
            <option value={el} key={el}>
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
