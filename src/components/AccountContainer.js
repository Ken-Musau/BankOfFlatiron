import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({
  transactions,
  changeHandler,
  submitHandler,
  searchHandler,
  deleteHandler,
}) {
  return (
    <div>
      <Search searchHandler={searchHandler} />
      <AddTransactionForm
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />
      <TransactionsList
        transactions={transactions}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default AccountContainer;
