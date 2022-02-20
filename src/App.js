import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    console.log("rendered");
    fetchAdvice();
  }, []);
  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      // const data = await response.data;
      // const advice = await data.slip.advice;

      // we can do destru.
      const { advice } = response.data.slip;
      console.log(advice);
      setAdvice(advice);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="app">
        <div className="card">
          <h3 className="heading">{advice}</h3>
          <button className="button" onClick={fetchAdvice}>
            <span>Give me advice</span>
          </button>
        </div>
      </div>
    </>
  );
};
