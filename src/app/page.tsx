import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white 100 items-center justify-center p-6">
        <div className="text-center">
          <h1 className=" text-5xl font-bold  mb-6">
            Welcome to Dashboard App
          </h1>
          <p className="text-gray-600 mb-8">
            Manage your tasks, track analytics, and stay organized with our
            powerful dashboard
          </p>
          <Link
            href={"/dashboard"}
            className=" border px-8 py-3 rounded-xl active:bg-white active:text-black font-bold"
          >
            Go To Dashboard
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
