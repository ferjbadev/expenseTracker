import { categories } from '../types/expense';

interface FilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Filter = ({ selectedCategory, onCategoryChange }: FilterProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 md:p-4 mb-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs md:text-sm font-medium text-gray-700 w-full md:w-auto mb-1 md:mb-0">Filter by:</span>
        <button
          onClick={() => onCategoryChange('All')}
          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
            selectedCategory === 'All'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
