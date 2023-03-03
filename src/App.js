import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Header from './components/Header';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [fetching, setFetching] = useState(true);

  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      setCountries(response.data);
      setFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <Header />
      {fetching && <p>Loading ...</p>}
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path='/country/:countryId' element={<CountryDetails countries={countries}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
