import React from "react";

function AddTransactionForm({ changeHandler, submitHandler, formData }) {
  const { date, description, category, amount } = formData;
  // console.log(date, description, category,);
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={submitHandler}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            onChange={changeHandler}
            value={date}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={changeHandler}
            value={description}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={changeHandler}
            value={category}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            onChange={changeHandler}
            value={amount}
          />
        </div>
        <button
          className="ui button"
          type="submit"
          disabled={
            date === "" ||
            description === "" ||
            category === "" ||
            amount === ""
          }
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
