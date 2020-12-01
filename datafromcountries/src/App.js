import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ cap }) => {
  const [result, setResult] = useState(null);
  const API_KEY = 'a68dd14a614b47388a972252200711';
  const uri = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cap}`;
  useEffect(() => {
    axios.get(uri).then((response) => {
      console.log(response.data.current);
      setResult(response.data.current);
    });
  });

  console.log(result);
  return result ? (
    <div>
      <p>temprature: {result.temp_c} celcius</p>
      <img src={result["condition"].icon} alt="weather" width="50px" />
      <p>
        wind:{" "}
        {`${result.wind_mph} mph ${result.wind_degree} degree ${result.wind_dir} direction`}
      </p>
    </div>
  ) : null;
};

const CountryRender = ({ cnt }) => {
  const countryRender = () =>
    cnt.map((c) => (
      <div key={c.name}>
        <h3>{c.name}</h3>
        <p>capital {c.capital}</p>
        <p>population {c.population}</p>
        <p>language</p>
        <ul>
          {c.languages.map((l) => (
            <li key={l.name}>{l.name}</li>
          ))}
        </ul>
        <img src={c.flag} alt="country flag" width="100" />
        <Weather cap={c.capital} />
      </div>
    ));

  return <div>{countryRender()}</div>;
};

const MultipleRender = ({ res, setResult }) => {
  const multipleRender = () => {
    return res.map((r) => (
      <p key={r.name}>
        {r.name}
        <button type="button" onClick={() => setResult([r])}>
          {" "}
          show{" "}
        </button>
      </p>
    ));
  };
  return <div>{multipleRender()}</div>;
};

const App = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${query}`)
        .then((response) => {
          setResult(response.data);
        });
    }
  }, [query]);

  const renderResult = () => {
    return result.length > 10 ? (
      <p>Too many matches, specify another filter</p>
    ) : result.length > 1 && result.length <= 10 ? (
      <MultipleRender res={result} setResult={setResult} />
    ) : (
      <CountryRender cnt={result} />
    );
  };

  return (
    <div>
      <p>
        find countries{" "}
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </p>
      {renderResult()}
    </div>
  );
};

export default App;
