import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {

  const [quotes, setQuotes] = useState([]);
  const [variable, setVariable] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then((result) => {
        console.log("Tässä result: " + result)
        return result.json();
      })
      .then((data) => {
        console.log("Tässä dataquotes: " + data.quotes)
        setQuotes(data.quotes)
      });

  }, []);

  const QuotePrint = (props) => {
    return (
      <>
        <h3>{props.quote}</h3>
        <p>{props.author}</p>
      </>
    )
  }

  const HandleChange = (props) => {
    console.log("Napataan muutokset Formista: " + props.target.value);
    setVariable(props.target.value);

  }

  useEffect(() => {
    let quotesCopy = [...quotes]
    quotesCopy = quotesCopy.filter(data => data.quote.includes(variable))
    setQuotes(quotesCopy)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variable]);


  /*   const getData = () => {
      fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then((result) => {
          console.log(result)
          return result.json();
        })
        .then((data) => {
  
          setQuotes(data.quotes)
        });
    } */

  return (
    <>
      <div className="App">
        <h1> Laurea FullStack 2023 React Quote sovellus!</h1>

        <h2>It is {new Date().toLocaleTimeString()}.</h2>

        <form>
          <label>Haku päälle...</label>
          <input value={variable} type="text" onChange={HandleChange} /><br></br>

        </form>
        {/*         <button onClick={getData}>Hae</button> */}
        {
          quotes ?
            quotes.map((data, index) => <QuotePrint author={data.author} quote={data.quote} />)
            : <div>Nothing here.Fething data...</div>
        }


      </div>
    </>
  );
};

export default App;
