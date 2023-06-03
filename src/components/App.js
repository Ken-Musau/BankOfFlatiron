import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const PostFormData = {
    date: formData.date,
    description: formData.description,
    category: formData.category,
    amount: formData.amount,
  };

  const base_url = "http://localhost:8001/transactions";

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    try {
      const res = await fetch(base_url);
      const transactionsFetched = await res.json();
      setTransactions(transactionsFetched);
    } catch (error) {
      console.log(error);
    }
  }

  async function postTransaction() {
    try {
      const res = await fetch(base_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(PostFormData),
      });
      const postedTrasaction = await res.json();
      setTransactions([...transactions, postedTrasaction]);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTransaction(id) {
    try {
      await fetch(`${base_url}/${id}`, {
        method: "DELETE",
      });
      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  }

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postTransaction();
  };

  const onDeleteHandler = (id) => {
    deleteTransaction(id);
    console.log("Deleted", id);
  };

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer
        transactions={transactions}
        changeHandler={onChangeHandler}
        submitHandler={onSubmitHandler}
        deleteHandler={onDeleteHandler}
      />
    </div>
  );
}

export default App;
