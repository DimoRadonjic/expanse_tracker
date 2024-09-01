import { useEffect, useState } from "react";
import { styleMain } from "../../styles";
import Changes from "../changes/Changes";

const Main = () => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(({ transactions }) => {
        setData(transactions);
      })
      .catch((error) => {
        console.error("Error fetching the JSON file:", error);
      });
  }, []);
  return (
    <div className={styleMain.sections}>
      <section className={styleMain.section}>
        <Changes type="Balance" data={data} />
      </section>
      <section className={styleMain.section}>
        <Changes type="Income" data={data} />
      </section>
      <section className={styleMain.section}>
        <Changes type="Expense" data={data} />
      </section>
    </div>
  );
};

export default Main;
