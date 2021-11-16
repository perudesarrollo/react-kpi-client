import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Api from "./../services/index";
import { ClienteContext } from "../contexts/ClienteContext";
import { KpiContext } from "../contexts/KpiContext";

const FrmRegistrarCliente = () => {
  const { setCliente } = useContext(ClienteContext);
  const { setKpi } = useContext(KpiContext);
  const { register, handleSubmit } = useForm();

  const getClienteKpi = async () => {
    const rows = await Api.getClienteKpi();
    if (rows) {
      setKpi(rows);
    }
  }

  const getCliente = async () => {
    const rows = await Api.getCliente()
    if (rows) {
      setCliente(rows);
    }
  }

  const onSubmit = async (data) => {
    try {
      await Api.post("/cliente", data).then((response) => response.data);
      Api.success("Cliente se guardo");
      getCliente()
      getClienteKpi()
    } catch (error) {
      console.log("error::", error.response);
      Api.failed(error);
    }
  };
  return (
    <div className="">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Registrar</span>
      </h4>
      <form className="card p-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder=""
            required
            minLength="3"
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellidos:</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder=""
            required
            minLength="3"
            {...register("last_name")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Nacimiento:</label>
          <input
            type="date"
            className="form-control"
            name="birth_date"
            placeholder=""
            required
            minLength="10"
            {...register("birth_date")}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default FrmRegistrarCliente;
