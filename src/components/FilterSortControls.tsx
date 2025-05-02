import React from 'react';

interface Props {
  filter: string;
  sortOrder: string;
  onFilterChange: (filter: string) => void;
  onSortChange: (sortOrder: string) => void;
}

const FilterSortControls: React.FC<Props> = ({ filter, sortOrder, onFilterChange, onSortChange }) => {
  return (
    <div className="controls">
      <label>
        Filter by Severity:
        <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>

      <label>
        Sort by Date:
        <select value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </label>
    </div>
  );
};

export default FilterSortControls;
