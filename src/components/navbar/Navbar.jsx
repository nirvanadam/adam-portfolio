import React, { useContext, useEffect } from "react";
import { Link } from "react-router";
import { AppContext } from "../../context/AppContext";

function Navbar() {
  const { showMenu, setShowMenu, toggleShowMenu } = useContext(AppContext);

  useEffect(() => {
    setShowMenu(false);
  }, []);

  showMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div>
      <nav
        className={`${showMenu ? "z-[999]" : "-z-10 delay-[1500ms]"} fixed flex h-screen w-full`}
      >
        <span
          className={`${showMenu ? "translate-y-0" : "-translate-y-full delay-[900ms]"} z-[999] h-screen w-1/3 bg-background-secondary transition-all duration-300`}
        />
        <span
          className={`${showMenu ? "translate-y-0 delay-300" : "translate-y-full delay-[600ms]"} z-[999] h-screen w-1/3 bg-background-secondary transition-all duration-300`}
        />
        <span
          className={`${showMenu ? "translate-y-0 delay-[600ms]" : "-translate-y-full delay-300"} z-[999] h-screen w-1/3 bg-background-secondary transition-all duration-300`}
        />

        <div className="absolute left-1/2 top-1/2 z-[999] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-10 uppercase text-textColor-primary">
          <Link
            to="/"
            className={`${showMenu ? "translate-x-0 delay-[900ms]" : "-translate-x-[300%] delay-0 lg:-translate-x-[500%] xl:-translate-x-[600%]"} group relative flex flex-col items-center overflow-hidden text-[10vw] font-medium transition-all duration-300 sm:text-[8vw] lg:text-[6vw] xl:text-[4vw]`}
          >
            <div className="flex gap-5 transition-all duration-300 group-hover:gap-3">
              <span className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                [
              </span>
              <h1 className="transition-all duration-300 group-hover:-translate-y-full">
                Home
              </h1>
              <span className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                ]
              </span>
            </div>

            <h1 className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">
              Home
            </h1>
          </Link>

          <Link
            to="/about"
            className={`${showMenu ? "translate-x-0 delay-[900ms]" : "translate-x-[300%] delay-0 lg:translate-x-[500%] xl:translate-x-[600%]"} group relative flex flex-col items-center overflow-hidden text-[10vw] font-medium transition-all duration-300 sm:text-[8vw] lg:text-[6vw] xl:text-[4vw]`}
          >
            <div className="flex gap-5 transition-all duration-300 group-hover:gap-3">
              <span className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                [
              </span>
              <h1 className="transition-all duration-300 group-hover:-translate-y-full">
                About
              </h1>
              <span className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                ]
              </span>
            </div>

            <h1 className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">
              About
            </h1>
          </Link>

          <Link
            to="/experience"
            className={`${showMenu ? "translate-x-0 delay-[900ms]" : "-translate-x-[300%] delay-0 lg:-translate-x-[500%] xl:-translate-x-[600%]"} group relative flex flex-col items-center overflow-hidden text-[10vw] font-medium transition-all duration-300 sm:text-[8vw] lg:text-[6vw] xl:text-[4vw]`}
          >
            <div className="flex gap-5 transition-all duration-300 group-hover:gap-3">
              <span className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                [
              </span>
              <h1 className="transition-all duration-300 group-hover:-translate-y-full">
                Experience
              </h1>
              <span className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                ]
              </span>
            </div>

            <h1 className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">
              Experience
            </h1>
          </Link>

          <Link
            to="/contact"
            className={`${showMenu ? "translate-x-0 delay-[900ms]" : "translate-x-[300%] delay-0 lg:translate-x-[500%] xl:translate-x-[600%]"} group relative flex flex-col items-center overflow-hidden text-[10vw] font-medium transition-all duration-300 sm:text-[8vw] lg:text-[6vw] xl:text-[4vw]`}
          >
            <div className="flex gap-5 transition-all duration-300 group-hover:gap-3">
              <span className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                [
              </span>
              <h1 className="transition-all duration-300 group-hover:-translate-y-full">
                Contact
              </h1>
              <span className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                ]
              </span>
            </div>

            <h1 className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">
              Contact
            </h1>
          </Link>
        </div>
      </nav>

      <header
        className={`flex h-[8vh] w-full items-center justify-between bg-black px-6 text-textColor-primary md:px-10 lg:h-[10vh] xl:px-20 2xl:px-28`}
      >
        <Link
          to="/"
          className={`z-[999] text-lg font-medium uppercase text-textColor-primary transition 2xl:text-2xl`}
        >
          Adam<span className="text-textColor-accent">.</span>
        </Link>

        <button
          type="button"
          onClick={toggleShowMenu}
          className={`z-[999] flex h-4 w-9 flex-col justify-between`}
        >
          <span
            className={`${showMenu ? "w-full translate-y-[10px] rotate-[45deg]" : ""} h-[2px] w-1/2 bg-white transition-all duration-[600ms]`}
          ></span>
          <span
            className={`${showMenu ? "scale-0" : "scale-100"} h-[2px] w-full bg-white transition-all duration-[600ms]`}
          ></span>
          <span
            className={`${showMenu ? "w-full -translate-y-[5px] -rotate-[45deg]" : ""} h-[2px] w-1/2 self-end bg-white transition-all duration-[600ms]`}
          ></span>
        </button>
      </header>
    </div>
  );
}

export default Navbar;
