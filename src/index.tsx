import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import RootStore from "./entities";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "app/themes/theme";
import ApiService from "shared/api/apiService";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

window.addEventListener("error", (event): void => {
  // errorCollector.setError(event);
  // eventBus.broadcast('error', event);
  console.log("error: ", event);
  event.preventDefault();
});
export const baseUrl = process.env.REACT_APP_API_URI || "";
export const apiModule = new ApiService(baseUrl);

const store = RootStore.create({});
export const StoreContext = createContext(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreContext.Provider>
  </React.StrictMode>
);
