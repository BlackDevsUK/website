import HEAD from "next/head";
import { Navbar } from "../components/navbar";

function HomePage() {
  return (
    <>
      <HEAD>
        <title>Black Devs UK</title>
        <link rel="icon" href="logo.svg" />
      </HEAD>
      <div className="bg-white overflow-hidden">
        <div className="mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <Navbar />
          </div>

          <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Black Devs UK</span>
                <span className="block text-indigo-600 xl:inline">
                  {" "}
                  Under Construction
                </span>
                <span className="block font-light text-2xl">
                  {" "}
                  Thanks for stopping by, we're still working hard on our new
                  website.{" "}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We're building an inspirational community for Black software
                developers in the UK to improve personal development, strengthen
                peer networks and accelerate career progression. We're still
                constructing our new site, but you can join our community today
                to connect with a growing network of your peers.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://mailchi.mp/8645964a7985/sign-up-page"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Join Us
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="heylagostechie-IgUR1iX0mqM-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
