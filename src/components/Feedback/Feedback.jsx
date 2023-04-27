import PropTypes from 'prop-types';

export const Feedback = ({ options, onStateUpdate }) => {
  return options.map((item, idx) => {
    return (
      <button type="button" key={idx} onClick={() => onStateUpdate(item)}>
        {item}
      </button>
    );
  });
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onStateUpdate: PropTypes.func.isRequired,
};
