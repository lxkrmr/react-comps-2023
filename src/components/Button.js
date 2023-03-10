import classnames from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...rest
}) {
  const classes = classnames(
    className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-600 bg-blue-500': primary,
      'border-gray-900 bg-gray-800': secondary,
      'border-green-600 bg-green-500': success,
      'border-yellow-500 bg-yellow-400': warning,
      'border-red-600 bg-red-500': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-600': outline && success,
      'text-yellow-500': outline && warning,
      'text-red-600': outline && danger,
      // TODO find a better way
      'text-white': !outline,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
