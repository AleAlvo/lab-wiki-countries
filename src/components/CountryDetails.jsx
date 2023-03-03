import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function CountryDetails() {
    const {countryId} = useParams();
    const [country, setCountry] = useState(null)
    const [fetching, setFetching] = useState(true);
    console.log(countryId)
    console.log(country)

    const getCountry = async () => {
        try {
            let response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            setCountry(response.data)
            setFetching(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCountry();
      }, [countryId]);

  return (
    <div>
        Country Details
        {fetching && <p>Loading ...</p>}
        <h1>{country && country.name.common}</h1>
        

    </div>
  )
}

export default CountryDetails



/* 
<div class="col-7">
            <h1>France</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

 */