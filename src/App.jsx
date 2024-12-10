import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <p className="text-3xl font-bold underline">Helloo World!</p>
    </>
  );
}

export default App;
