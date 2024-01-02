import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const CountrySuggest = ({ country }) => {
  const {
    name,
    capital,
    subregion,
    population,
    continents,
    currencies,
    languages,
    borders,
    timezones,
    region,
    maps,
    flags,
  } = country;

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <>
      <Link to={`/country/${name.common}`}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8 lg:mb-0 transition duration-500 hover:scale-105">
          <img className="w-60 h-32 mx-5" src={flags.svg} alt={flags.alt} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name.official}</div>
            <p className="text-gray-700 text-base">
              {flags.alt ? flags.alt : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."}
            </p>
            {/* <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p> */}
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {`#${name.common}`}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {`#${capital ? capital : "None capital"}`}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {`#${subregion}`}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CountrySuggest;
