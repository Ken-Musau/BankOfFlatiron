import React from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({
  transactions,
  changeHandler,
  submitHandler,
  searchHandler,
  deleteHandler,
  sortByCategory,
  sortByDescription,
}) {
  return (
    <div>
      <div className="ui segment">
        <div className="ui fluid icon input">
          <input
            type="text"
            placeholder="Search your Recent Transactions"
            onChange={searchHandler}
          />
          <i className="circular search link icon"></i>
        </div>
      </div>
      <AddTransactionForm
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />
      <TransactionsList
        transactions={transactions}
        deleteHandler={deleteHandler}
        sortByCategory={sortByCategory}
        sortByDescription={sortByDescription}
      />
    </div>
  );
}

export default AccountContainer;
