import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code} className="list-group">
            <Link
              to={`/country/${country.alpha3Code}`}
              className="list-group-item list-group-item-action"
            >{country.altSpellings[0]} / {country.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
