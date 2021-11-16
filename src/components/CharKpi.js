import React, { useContext, useEffect } from "react";
import { KpiContext } from "../contexts/KpiContext";
import Api from "./../services/index";
import { Pie } from "react-chartjs-2";

const CharKpi = () => {
  const { kpi, setKpi } = useContext(KpiContext);
  useEffect(async () => {
    async function fetchData() {
      const rows = await Api.getClienteKpi();
      if (rows) {
        setKpi(rows);
      }
    }
    fetchData();
  }, []);

  const data = ({ average_age = 0, standard_deviation = 0 }) => ({
    labels: ["Promedio Edad", "Desviacion Estandar"],
    datasets: [
      {
        label: "Dataset 1",
        data: [average_age, standard_deviation],
        backgroundColor: ["#4dc9f6", "#f67019"],
      },
    ],
  });

  return (
    <div>
      <h4 className="d-flex justify-content-between align-items-center mt-3">
        <span className="text-primary">KPI Cliente</span>
      </h4>
      <div className="card p-2">
        <Pie
          data={data(kpi)}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: false,
                text: "Chart.js Pie Chart",
              },
            },
          }}
        />
      </div>
    </div>
  );
};
export default CharKpi;
