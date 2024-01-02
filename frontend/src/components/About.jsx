import { BiSolidChevronRightCircle } from "react-icons/bi";
import { CiCircleChevRight } from "react-icons/ci";

const About = () => {
  return (
    <div>
      <div className="bg-white pt-20 py-16">
        <h1
          className="font-bold text-center pb-10 lg:text-3xl text-white"
          id="about-title"
        >
          About
        </h1>
        <div className="container pb-20 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                className="rounded-lg shadow-xl shadow-teal-700/80"
                src="https://source.unsplash.com/640x480/?flag"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
                Flags of the World's Countries
              </h2>
              <p className="mt-6 text-gray-600">
                Flags are national symbols that represent a country and its
                people. They are used to show belonging to a community,
                organization, or nation, and to signify shared beliefs, goals,
                and rules. Here are some interesting facts about flags:
              </p>
              <p className="mt-4 text-gray-600 flex items-center">
                <CiCircleChevRight className="h-5 w-5 text-teal-600 hover:text-white duration-500 transition-colors hover:rotate-12" />
                <span className="ml-2">
                  The first flags were flown in the 18th century to communicate
                  messages to others.
                </span>
              </p>
              <p className="mt-4 text-gray-600 flex items-center">
                <CiCircleChevRight className="h-8 w-8 text-teal-600 hover:text-white duration-500 transition-colors hover:rotate-12" />
                <span className="ml-2">
                  The word "flag" finds its origin in the Saxon word "flaken",
                  which describes something flying, floating, or flapping in the
                  wind.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100 p-6">
        <div className="container  flex flex-col-reverse mx-auto lg:flex-row rounded-lg">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-lg sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-teal-500 dark:text-white">
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="text-lg font-bold leadi">
                  There are approximately 250 countries in the world
                </p>
                <p className="leadi">
                  There are 195 countries that are member states of the United
                  Nations and 2 countries that are non-member observer states:
                  Holy See and the State of Palestine.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="text-lg font-bold leadi">
                  Largest and smaller countries in the world
                </p>
                <p className="leadi">
                  The largest country in the world by land area is Russia,
                  covering about 17.1 million square kilometers. The smallest
                  country in the world by land area is Vatican City, with an
                  area of just 0.44 square kilometers.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="text-lg font-bold leadi">
                  Most and least populated countries in the world
                </p>
                <p className="leadi text-base">
                  The most populous country in the world is China, with a
                  population of over 1.4 billion people. The least populous
                  country in the world is Vatican City, with a population of
                  around 800 people.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                // src="https://images.unsplash.com/photo-1503401639559-b16332601594?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY5OTUwMzE2MA&ixlib=rb-4.0.3&q=80&w=640"
                src="https://source.unsplash.com/640x480/?landscape"
                alt=""
                className="rounded-lg shadow-2xl shadow-teal-700/80 lg:h-96 lg:w-full dark:bg-gray-500 aspect-video sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
