import PropTypes from 'prop-types';

export function Button({ children }) {
  return (
    <button
      style={{
        backgroundColor: '#fff',
        border: '1px solid #000',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        color: '#000',
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
};
