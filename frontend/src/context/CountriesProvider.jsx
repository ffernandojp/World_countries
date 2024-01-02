import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [totalCountries, setTotalCountries] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://restcountries.com/v3.1/all";

      const { data } = await axios(url);
      
      setCountries(data);
      setTotalCountries(data.length);
    };
    fetchApi();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        totalCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesProvider };

export default CountriesContext;
