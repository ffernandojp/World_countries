export const AlertError = ({ message, handleShowDiv }) => {
  return (
    <div
      className="font-regular relative block w-full rounded-lg bg-gradient-to-tr bg-red-500 from-red-600 to-red-400 px-4 py-4 text-base text-white"
      data-dismissible="alert"
    >
      <div className="absolute top-4 left-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="ml-8 mr-12 text-sm md:text-md lg:text-md">
        {/* Sorry, something went wrong please try again. */}
        Error: {message}
      </div>
      <div
        className="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
        data-dismissible-target="alert"
      >
        <div role="button" className="w-max">
          <button
            className="select-none rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
            onClick={handleShowDiv}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const AlertSuccess = ({ message, handleShowDiv }) => {
  return (
    <div
      className="font-regular relative block w-full max-w-screen-md rounded-lg bg-green-500 px-4 py-4 text-base text-white mt-6 lg:mt-0 md:mt-0"
      data-dismissible="alert"
    >
      <div className="absolute top-4 left-4">
    
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="mt-px h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            ></path>
          </svg>
      </div>
      <div className="ml-8 mr-12">
        <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
          Success
        </h5>
        <p className="mt-2 block font-sans text-base font-normal leading-relaxed text-white antialiased">
          {/* I don't know what that word means. I'm happy. But success, that goes
            back to what in somebody's eyes success means. For me, success is
            inner peace. That's a good day for me. */}
          {message}
        </p>
      </div>
      <div
        data-dismissible-target="alert"
        data-ripple-dark="true"
        className="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
      >
        <button role="button" className="w-max rounded-lg p-1" onClick={handleShowDiv}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
