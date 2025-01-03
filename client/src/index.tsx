import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/app/layout/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Router";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore";
import { StoreProvider } from "./app/context/StoreContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StoreProvider>
  </StrictMode>
);
