# 💰 Expense Tracker

A modern, responsive expense tracking application built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ✨ **Add Expenses**: Track your expenses with description, amount, category, and date
- 📊 **Visual Summary**: View total expenses, transaction count, average expense, and top spending category
- 🏷️ **Categories**: Organize expenses into categories (Food, Transport, Entertainment, Shopping, Bills, Health, Other)
- 🔍 **Filter**: Filter expenses by category
- 💾 **Local Storage**: All data is persisted in browser's local storage
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 🗑️ **Delete Expenses**: Remove expenses with confirmation

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v22 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ExpenseForm.tsx    # Form to add new expenses
│   ├── ExpenseList.tsx    # Table displaying all expenses
│   ├── Summary.tsx        # Dashboard with statistics
│   └── Filter.tsx         # Category filter buttons
├── types/
│   └── expense.ts         # TypeScript interfaces and types
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
└── index.css             # Tailwind CSS imports
```

## Usage

1. **Add an Expense**: Fill in the form with description, amount, category, and date, then click "Add Expense"
2. **View Summary**: Check the dashboard cards for quick insights
3. **Filter Expenses**: Click on category buttons to filter the expense list
4. **Delete an Expense**: Click the "Delete" button on any expense row

## License

MIT

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
