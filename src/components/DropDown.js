import { GoChevronDown } from 'react-icons/go';
import { useState, useEffect, useRef } from 'react';
import Panel from './Panel';

function DropDown({ options, value, onChange }) {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((current) => !current);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  useEffect(() => {
    const handler = (event) => {
      if (ref?.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);

    const cleanUp = () => document.removeEventListener('click', handler);
    return cleanUp;
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleIsOpen}
      >
        {value?.label ?? 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="abslute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default DropDown;
