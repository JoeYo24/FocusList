import React from "react";
import ReactDOM from "react-dom/client";

const App = () => <div>Hello, World!</div>

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
