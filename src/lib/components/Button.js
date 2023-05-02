import PropTypes from 'prop-types';

export function Button({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  onClick,
}) {
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

  const style = {
    backgroundColor,
    color,
    border: '1px solid #000',
    padding: '0.25rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    textTransform: 'upperca se',
    cursor: 'pointer',
  };

  const isAnchor = !!href;
  const props = isAnchor
    ? { style, onClick, href, target, rel }
    : {
        style,
        onClick,
      };
  const ButtonElement = isAnchor ? 'a' : 'button';

  return <ButtonElement {...props}>{children}</ButtonElement>;
}

Button.propTypes = {
  children: PropTypes.elementType.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
};
