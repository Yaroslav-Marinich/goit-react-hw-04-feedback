import PropTypes from 'prop-types';

export const Statistics = ({ options, statistic, total, positiveFeedback }) => {
  return (
    <div>
      {options.map((option, idx) => {
        return (
          <p key={idx}>
            {option}: {statistic[option]}
          </p>
        );
      })}
      <p>total: {total}</p>
      <p>positive feedback: {positiveFeedback()}%</p>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.func.isRequired,
};
