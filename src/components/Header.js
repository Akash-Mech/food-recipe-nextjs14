"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <header className="flex flex-wrap items-center justify-between z-10 fixed bg-white w-full h-20">
      <div
        id="logo"
        className="lg:text-xl p-2 mr-4 inline-flex items-center  font-bold"
      >
        <Link href="/" className="text-3xl text-brand-color">
          Foody
        </Link>
      </div>
      {/* Header-mobile-view */}
      <div className="flex px-4">
        {active ? (
          <button
            className=" inline-flex  text-2xl rounded md:hidden     outline-none "
            onClick={handleClick}
          >
            <AiOutlineClose />
          </button>
        ) : (
          <button
            className=" inline-flex   text-2xl rounded md:hidden     outline-none"
            onClick={handleClick}
          >
            <AiOutlineMenu />
          </button>
        )}
      </div>

      <div className="w-full flex-grow md:inline-flex md:flex-grow md:w-auto">
        <div
          className={
            "md:inline-flex md:flex-row md:ml-auto flex flex-col  " +
            (active ? "bg-white md:bg-transparent" : "hidden")
          }
        >
          <Link href="/" className="nav-menu" onClick={handleClick}>
            Home
          </Link>

          <Link href="/recipe-list" className="nav-menu" onClick={handleClick}>
            Recipe
          </Link>
          <Link href="/contact" className="nav-menu" onClick={handleClick}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
