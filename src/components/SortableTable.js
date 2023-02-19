import { useState } from 'react';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

function SortableTable({ config, data, ...rest }) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (label !== sortBy) {
      setSortBy(label);
      setSortOrder('asc');
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    const header = () => (
      <th
        className="cursor-pointer hover:bg-gray-100"
        onClick={() => handleClick(column.label)}
      >
        <div className="flex items-center">
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    );
    return { ...column, header };
  });

  const sortedData = sortData(
    data,
    findSortValue(updatedConfig, sortBy),
    sortOrderAsInt(sortOrder)
  );

  return <Table config={updatedConfig} data={sortedData} {...rest} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy || sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  }
  return (
    <div>
      <GoArrowSmallDown />
    </div>
  );
}

function findSortValue(config, sortBy) {
  const { sortValue } = config.find((column) => column.label === sortBy) ?? {};
  return sortValue;
}

function sortOrderAsInt(sortOrder) {
  return sortOrder === 'asc' ? 1 : -1;
}

function sortData(data, sortValue, sortOrderAsInt) {
  if (!sortValue || !sortOrderAsInt) {
    return data;
  }

  const copy = [...data];
  copy.sort((a, b) => {
    const valueA = sortValue(a);
    const valueB = sortValue(b);

    if (typeof valueA === 'string') {
      return valueA.localeCompare(valueB) * sortOrderAsInt;
    }
    return (valueA - valueB) * sortOrderAsInt;
  });
  return copy;
}

export default SortableTable;
