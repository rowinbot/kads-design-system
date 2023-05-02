import PropTypes from 'prop-types';

export function Button({ children, variant = 'primary' }) {
  let backgroundColor;
  let color;

  if (variant === 'primary') {
    backgroundColor = '#fff';
    color = '#000';
  }

  if (variant === 'secondary') {
    backgroundColor = '#000';
    color = '#fff';
  }

  return (
    <button
      style={{
        backgroundColor,
        color,
        border: '1px solid #000',
        padding: '0.25rem',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        textTransform: 'uppercase',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.elementType.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};
