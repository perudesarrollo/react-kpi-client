import FrmRegistrarCliente from './../components/FrmRegistrarCliente'
import ListaCliente from './../components/ListaCliente'
import CharKpi from './../components/CharKpi'
function ClienteApp() {
  return (
    <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <FrmRegistrarCliente />
        <CharKpi />
      </div>
      <div className="col-md-7 col-lg-8">
        <ListaCliente />
      </div>

    </div>
  );
}

export default ClienteApp;
