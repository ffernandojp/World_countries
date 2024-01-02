const Pagination = ({ total }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-800">
      <div className="container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
        <div className="-mx-2">
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:text-white dark:bg-gray-700"
          >
            1
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            2
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            3
          </a>
        </div>

        <div className="text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-100">
            1 - 25
          </span>{" "}
          of {total} countries
        </div>
      </div>
    </div>
  );
};

export default Pagination;
