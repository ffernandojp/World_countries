import { Link } from "react-router-dom";

const CardSearch = ({ country }) => {
  const {
    name,
    flags,
  } = country;

  return (
    <Link
      to={`/country/${name.common}`}
      // target="_blank"
      className="flex flex-col items-center group justify-center mx-auto bg-white rounded-lg shadow md:flex-row md:max-w-xl lg:max-w-4xl my-6 py-2 px-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-96 lg:w-1/3 rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={flags.svg ? flags.svg : flags.png}
        alt={flags.alt}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="flex items-center justify-between mb-1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {country.name.official}
          </h5>

          <h5 className=" bg-teal-500 px-3 hover:underline underline-offset-3 rounded-md transition-all invisible group-hover:visible text-white">
            Open in a new tab 
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Discover unique and remarkable countries found in your search, each
          with its own special qualities. Whether you're interested in history,
          culture, or natural beauty, you're sure to find something to love in
          these extraordinary places.
        </p>
      </div>
    </Link>
  );
};

export default CardSearch;
