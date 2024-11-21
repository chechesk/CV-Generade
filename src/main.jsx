import { GoogleAuthProvider } from "firebase/auth";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import AppRouter from "./Router/router.jsx";
import { firebaseConfig } from "./Config/db.js";
import { Provider } from 'react-redux'
import { store } from "./Redux/store.js";



function removeQuotes(str) {
  if (str.startsWith('"') && str.endsWith('"')) {
    return str.slice(1, -1);
  }
  return str;
}

const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Main() {
  useEffect(() => {
    logEvent(analytics, "page_view");
  }, []);


}

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <AppRouter />
  <Main />
  </Provider>
);
