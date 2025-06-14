import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";
import AppRouters from "@routes/AppRouters";
import { Provider } from "react-redux";
import { store, persistor } from "@store/index";
import "./services/global-axios.js";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouters />
    </PersistGate>
  </Provider>
);
