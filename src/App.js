import React, { useState, useEffect, useRef } from 'react';
import { fetchData  } from './api';
import 'tailwindcss/tailwind.css';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

function App() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [transactionsId, setTransactionsId] = useState([]);
  const [transactionsAmount, setTransactionsAmount] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const data = await
       fetchData();
      setCustomers(data.customers);
      setTransactions(data.transactions);
      setTransactionsAmount(data.transactions);
      setTransactionsId(data.transactions);
      setFilteredTransactions(data.transactions);
    };
    getData();
  }, []);
  const handleFilterCustomerID = (customerId) => {
    let filtered = transactionsAmount;
      filtered = filtered.filter(transaction => transaction.customer_id === parseInt(customerId));
    setFilteredTransactions(filtered);
    setTransactionsId(transactions.filter(transaction => transaction.customer_id === parseInt(customerId)));
  };
  const handleFilterAmount = (amount) => {
    let filtered = transactionsId;
      filtered = filtered.filter(transaction => transaction.amount >= parseInt(amount));
    setFilteredTransactions(filtered);
    setTransactionsAmount(transactions.filter(transaction => transaction.amount >= parseInt(amount)))
  };

  const handleSelectCustomer = (customerId) => {
    setSelectedCustomer(customers.find(customer => customer.id == parseInt(customerId)));
  };

  const chartData = () => {
    if (!selectedCustomer) return {};

    const customerTransactions = transactions.filter(transaction => transaction.customer_id == selectedCustomer.id);
    const dates = [...new Set(customerTransactions.map(transaction => transaction.date))];
    const amounts = dates.map(date => {
      return customerTransactions.filter(transaction => transaction.date == date).reduce((sum, transaction) => sum + transaction.amount, 0);
    });

    return {
      labels: dates,
      datasets: [{
        label: `Total amount per day for ${selectedCustomer.name}`,
        data: amounts,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
  };

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (selectedCustomer && chartContainerRef.current) {
      chartInstanceRef.current = new Chart(chartContainerRef.current, {
        type: 'line',
        data: chartData(),
        options: {
          responsive: true,
        },
      });
    }
  }, [selectedCustomer]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Customer Transactions</h1>
      <div className="mb-4 p-4 bg-white shadow rounded-lg flex">
        <div className='w-1/2 p-4'>
        <label className="block mb-2 text-lg">Filter by customer:</label>
        <select 
          className="block w-full p-2 border border-gray-300 rounded mb-4" 
          onChange={(e) => handleFilterCustomerID(e.target.value)}
        >
          <option value="">All</option>
          {customers.map(customer => (
            <option key={customer.id} value={customer.id}>{customer.name}</option>
          ))}
        </select></div>
        <div className='w-1/2 p-4'>
        <label className="block mb-2 text-lg">Filter by amount:</label>
        <input 
          type="number" 
          className="block w-full p-2 border border-gray-300 rounded mb-4" 
          onChange={(e) => handleFilterAmount( e.target.value)} 
        /></div>
      </div>
      <table className="min-w-full bg-white border border-gray-300 shadow rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4 border-b">Customer</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{customers.find(customer => customer.id == transaction.customer_id)?.name}</td>
              <td className="py-2 px-4 border-b">{transaction.date}</td>
              <td className="py-2 px-4 border-b">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 p-4 bg-white shadow rounded-lg">
        <label className="block mb-2 text-lg">Select customer for chart:</label>
        <select 
          className="block w-full p-2 border border-gray-300 rounded" 
          onChange={(e) => handleSelectCustomer(e.target.value)}
        >
          <option value="">None</option>
          {customers.map(customer => (
            <option key={customer.id} value={customer.id}>{customer.name}</option>
          ))}
        </select>
      </div>
      {selectedCustomer && <div className="mt-4 p-4 bg-white shadow rounded-lg">
        <canvas ref={chartContainerRef}></canvas>
      </div>}
    </div>
  );
}

export default App;
