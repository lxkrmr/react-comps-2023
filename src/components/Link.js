import classNames from 'classnames';
import useNavigation from '../hooks/use-navidation';

function Link({ to, children, className, activeClassName, ...rest }) {
  const { navigate, currentPath } = useNavigation();

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return; // allow link to open in new tab
    }

    event.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    className,
    'text-blue-500',
    currentPath === to && activeClassName
  );

  return (
    <a className={classes} href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export default Link;
