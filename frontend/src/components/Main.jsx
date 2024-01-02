import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import gifBackground from "/home/fernandop/Documents/MeCode/Programming/React/world-countries/frontend/src/assets/img/neptune-neptune101.gif";

function Main() {
  const [searchValue, setSearchValue] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://restcountries.com/v3.1/name/${searchValue}`
  //     );
  //     const data = await response.json();
  //     setSearchResults(data);
  //     console.log(data);
  //   };
  //   fetchData();
  // }, [searchValue]);

  return (
    <>
      <main className="bg-gray-950 text-white border-teal-700 mb-6">
        <div
          className="bg-cover bg-center bg-no-repeat bg-opacity-20"
          style={{
            height: "auto",
            mixBlendMode: "hard-light",
            backgroundPositionY: "center",
            backgroundPositionX: "center",
            backgroundImage: `url(${gifBackground}`,
          }}
        >
          <section
            id="main-section"
            className="bg-center bg-no-repeat  bg-gray-900 bg-blend-multiply"
          >
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
              <h1 className="mb-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                Countries of the world
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                If you're interested in learning more about a specific country,
                we invite you to use the search bar below to find the
                information you need.
              </p>
              <div className="flex flex-col space-y-4 items-center sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <div className="relative h-10 w-96 min-w-[200px]">
                  <input
                    className="peer h-full w-full rounded-[7px] border border-opacity-100 border-gray-300 before:border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-2 placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    onChange={(e) => {
                      const modifiedValue =
                        searchValue.length === 1
                          ? e.target.value.toLocaleUpperCase()
                          : e.target.value.toLocaleLowerCase();
                      setSearchValue(modifiedValue);
                    }}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    search for a country
                  </label>
                  {/* <div className="absolute top-full left-0 w-full bg-white border border-t-transparent rounded-b-md shadow-md">
                  {/* <ul className="text-left p-2 pt-0 border-2 border-gray-300">
                      <li className="border-2 border-gray-200">adadada</li>
                      {Array.isArray(searchResults) ? searchResults.map((country, index) => {
                        <li className="border-2 border-gray-200">hi</li>
                        <li key={index} className="border-2 border-gray-200">{country.name.common}</li>
                      }) : null}
                    </ul>
                  </div> */}
                </div>
                <Link to={`/countrySearch/${searchValue}`} target="_blank">
                  <button
                    className="middle none center mr-3 rounded-lg border border-teal-500 py-3 px-6 font-sans text-xs font-bold uppercase text-teal-500 transition-all hover:bg-teal-300 focus:ring focus:ring-teal-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-dark="true"
                  >
                    Search
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Main;
