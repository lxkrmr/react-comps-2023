import useSort from '../hooks/use-sort';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

function SortableTable({ config, data, ...rest }) {
  const { sortOrder, sortBy, setSortColumn, sortedData } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    const header = () => (
      <th
        className="cursor-pointer hover:bg-gray-100"
        onClick={() => setSortColumn(column.label)}
      >
        <div className="flex items-center">
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    );
    return { ...column, header };
  });

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

export default SortableTable;
