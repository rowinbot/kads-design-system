import PropTypes from 'prop-types';

export function Title({ children, order = 1 }) {
  const H = `h${order}`;

  return (
    <H
      style={{
        textTransform: 'uppercase',
      }}
    >
      {children}
    </H>
  );
}

Title.propTypes = {
  children: PropTypes.elementType.isRequired,
  order: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
