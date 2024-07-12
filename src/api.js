// src/api.js
export const fetchData = async () => {
  const responseCustomers = await fetch("http://localhost:5000/customers");
  const customers = await responseCustomers.json();

  const responseTransactions = await fetch(
    "http://localhost:5000/transactions"
  );
  const transactions = await responseTransactions.json();

  return { customers, transactions };
};
