import { GoChevronDown } from 'react-icons/go';
import { useState } from 'react';

function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((current) => !current);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

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
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={toggleIsOpen}
      >
        {value?.label ?? 'Select...'}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && (
        <div className="abslute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default DropDown;
