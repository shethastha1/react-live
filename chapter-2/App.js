import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title", key: "heading1" },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  { id: "title", key: "heading2" },
  "Heading 2"
);
const childDiv = React.createElement("div", { id: "childDuv" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(childDiv);
