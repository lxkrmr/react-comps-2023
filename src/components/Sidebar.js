import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Drop-Down', path: '/dropdown' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Button', path: '/button' },
  ];

  const renderedLinks = links.map((link) => (
    <Link
      to={link.path}
      key={link.label}
      className="mb-3"
      activeClassName="font-bold border-l-4 border-blue-500 pl-2"
    >
      {link.label}
    </Link>
  ));

  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
