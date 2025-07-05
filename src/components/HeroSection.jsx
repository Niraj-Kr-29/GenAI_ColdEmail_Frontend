import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import mouseScrollIcon from '../assets/mouseScrollIcon.gif'
import rightArrow from '../assets/rightArrow.gif'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HeroSection = () => {

  const userStatus = useSelector((state)=>state.auth.loginStatus)
  const navigate = useNavigate()

  const login = () => {
    window.location.href = 'https://genai-coldemail.onrender.com/auth/google';
  }

  const movePrimary = ()=>{
    navigate('/primary')
  }

  return (
    <div className="w-full h-full left-0 top-0">
      <div className="w-screen h-screen flex flex-col justify-center items-center text-white px-4 sm:px-32">
        <div className="sm:text-3xl text-xl mb-5">MAKE YOUR JOB HUNTING EASIER !!!</div>
        <div>
          <TypewriterEffect words={words} />
        </div>
        <div className="mt-10">
          <button onClick={userStatus ? movePrimary : login} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-60 hover:scale-105 transition-all">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
              {userStatus ? "Start Emailing " : <>Getting Started <img className="w-10 ml-2" src={rightArrow} alt="" /></>}
            </span>
          </button>
        </div>
        <div className="pt-10 flex gap-2">
          <div className="text-lg mt-1.5 font-lansui font-semibold">Scroll Up !</div>
          <img className="w-12" src={mouseScrollIcon} alt="mouse scroll Icon" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

const words = [
  {
    text: "STREAMLINE",
    className: "dark:text-zinc-200 font-extrabold   sm:text-7xl md:text-5xl text-3xl",
  },
  {
    text: "YOUR",
    className: "dark:text-zinc-200 font-extrabold sm:text-7xl md:text-5xl text-3xl",
  },
  {
    text: "WORKFLOW",
    className: "dark:text-zinc-200 font-extrabold sm:text-7xl md:text-5xl text-3xl",
  },
  {
    text: "WITH ",
    className: "dark:text-zinc-200 font-extrabold sm:text-7xl md:text-5xl text-3xl",
  },
  {
    text: "SENDSMART",
    className: "dark:text-violet-500 font-extrabold sm:text-7xl md:text-5xl text-3xl",
  },
  {
    text: "AI.",
    className: "font-extrabold sm:text-7xl md:text-5xl text-3xl",
  },
];
