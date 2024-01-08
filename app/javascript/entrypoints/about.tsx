import React from "react";
import ReactDOM from "react-dom/client";

const About = () => <div>About Page</div>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<About />);