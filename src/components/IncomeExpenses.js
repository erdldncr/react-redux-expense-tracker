import React from "react";
import { connect } from "react-redux";

const IncomeExpenses = ({ transactionList }) => {
  const income = () => {
    return transactionList
      .filter((transaction) => transaction.amount >= 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0)
      .toFixed(2)
  };
  const expense = () => {
    return transactionList
      .filter((transaction) => transaction.amount < 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0)
      .toFixed(2)
  };
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income()}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense()}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ transactionList }) => ({
  transactionList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IncomeExpenses);
