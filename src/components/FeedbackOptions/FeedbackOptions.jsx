import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

// {
//   /* <FeedbackOptions options={ } onLeaveFeedback={ }></FeedbackOptions> */
// }

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.container}>
    {options.map(option => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={() => onLeaveFeedback(option)}
        className={css.button}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};

// export default FeedbackOptions;
