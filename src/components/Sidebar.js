import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Drop-Down', path: '/dropdown' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Button', path: '/button' },
  ];

  const renderedLinks = links.map((link) => (
    <Link to={link.path} key={link.label}>
      {link.label}
    </Link>
  ));

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
