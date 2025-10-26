export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

export type Category = 'Food' | 'Transport' | 'Entertainment' | 'Shopping' | 'Bills' | 'Health' | 'Other';

export const categories: Category[] = ['Food', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Health', 'Other'];
