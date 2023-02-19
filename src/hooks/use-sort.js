import { useState } from 'react';

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
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

  const sortedData = sortData(
    data,
    findSortValue(config, sortBy),
    sortOrderAsInt(sortOrder)
  );

  return { sortOrder, sortBy, setSortColumn, sortedData };
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

export default useSort;
