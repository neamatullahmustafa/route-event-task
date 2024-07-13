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
export const getDataBase = async () => {
  const customers = [
    {
        "id": 1,
        "name": "Ahmed Ali"
    },
    {
        "id": 2,
        "name": "Aya Elsayed"
    },
    {
        "id": 3,
        "name": "Mina Adel"
    },
    {
        "id": 4,
        "name": "Sarah Reda"
    },
    {
        "id": 5,
        "name": "Mohamed Sayed"
    }
]

  const transactions = [
    {
        "id": 1,
        "customer_id": 1,
        "date": "2022-01-01",
        "amount": 1000
    },
    {
        "id": 2,
        "customer_id": 1,
        "date": "2022-01-02",
        "amount": 2000
    },
    {
        "id": 3,
        "customer_id": 2,
        "date": "2022-01-01",
        "amount": 550
    },
    {
        "id": 4,
        "customer_id": 3,
        "date": "2022-01-01",
        "amount": 500
    },
    {
        "id": 5,
        "customer_id": 2,
        "date": "2022-01-02",
        "amount": 1300
    },
    {
        "id": 6,
        "customer_id": 4,
        "date": "2022-01-01",
        "amount": 750
    },
    {
        "id": 7,
        "customer_id": 3,
        "date": "2022-01-02",
        "amount": 1250
    },
    {
        "id": 8,
        "customer_id": 5,
        "date": "2022-01-01",
        "amount": 2500
    },
    {
        "id": 9,
        "customer_id": 5,
        "date": "2022-01-02",
        "amount": 875
    }
]

  return { customers, transactions };
};
