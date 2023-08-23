import React from "react";
import Header from "./Header";
import Button from "./Button";
import Footer from "./Footer";
import Main from "./Main";
// const Button = React.lazy(() => import("MicroFrontend/Button"));

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* <Button buttonName={"Hey there"} /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
