import { useState, useEffect } from "react";
import useCountries from "../hooks/useContries";
import Country from "./CountryCard";
// import Pagination from "./Pagination";
import SortDropdown from "./SortDropDown";

const CountriesList = () => {
  const { countries, setCountries, totalCountries } = useCountries();
  const [countriesOrdered, setCountriesOrdered] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const sortCards = (option, countries) => {const countriesOrdered = option === "Name" ? countries.sort((a, b) =>
  a.name.common.localeCompare(b.name.common))
  : option === "Population" ? countries.sort(
    (a, b) => b.population - a.population)
    : option === "Continent" ? countries.sort((a, b) => a.continents.join().localeCompare(b.continents.join())) 
    : countries.sort((a, b) => a.language.localeCompare(b.language))
    setCountries(countriesOrdered)
  }

  const handleClickFunction = (option) => {
      sortCards(option, countries);
      setSelectedOption(option);
    }; 

  const handleCountriesOrder = (countries) => {
    setCountries(countries);
  };

  // useEffect(() => {
  //   const sortCards = () => {
  //     sortFunction({countries, handleCountriesOrder}, selectedOption);
  //   };
  //   sortCards();
  // }, [countries, selectedOption]);

  // useEffect(() => {
  //   const sortedCountries = sortFunction(
  //     { countries, handleCountriesOrder },
  //     selectedOption
  //   );
  //   setCountriesOrdered(sortedCountries);
  // }, [selectedOption]);

  return (
    <> 
      <h1
        className="text-4xl font-bold pb-5 text-center border-t-2 pt-6"
        id="all-countries"
      >
        All countries
      </h1>
      <div className="text-right mr-12 mb-3">
        <SortDropdown handleClickFunction={handleClickFunction} />
      </div>
      <div className="lg:grid md:grid lg:grid-cols-4 sm:grid lg:grid-rows-4 md:grid-rows-3 md:grid-cols-3 md:gap-7 md:max-w-3xl sm:grid-cols-1 sm:grid-rows-1 sm:max-w-sm w-64 gap-10 lg:max-w-5xl lg:w-auto md:w-auto mx-auto flex-auto bg-gray-900">
        {countries.map((country, index) => (
          <div key={index + 1}>
            <Country key={index} country={country} />
          </div>
        ))}
      </div>
      {/* <Pagination total={totalCountries} /> */}
    </>
  );
};

export default CountriesList;
