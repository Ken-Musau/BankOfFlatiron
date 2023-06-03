import React from "react";

function AddTransactionForm({ changeHandler, submitHandler }) {
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={submitHandler}>
        <div className="inline fields">
          <input type="date" name="date" onChange={changeHandler} />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={changeHandler}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            onChange={changeHandler}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
