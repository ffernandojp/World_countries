import { FaMapMarkerAlt } from "react-icons/fa";

const countrySite = ({ country }) => {
  const {
    name,
    capital,
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

  return (
    <>
      <div className="container mt-6 mx-auto p-4 mb-4 md:p-0 h-96 lg:mb-0">
        <div className="shadow-lg flex flex-wrap w-full p-2 lg:w-4/2 mx-auto h-full">
          <div
            className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
            style={{
              backgroundImage: `url(${name.common === "Andorra" ? flags.png : flags.svg})`,
            }}
          >
            <div className="absolute text-xl">
              <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
            </div>
          </div>

          <div className="bg-white w-full md:w-2/3">
            <div className="h-full mx-auto px-6 md:px-0 md:py-1 md:-ml-6 relative">
              <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                  <h3 className="lg:text-4xl text-2xl text-teal-500">{name.common}</h3>
                  <p className="mb-0 mt-3 text-grey-dark text-sm font-bold lg:font-normal italic">
                    {`capital: ${capital ? capital : "None capital"}`}
                  </p>
                  <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                </div>

                <div className="w-full lg:w-2/4 lg:px-12">
                  {/* <div className="" > */}
                    <h2 className="text-2xl italic pb-6">
                      About this country
                    </h2>
                  {/* </div> */}
                  <p className="text-md mt-4 lg:mb-3 lg:mt-3 text-justify md:text-left text-sm">
                    <strong>Population:</strong> {population}
                  </p>
                  <p className="text-md mt-4 lg:mb-3 lg:mt-3 text-justify md:text-left text-sm">
                    <strong>Continent:</strong> {continents}
                  </p>
                  <p className="text-md mt-4 lg:mb-3 lg:mt-3 text-justify md:text-left text-sm">
                    <strong>Region:</strong> {region}
                  </p>
                  <p className="text-md mt-4 lg:mb-3 lg:mt-3 text-justify md:text-left text-sm">
                    <strong>Borders:</strong>{" "}
                    {typeof borders !== "undefined"
                      ? Object.values(borders).map((border) => `${border}, `)
                      : "no borders"}
                  </p>
                  <p className="text-md mt-4 lg:mb-3 lg:mt-3 text-justify md:text-left text-sm">
                    <strong>Timezones:</strong> {timezones}
                  </p>
                  <p className="text-md mt-4 lg:mb-3 lg:mt-3 text-justify md:text-left text-sm">
                    <strong>Currencies:</strong>{" "}
                    {typeof currencies !== "undefined"
                      ? Object.values(currencies).map(
                          ({ symbol, name }) => `${symbol} ${name}, `
                        )
                      : "no currencies"}
                  </p>

                  <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                    <strong>Languages:</strong>{" "}
                    {typeof languages !== "undefined"
                      ? Object.values(languages).map(
                          (language) => `${language}, `
                        )
                      : "no language"}
                  </p>
                </div>

                <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center pb-8 md:text-left">
                  <div className="w-full lg:w-2/4 mb-2">
                    <div className="items-center pb-6" >
                      <h2 className="text-2xl italic lg:pb-6 px-5 text-center pt-4 lg:mt-12 lg:pt-0">
                        Location
                      </h2>
                    </div>
                  </div>
                  <button
                    className="flex select-none hover:underline items-center gap-2 rounded-lg py-5 mb-6 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-teal-400 transition-all hover:bg-teal-900 active:bg-teal-700"
                    type="button"
                    data-ripple-dark="true"
                  >
                    <a href={maps.googleMaps} className="flex items-center">

                      <FaMapMarkerAlt className="h-4 w-4 fill-current" />

                      Google Maps
                    </a>
                  </button>
                  <button
                    className="flex select-none hover:underline items-center gap-2 rounded-lg py-5 mb-6 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-teal-400 transition-all hover:bg-teal-900 active:bg-teal-700"
                    type="button"
                    data-ripple-dark="true"
                  >
                    <a href={maps.openStreetMaps} className="flex items-center">

                      <FaMapMarkerAlt className="h-4 w-4 fill-current" />

                      Street Maps
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Card title
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            Last updated 3 mins ago
          </p>
        </div>
      </div> */}
    </>
  );
};

export default countrySite;
