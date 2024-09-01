import { styleChanges } from "../../styles";
import { DataType } from "../../types";

interface ChangesProps {
  type: string;
  data: DataType[];
}
const Changes = ({ type, data }: ChangesProps) => {
  const filteredData =
    type.toLowerCase() !== "balance"
      ? data.filter((item) => item.type.toLowerCase() === type.toLowerCase())
      : data;

  const dateChanged = filteredData.map((item) => ({
    ...item,
    date: new Date(item.date),
  }));

  const sortedData = dateChanged.sort(
    (item1, item2) => item2.date.getTime() - item1.date.getTime()
  );

  function calcTotal() {
    switch (type.toLowerCase()) {
      case "income":
        return filteredData.reduce((acc, item) => acc + item.amount, 0);

      case "expense":
        return -1 * filteredData.reduce((acc, item) => acc + item.amount, 0);

      default: {
        const expenses = data
          .filter((item) => item.type.toLowerCase() === "expense")
          .reduce((acc, item) => acc + item.amount, 0);
        const incomes = data
          .filter((item) => item.type.toLowerCase() === "income")
          .reduce((acc, item) => acc + item.amount, 0);

        return incomes - expenses;
      }
    }
  }
  return (
    <div className={styleChanges.changesContent}>
      <div>
        <h2>
          {type} : {calcTotal()} €
        </h2>
      </div>
      <div className={styleChanges.data}>
        {sortedData.map((item, index) => (
          <>
            <div key={index} className={styleChanges[item.type]}>
              <div>Category : {item.category}</div>
              <div>Date : {item.date.toDateString()}</div>
              <div>Amount : {item.amount} €</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Changes;
