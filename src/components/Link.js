import useNavigationContext from '../hooks/use-navidation-context';

function Link({ to, children }) {
  const { navigate } = useNavigationContext();

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return; // allow link to open in new tab
    }

    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
