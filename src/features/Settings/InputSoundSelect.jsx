import PropTypes from "prop-types";

const InputSoundSelect = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label htmlFor="ticking">{label}</label>
      <select
        name="ticking"
        id="ticking"
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
