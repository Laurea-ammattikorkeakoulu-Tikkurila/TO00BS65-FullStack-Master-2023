
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const Hello = () => (
  <div>
    <p>Hei Maailma!</p>
  </div>
);

/* Luodaan CustomHello komponentti, jota myös kutsutaan alla olevasta App komponentista ja jonka kutsussa tulee mukana propsit - vrt funktion kutsuparametrit*/
const CustomHello = (props) => {
  return (
    <div>
      <p className={props.color}>
        {props.greeting} (<strong> {props.author} </strong> )
      </p>
    </div>
  );
};

/* Luodaan muuttuja user, jota käytetään REACT  Elementti */
const user = {
  firstName: 'Full',
  lastName: 'Stack',
  avatarUrl: 'https://cdn.sstatic.net/Sites/stackoverflow/img/captcha.svg',
  linkki: "https://canvas.laurea.fi/courses/6307"
};


/* Luodaan Elementti komponentti, jota kutsutaan App komponentista. Komponentti käyttää edellä määriteltyä user-muuttujaa*/
const Elementti = () => {
  return (
    <div>
      <h2>{user.firstName}{user.lastName}</h2>
      <a
        href={user.linkki}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={user.avatarUrl}
          alt="Kuvalinkki rikki..."
        />
      </a>
    </div>
  );
};


const App = () => (
  <div className="App">
    <h1> Laurea FullStack 2023 React sovellus!</h1>

    <h2>It is {new Date().toLocaleTimeString()}.</h2>

    <Hello />
    <CustomHello
      author="Jere Koodari"
      greeting="'Tere Moro Hei!'"
      color="blue" />
    <CustomHello
      author="Milla Devaaja"
      greeting="'Goedemorgen!'"
      color="green"
    />
    {<Elementti />}
  </div>
);

export default App;
