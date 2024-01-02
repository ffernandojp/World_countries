import { useEffect, useState } from "react";
import useCountries from "../hooks/useContries";
import axios from "axios";
import { AlertError, AlertSuccess } from "./Alerts";

const Contact = () => {
  const { countries, totalCountries } = useCountries();
  const [alertVisible, setAlertVisible] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    message: "",
    province: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleShowDiv = () => {
    setShowDiv(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showDiv]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(formData, null, 2));
    console.log(formData);
    axios
      .post("http://localhost:5000/api/data/users", formData)
      .then((res) => {
        console.log(res.data);
        res.data.successful ? setAlertVisible(true) : setAlertVisible(false);
        setAlertMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        // alert(err.message);
        setAlertVisible(false);
        setAlertMessage(err.message);
      });

      setShowDiv(true);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // alert(JSON.stringify(formData, null, 2));
  //   console.log(formData);
  //   fetch("api/data", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="bg-gray-100 mx-auto max-w-6x py-20 px-12 lg:px-24 shadow-xl mb-24">
      <h1
        className="font-bold text-center pb-10 lg:text-3xl text-white"
        id="contact-title"
      >
        Contact
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-5 md:pb-8 lg:pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="company"
              >
                Name*
              </label>

              <input
                className="w-full bg-gray-200 text-black focus:outline-none focus:border-b-2 focus:border-teal-500 border-b-2 border-transparent rounded py-3 px-4 mb-3"
                id="company"
                type="text"
                placeholder="Your name"
                name="firstname"
                onChange={handleChange}
              />

              <div>
                <span className="text-red-500 text-xs italic">
                  Please fill out this field.
                </span>
              </div>
            </div>

            <div className="md:w-1/2 px-3">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="title"
              >
                Lastname*
              </label>

              <input
                className="w-full bg-gray-200 text-black focus:outline-none focus:border-b-2 focus:border-teal-500 border-b-2 border-transparent rounded py-3 px-4 mb-3"
                id="title"
                type="text"
                placeholder="Your lastname"
                name="lastname"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="application-link"
              >
                Your email*
              </label>

              <input
                className="w-full bg-gray-200 text-black focus:outline-none focus:border-b-2 focus:border-teal-500 border-b-2 border-transparent rounded py-3 px-4 mb-3"
                id="title"
                type="text"
                placeholder="Your email"
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="application-link"
              >
                Your message*
              </label>

              <textarea
                className="w-full h-52 align-top bg-gray-200 text-black focus:outline-none focus:border-b-2 focus:border-teal-500 border-b-2 border-transparent rounded py-3 px-4 mb-3"
                id="application-link"
                type="text"
                placeholder="write a message..."
                name="message"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="location"
              >
                Location*
              </label>

              <div>
                <select
                  className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                  id="location"
                  name="country"
                  onChange={handleChange}
                  placeholder="Select a country"
                >
                  <option disabled selected hidden>
                    Select a country
                  </option>
                  {countries
                    .sort((a, b) => a.name.common.localeCompare(b.name.common))
                    .map((country, index) => (
                      <option key={index}>{country.name.common}</option>
                    ))}
                </select>
              </div>
            </div>

            <div className="md:w-1/2 px-3">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="city"
              >
                City*
              </label>

              <div>
                <input
                  className="w-full bg-gray-200 focus:outline-none focus:border-b-3 focus:border-teal-500 border-b-2 border-transparent text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                  id="city"
                  placeholder="Your city"
                  name="city"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="md:w-1/2 px-3">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="province"
              >
                Province*
              </label>

              <div>
                <input
                  className="w-full bg-gray-200 focus:outline-none focus:border-b-2 focus:border-teal-500 border-b-2 border-transparent text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                  id="province"
                  placeholder="Your province"
                  name="province"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 md:flex mt-4">
            <div className="md:w-full px-3 text-center">
              <button
                className="md:w-full lg:w-2/3 middle none hover:bg-gradient-to-r from-teal-400 to-teal-800 center mr-3 lg:mr-0 duration-500 rounded-lg border hover:border-teal-800 py-3 px-6 font-sans text-xs font-bold uppercase hover:text-teal-800 transition-colors  text-white hover:opacity-100 focus:ring focus:ring-teal-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-teal-400"
                data-ripple-dark="true"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="max-h-5 h-5">
            {showDiv && <div className="flex justify-center items-center mx-auto h-10 md:h-20 lg:h-20 max-w-4xl">{alertVisible ? <AlertSuccess message={alertMessage} handleShowDiv={handleShowDiv} /> : <AlertError message={alertMessage} handleShowDiv={handleShowDiv} />}</div>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
