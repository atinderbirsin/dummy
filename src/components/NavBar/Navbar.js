import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logooo.webp";

const Navbar = () => {
  return (
    <div className="bg-inherit border-solid px-32 border-zinc-200 border-b-2 py-4 ">
      <div className="flex flex-row text-base font-medium my-0 items-center justify-between px-50 mx-auto ">
        <div className="flex flex-row items-center justify-between w-11/12">
          <Link to="/">HOME</Link>
          <Link to="/">SHOP</Link>
          <Link to="/">TECHNOLOGY</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <Link to="/">
            SWEAT WIKI <i className="fa-solid fa-angle-down" />
          </Link>
          <Link to="/">BLOG</Link>
          <Link to="/">MY ACCOUNT</Link>
        </div>
        <div className="w-4">
          {/* <input
            type="text"
            name="search"
            placeholder="Search..."
            // className={`${click ? "" : "hidden"} input`}
          /> */}
          <Link
            to="/"
            // onClick={onSeachClick}
          >
            <i
              mrleft="true"
              className="fa-solid fa-magnifying-glass"
              // className={`${
              //   click ? "fa-solid fa-xmark" : "fa-solid fa-magnifying-glass"
              // }`}
            />
            {/* <i class="fa-solid fa-magnifying-glass"></i> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
