import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
// import Meme from "./components/Meme";
export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Form />
      {/* <Meme /> */}
    </div>
  );
}
