import React from "react";
import robotImage from "../assets/robotImage.png";
import createAccount from "../assets/createAccount.gif";
import jobDescription from "../assets/jobDescription.gif";
import generateEmail from "../assets/generateEmail.gif";
import sendEmail from "../assets/sendEmail.gif";

const StepsDisplay = () => {
  const steps = [
  {
    title: "Create Your Account",
    description: "Sign up and fill in your profile details like skills and experience."
  },
  {
    title: "Add HR & Job Info",
    description: "Enter the HR's email and paste the job description or role details."
  },
  {
    title: "Generate Email",
    description: "Get a personalized email using AI and make quick edits if needed."
  },
  {
    title: "Send via Gmail",
    description: "Send the email directly using your Gmail with one secure click."
  }
];

  return (
    <div className="top-0 left-0 z-[-2] h-[38rem] w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex justify-center mb-6">
      <div className="flex w-full px-14">
        <div className="w-1/3">
          <img className="w-full ml-9 mt-12" src={robotImage} alt="" />
        </div>
        <div className="w-2/3 text-zinc-200 pl-4">
           <div className="w-5/6 bg-slate-700 h-1/5 rounded-full justify-center text-start flex flex-col mb-7 pl-10 hover:scale-105 hover:bg-slate-600 transition-all">
            <div className="flex">
              <div>
                  <p className="font-bold text-2xl text-yellow-500">{steps[0].title}</p>
                  <p className="text-lg">{steps[0].description}</p>
              </div>
              <div className="ml-24"><img className="w-16" src={createAccount} alt="" /></div>
            </div>
           </div>

           <div className="w-5/6 bg-slate-700 h-1/5 rounded-full justify-center text-start flex flex-col mb-7 ml-28 pl-10 hover:scale-105 hover:bg-slate-600 transition-all">
             <div className="flex">
              <div>
                <p className="font-bold text-2xl text-yellow-500">{steps[1].title}</p>
                <p className="text-lg">{steps[1].description}</p>
              </div>
              <div className="ml-24"><img className="w-16" src={jobDescription} alt="" /></div>
             </div>
           </div>

           <div className="w-5/6 bg-slate-700 h-1/5 rounded-full justify-center text-start flex flex-col mb-7 pl-10 hover:scale-105 hover:bg-slate-600 transition-all">
            <div className="flex">
              <div>
                  <p className="font-bold text-2xl text-yellow-500">{steps[2].title}</p>
                  <p className="text-lg">{steps[2].description}</p>
              </div>
              <div className="ml-24"><img className="w-16" src={generateEmail} alt="" /></div>
            </div>
           </div>

           <div className="w-5/6 bg-slate-700 h-1/5 rounded-full justify-center text-start flex flex-col mb-7 ml-28 pl-10 hover:scale-105 hover:bg-slate-600 transition-all">
             <div className="flex">
              <div>
                <p className="font-bold text-2xl text-yellow-500">{steps[3].title}</p>
                <p className="text-lg">{steps[3].description}</p>
              </div>
              <div className="ml-24"><img className="w-16" src={sendEmail} alt="" /></div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StepsDisplay;
