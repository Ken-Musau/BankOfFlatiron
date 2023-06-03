import React from "react";

function Transaction({
  id,
  date,
  description,
  category,
  amount,
  deleteHandler,
}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button
          className="negative ui button"
          onClick={() => deleteHandler(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
