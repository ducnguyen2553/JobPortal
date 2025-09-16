import { useState, useEffect } from 'react'

const SalaryRangeSlider = ({ filters, handleFilterChange }) => {
  const [minSalary, setMinSalary] = useState(filters?.minSalary || 0);
  const [maxSalary, setMaxSalary] = useState(filters?.maxSalary || 0);

  useEffect(() => {
    setMinSalary(filters?.minSalary || 0);
    setMaxSalary(filters?.maxSalary || 0);
  }, [filters]);


  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Min Salary
          </label>
          <input
            type="number"
            placeholder='0'
            min="0"
            step="1000"
            className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-200 focus:ring-blue-200 focus:ring-opacity-50"
            value={minSalary || ""}
            onChange={({ target }) => setMinSalary(target.value)}
            onBlur={() => handleFilterChange("minSalary", minSalary ? parseInt(minSalary) : "")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Salary
          </label>
          <input
            type="number"
            placeholder='0'
            min="0"
            step="1000"
            className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-200 focus:ring-blue-200 focus:ring-opacity-50"
            value={maxSalary || ""}
            onChange={({ target }) => setMaxSalary(target.value)}
            onBlur={() => handleFilterChange("maxSalary", maxSalary ? parseInt(maxSalary) : "")}
          />
        </div>
      </div>

      {/* Display current range */}
      {(minSalary || maxSalary) ? (
        <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded">
          Range: {minSalary ? `$${minSalary.toLocaleString()}` : "$0"}- {" "}
          {maxSalary ? `$${maxSalary.toLocaleString()}` : "No limit"}
        </div>
      ) : null}
    </div>
  )
}

export default SalaryRangeSlider