import React from "react";
import ReactDOMClient from "react-dom/client";
import { LoginWindow } from "./screens/LoginWindow";
import { Homepage } from "./screens/homepage/homepage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LoginWindow/>);
