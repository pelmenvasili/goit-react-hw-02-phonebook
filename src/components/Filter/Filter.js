import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.input}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
