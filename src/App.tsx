import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import Filter from './components/Filter';
import type { Expense } from './types/expense';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expenseData: { description: string; amount: number; category: string; date: string }) => {
    const newExpense: Expense = {
      id: crypto.randomUUID(),
      ...expenseData,
    };
    setExpenses([newExpense, ...expenses]);
  };

  const handleDeleteExpense = (id: string) => {
    if (confirm('Are you sure you want to delete this expense?')) {
      setExpenses(expenses.filter((expense) => expense.id !== id));
    }
  };

  const filteredExpenses = selectedCategory === 'All'
    ? expenses
    : expenses.filter((expense) => expense.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">💰 Expense Tracker</h1>
          <p className="text-gray-600">Track your expenses and manage your budget efficiently</p>
        </header>

        <Summary expenses={expenses} />
        <ExpenseForm onAddExpense={handleAddExpense} />
        <Filter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <ExpenseList expenses={filteredExpenses} onDeleteExpense={handleDeleteExpense} />
      </div>
    </div>
  );
}

export default App;
