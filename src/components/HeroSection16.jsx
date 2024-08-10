import React from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function HeroSection16() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> <span className="text-green-500 leading-snug">Department </span>Management <br/>System</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Welcome to the Department Management System, where you can efficiently manage all aspects of your department's operations.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

        //Aceternity UI button
        <Link to="/admin">
            <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Navigate to Admin ➤
                </div>
            </button>
        </Link>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <p>       <br/> <br/>                                                                    </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection16;
