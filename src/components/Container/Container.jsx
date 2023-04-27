import PropTypes from 'prop-types';

export const Container = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
};
