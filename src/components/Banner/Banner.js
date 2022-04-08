import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="relative ">
        <div>
          <img src={bannerImg} alt="banner" className="h-[35.9rem] w-full " />
        </div>
        <div className="absolute bottom-0 flex justify-between color-white px-10 py-10 bg-bluewithopacity text-white w-full">
          <div className="w-4/5">
            <h1 className="text-3xl font-bold py-3">
              Forget Sweaty Armpits and Stained Shirts!
            </h1>
            <p className="text-base ">
              NGwear sweatproof undershirts fight odor and block underarm sweat.
              This way you are guaranteed to stay dry and fresh regardless of
              how warm it gets. And your precious shirts are guaranteed to last
              longer.
            </p>
          </div>
          <div className="w-2/12 text-center ">
            <Link
              to="/"
              color="true"
              backgroundcolor="true"
              radius="true"
              className="px-4 py-2 border-none bg-btnPrimary inline-block rounded hover:pr-10  ease-in-out duration-300 transition-all"
            >
              SHOP NOW
              <i className="fa-solid fa-chevron-right invisible " />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
