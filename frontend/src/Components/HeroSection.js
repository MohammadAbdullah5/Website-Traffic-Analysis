import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate("/analysis"); // Navigate to the '/analysis' route
  };
  return (
    <>
      <div class="dark:bg-gray-800">
        <div class="dark:bg-transparent">
          <div class="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 class="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
                Let's not stress for
                <span class="text-violet-800 dark:text-blue-500">
                  {" "}
                  Website{" "}
                </span>
                Traffic.
              </h1>
              <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
                Drive actionable insights for your users with our comprehensive
                website traffic analysis platform!!
              </p>
            </div>
            <div class="flex w-11/12 md:w-8/12 xl:w-6/12">
              <div class="flex rounded-md w-full">
                <input
                  type="text"
                  name="q"
                  class="w-full p-3 rounded-md rounded-r-none border border-2 border-gray-300 placeholder-current dark:bg-gray-500  dark:text-gray-300 dark:border-none "
                  placeholder="Enter URL"
                />
                <button
                  class="inline-flex items-center gap-2 bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md"
                 
                >
                  <Link to={"/analysis"}> <span>Find</span> </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
