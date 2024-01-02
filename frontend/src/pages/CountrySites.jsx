import { useParams } from "react-router-dom";
import CountrySite from "../components/CountrySite";
import useCountries from "../hooks/useContries";
import CountrySuggest from "../components/CountrySuggest";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";

const CountrySites = () => {
  const { countryName } = useParams();
  const { countries, totalCountries } = useCountries();
  return (
    <>
    <Header />
      <div className="w-full lg:max-w-7xl lg:mx-auto items-center justify-center mt-24 mb-36 lg:mb-0 lg:pb-0 pb-24">
        {countries.map((country, index) => (
          <div key={index + 1}>
            {country.name.common === countryName ? (
              <CountrySite country={country} />
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-10 pt-64 lg:pt-0 lg:mt-0">
        <h1
          className="text-4xl font-bold pb-5 text-center mt-24 lg:mt-10 pt-12"
          id="all-countries"
        >
          Other countries
        </h1>
        <div className="lg:grid md:grid lg:grid-cols-4 sm:grid pt-6 lg:grid-rows-4 md:grid-rows-3 md:grid-cols-3 md:gap-7 md:max-w-3xl sm:grid-cols-1 sm:grid-rows-1 sm:max-w-sm w-80 gap-10 lg:max-w-7xl lg:w-auto md:w-auto mx-auto flex-auto bg-gray-900">
          {countries
            .filter((country) => country.name.common !== countryName)
            .map((country, index) => (
              <CountrySuggest key={country.name.common} country={country} />
            ))}
        </div>
      </div>
      <div>
        <About />
        <Contact />
      </div>
    </>
  );
};

export default CountrySites;
