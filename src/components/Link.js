import classNames from 'classnames';
import useNavigationContext from '../hooks/use-navidation-context';

function Link({ to, children, className, ...rest }) {
  const { navigate } = useNavigationContext();

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return; // allow link to open in new tab
    }

    event.preventDefault();
    navigate(to);
  };

  const classes = classNames(className, 'text-blue-500');

  return (
    <a className={classes} href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export default Link;
