import AppRouters from "./routers/index";
import ClienteContextProvider from "./contexts/ClienteContext"
import KpiContextProvider from "./contexts/KpiContext"

function App() {
  return (
    <div>
      <ClienteContextProvider>
        <KpiContextProvider>
          <AppRouters />
        </KpiContextProvider>
      </ClienteContextProvider>
    </div>
  );
}

export default App;
