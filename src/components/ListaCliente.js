import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { ClienteContext } from "../contexts/ClienteContext";
import Api from "./../services/index";

const ListaCliente = () => {
  const { cliente, setCliente } = useContext(ClienteContext);
  const someId = 1
  useEffect(() => {
    async function fetchData() {
      const rows = await Api.getCliente(someId);
      if (rows) {
        setCliente(rows);
      }
    }
    fetchData();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Fecha Nacimiento</th>
            <th>Edad</th>
            <th>Año Probabilidad de Muerte</th>
          </tr>
        </thead>
        <tbody>
          {cliente &&
            cliente.map((c, i) => (
              <tr key={c.id}>
                <td>{i + 1}</td>
                <td>{c.name}</td>
                <td>{c.last_name}</td>
                <td>{c.birth_date}</td>
                <td className="text-center">{c.age}</td>
                <td className="text-center">{c.death}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListaCliente;
