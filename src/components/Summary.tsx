import type { Expense } from '../types/expense';

interface SummaryProps {
  expenses: Expense[];
}

const Summary = ({ expenses }: SummaryProps) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  const sortedCategories = Object.entries(categoryTotals)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white">
        <h3 className="text-sm font-medium opacity-90 mb-2">Total Expenses</h3>
        <p className="text-3xl font-bold">${total.toFixed(2)}</p>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white">
        <h3 className="text-sm font-medium opacity-90 mb-2">Total Transactions</h3>
        <p className="text-3xl font-bold">{expenses.length}</p>
      </div>

      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
        <h3 className="text-sm font-medium opacity-90 mb-2">Average Expense</h3>
        <p className="text-3xl font-bold">
          ${expenses.length > 0 ? (total / expenses.length).toFixed(2) : '0.00'}
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-md p-6 text-white">
        <h3 className="text-sm font-medium opacity-90 mb-2">Top Category</h3>
        <p className="text-2xl font-bold">
          {sortedCategories.length > 0 ? sortedCategories[0][0] : 'N/A'}
        </p>
        {sortedCategories.length > 0 && (
          <p className="text-sm opacity-90 mt-1">
            ${sortedCategories[0][1].toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default Summary;
