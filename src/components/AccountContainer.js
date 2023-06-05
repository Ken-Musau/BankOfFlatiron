import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [originalTransactions, setOriginalTransactions] = useState([]); // return original list of transaction when searchquery is cleared
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
      setOriginalTransactions(transactionsFetched);
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
      const postedTransaction = await res.json();
      setTransactions([...transactions, postedTransaction]);
      setOriginalTransactions([...originalTransactions, postedTransaction]);
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
      setOriginalTransactions(
        originalTransactions.filter((transaction) => transaction.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  }

  // Keep truck of changes in transaction inputs
  const onChangeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSearchHandler = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTransactions = originalTransactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm)
    );
    setTransactions(searchTerm ? filteredTransactions : originalTransactions);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postTransaction();
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  const onDeleteHandler = (id) => {
    deleteTransaction(id);
    console.log("Deleted", id);
  };

  const sortTransactionsByCategoryHandler = () => {
    const sortedTransactions = [...transactions].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    setTransactions(sortedTransactions);
  };

  const sortTransactionsByDescriptionHandler = () => {
    const sortedTransactions = [...transactions].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    setTransactions(sortedTransactions);
  };

  return (
    <div>
      <div className="ui segment">
        <div className="ui fluid icon input">
          <input
            type="text"
            placeholder="Search your Recent Transactions"
            onChange={onSearchHandler}
          />
          <i className="circular search link icon"></i>
        </div>
      </div>
      <AddTransactionForm
        changeHandler={onChangeHandler}
        submitHandler={onSubmitHandler}
        formData={formData}
      />
      <TransactionsList
        transactions={transactions}
        deleteHandler={onDeleteHandler}
        sortByCategory={sortTransactionsByCategoryHandler}
        sortByDescription={sortTransactionsByDescriptionHandler}
      />
    </div>
  );
}

export default AccountContainer;
