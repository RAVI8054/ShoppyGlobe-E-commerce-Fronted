import { Outlet } from "react-router-dom";
import Header from "./Componets/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet /> {/* This renders ProductList or ProductDetail based on the route */}
      </div>
    </Provider>
  );
}

export default App;
