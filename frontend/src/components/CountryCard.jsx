import { RiCurrencyLine } from "react-icons/ri";
import { MdOutlineLandscape } from "react-icons/md";
import { TbMessageLanguage } from "react-icons/tb";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const {
    name,
    capital,
    population,
    continents,
    currencies,
    languages,
    borders,
    maps,
    flags,
  } = country;

  // console.log(typeof languages !== 'undefined' ? Object.values(languages).map((lang) => `${lang}`) : 'no language');

  // console.log((Object.values(currencies).map(currency => currency.name)))
  // console.log(name);
  //   console.log(name.common, capital, population, continents, currencies,
  //   languages, borders, maps, flags.svg);

  return (
    <>
      <div className=" group max-w-sm bg-white mb-6 lg:mb-0 md:mb-0 shadow-sm shadow-black hover:shadow-sky-600 rounded-lg overflow-hidden my-4 border-solid hover:scale-105 hover:transition-transform transition duration-300">
        <img
          className="w-full max-h-36 object-cover object-center"
          src={name.common === "Andorra" ? flags.png : flags.svg}
          alt={flags.alt}
        />
        <div className="flex items-center justify-between px-2 py-0 transition duration-300 group-hover:bg-opacity-80 group-hover:bg-sky-500 invisible group-hover:visible">
          <Link to={`/country/${name.common}`} target="_blank">
            <h1 className="text-base font-bold text-white hover:underline">
              Open in site
            </h1>
          </Link>
        </div>
        <div className="flex items-center px-2 py-3 bg-gray-900">
          {/* <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
                <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"/>
            </svg> */}
          {/* <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"/>
            </svg> */}
          <BiWorld
            className="h-6 w-6 text-white fill-current"
            viewBox="0 0 22 22"
          />
          {/* <h1 className="mx-3 text-white font-semibold text-lg"><a className="px-2 text-sm underline hover:text-green-300" href={maps.googleMaps}>Google Maps</a>
            - <a className="px-2 text-sm underline hover:text-green-300" href={maps.openStreetMaps}>Street Map</a></h1> */}
          <h1 className="mx-3 text-white font-semibold text-2xl ">
            {name.common}
          </h1>
        </div>
        <div className="py-3 px-6">
          {/* <h1 className="text-2xl font-semibold text-gray-800">{name.common}</h1> */}
          {/* <p className="py-2 text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla. Viverra adipiscing at in tellus integer.</p> */}

          <div className="flex items-center mt-1 text-gray-700">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
              <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
              <g>
                <path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" />
              </g>
            </svg>
            <h1 className="px-2 text-sm">
              capital: {capital ? capital : "None capital"}
            </h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <MdOutlineLandscape className="h-6 w-6 fill-current" />
            <h1 className="px-2 text-sm">continet: {continents}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
              <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
              <g>
                <path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" />
              </g>
            </svg>
            <h1 className="px-2 text-sm">population: {population}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <RiCurrencyLine className="h-6 w-6 fill-current" />
            {/* {Object.values(currencies).map((currency, index) => (<h1 key={index}>{currency.name}</h1>))} */}
            <h1 className="px-2 text-sm">
              currencies:{" "}
              {typeof currencies !== "undefined"
                ? Object.values(currencies).map(
                    ({ symbol, name }) => `${symbol} ${name}, `
                  )
                : "no currencies"}
            </h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <TbMessageLanguage className="h-6 w-6 fill-current" />
            <h1 className="px-2 text-sm">
              languages:{" "}
              {typeof languages !== "undefined"
                ? Object.values(languages).map((language) => `${language}, `)
                : "no language"}
            </h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
              <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
            </svg>
            <a
              className="px-2 text-sm underline hover:text-green-300"
              href={maps.googleMaps}
            >
              Google Maps
            </a>
            <a
              className="px-2 text-sm underline hover:text-green-300"
              href={maps.openStreetMaps}
            >
              Street Map
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
