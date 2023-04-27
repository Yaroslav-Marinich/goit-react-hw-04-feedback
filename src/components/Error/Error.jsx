import PropTypes from 'prop-types';

export const ErrorMsg = ({ message }) => {
  return <h2>{message}</h2>;
};

ErrorMsg.propTypes = {
  message: PropTypes.string.isRequired,
};
