import React from "react";
import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Form Example</h2>
      <MyForm
        userName="Ozzy Osbourne"
        userEmail="ozzy.osbourne@blacksabbath.com"
        bio="Fala um pouco de você"
        role="user"
      />
    </div>
  );
}

export default App;
