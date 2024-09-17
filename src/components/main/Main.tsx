import { useEffect, useState } from "react";
import { styleMain } from "../../styles";
import Changes from "../changes/Changes";
import CombinedChart from "../charts/CombinedChart";
import AppLineChart from "../charts/LineChart";
import AppBarChart from "../charts/BarChart";
import { useLocation } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState<[]>([]);
  const location = useLocation();

  console.log(location.pathname);

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
    <>
      {location.pathname === "/charts" ? (
        <>
          <div className={styleMain.sectionsCharts}>
            <section className={styleMain.sectionChart}>
              <AppBarChart></AppBarChart>
            </section>
            <section className={styleMain.sectionChart}>
              <AppLineChart></AppLineChart>
            </section>
            {/* <section className={styleMain.sectionChart}>
            <CombinedChart></CombinedChart>
          </section> */}
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default Main;
