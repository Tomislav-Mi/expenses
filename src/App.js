import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Shoes',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },

    {
        id: 'e2',
        title: 'Laptop',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },

    {
        id: 'e3',
        title: 'Bike',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },

    {
        id: 'e4',
        title: 'Desk',
        amount: 450,
        date: new Date(2021, 5, 12),
    },

    {
        id: 'e4',
        title: 'Monitor',
        amount: 250,
        date: new Date(2022, 5, 12),
    },

    {
        id: 'e4',
        title: 'Monitor 2',
        amount: 50,
        date: new Date(2022, 6, 12),
    },

    {
        id: 'e4',
        title: 'Monitor 3',
        amount: 150,
        date: new Date(2022, 4, 12),
    },

    {
        id: 'e4',
        title: 'Monitor 4',
        amount: 20,
        date: new Date(2022, 3, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };


    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
};

export default App;
