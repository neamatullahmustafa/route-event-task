// src/api.js
export const fetchData = async () => {
    try {
      const response = await fetch("https://neamatullahmustafa.github.io/route-event-task-db/db.json");
      const data = await response.json();
      const customers = data.customers;
      const transactions = data.transactions;
      return { customers, transactions };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { customers: [], transactions: [] };
    }
  };
 