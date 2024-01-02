import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardSearch from "../components/CardSearch";

const CountrySearch = () => {
  const { searchValue } = useParams();
  const [countriesFound, setCountriesFound] = useState([]);
  const [title, setTitle] = useState("Not countries found");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://restcountries.com/v3.1/name/${searchValue}`;
        const { data } = await axios.get(url);
        // const response = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`);
        // const data = await response.json();
        console.log(data);
        setCountriesFound(data);
        setTitle("Countries found");
      } catch (error) {
        // setTitle("Not countries found")
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="pt-24 pb-6 px-5 text-white">
        <div className="">
          <h2 className="text-center font-serif uppercase text-4xl xl:text-5xl py-5">
            {loading
              ? "Loading..."
              : countriesFound.length > 0
              ? "Countries found"
              : "No countries found"}
          </h2>
          {loading ? (
            <h5 className="italic text-lg text-center pt-20">Loading...</h5>
          ) : countriesFound.length > 0 ? (
            countriesFound.map((country, index) => (
              <div key={index} className="px-2">
                <CardSearch country={country} />
              </div>
            ))
          ) : (
            <h5 className="italic text-lg text-center pt-20">
              Sorry, no countries were found with the specified name in the
              database. Please check the spelling and try again.
            </h5>
          )}
        </div>
      </div>
    </>
  );
};

export default CountrySearch;
