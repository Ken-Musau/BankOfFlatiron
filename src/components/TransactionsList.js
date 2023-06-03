import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, deleteHandler }) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
            deleteHandler={deleteHandler}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
