import { useNavigate } from "react-router-dom";
import { styleTransactionForm } from "../../styles";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useBalanceContext } from "../../contexts/balanceContext";
import { DataType } from "../../types";
import { useThemeContext } from "../../contexts/themeContext";
import { Bounce, toast, ToastContainer } from "react-toastify";
import appStyle from "../../styles/app.module.scss";

const TransactionForm = () => {
  const { themeMode } = useThemeContext();

  const navigate = useNavigate();
  const { dispatch } = useBalanceContext();
  const [transaction, setTransaction] = useState<DataType>({
    amount: 0,
    category: "",
    date: new Date().toDateString(),
    type: "income",
    id: "",
  });

  const collectData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({
      ...prev,
      [name]: name === "amount" ? parseFloat(value) : value,
    }));
  };

  const collectDate = (value: Date | null) => {
    if (value) {
      setTransaction((prev) => ({
        ...prev,
        date: value.toISOString(),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({ type: "add_transaction", payload: transaction });

    fetch("http://localhost:8000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })

      .catch((error) => {
        console.error("Error:", error);
      });

    const toastStyles = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    };

    if (transaction.amount <= 0) {
      toast.error("Failed transaction: Amount must be greater than zero.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else if (transaction.type === "income") {
      toast.success("Transaction successful: Income added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      toast.success("Transaction successful: Expense added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className={styleTransactionForm.transactionForm}>
      <form
        onSubmit={handleSubmit}
        className={
          themeMode === "dark"
            ? styleTransactionForm.transactionFormContentDark
            : styleTransactionForm.transactionFormContentLight
        }
      >
        <div
          className={
            styleTransactionForm.typePart + " " + styleTransactionForm.part
          }
        >
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="transaction-type"
            value={transaction.type}
            onChange={(e) => collectData(e)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div
          className={
            styleTransactionForm.datePart + " " + styleTransactionForm.part
          }
        >
          <label htmlFor="date">Date</label>

          <DatePicker
            selected={new Date(transaction.date)}
            onChange={(e) => collectDate(e)}
            dateFormat="dd-MM-yyyy"
            className={styleTransactionForm.calendar}
          />
        </div>
        <div
          className={
            styleTransactionForm.categoryPart + " " + styleTransactionForm.part
          }
        >
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={transaction.category}
            onChange={collectData}
          />
        </div>
        <div
          className={
            styleTransactionForm.amountPart + " " + styleTransactionForm.part
          }
        >
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={transaction.amount}
            onChange={collectData}
          />
        </div>

        <div className={styleTransactionForm.buttons}>
          <button className={appStyle.appButton} type="submit">
            Submit
          </button>
          <button className={appStyle.appButton} onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default TransactionForm;
