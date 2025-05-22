import React from "react";
import FeatureCard from "./FeatureCard.jsx";
import featureIcon from "../assets/featureIcon.gif";

const KeyFeatures = () => {
 const keyFeatures = [
  {
    title: "AI-Powered Email Generation",
    description: "Effortlessly create highly personalized and professional emails with the help of AI. The system understands user details and job context to craft tailored messages that increase the chances of getting noticed and receiving a response."
  },
  {
    title: "Seamless Email Sending",
    description: "Send cold emails directly from your Gmail account using secure OAuth authentication. No need to rely on third-party email services—SendSmart ensures complete control, security, and authenticity while keeping your identity intact."
  },
  {
    title: "Dynamic Customization",
    description: "Customize every email based on job description, company details, and recipient role in real time. This dynamic prompt engineering ensures each message feels hand-written, relevant, and engaging—helping you stand out in crowded inboxes."
  },
  {
    title: "User-Friendly Dashboard",
    description: "Access a clean and intuitive dashboard where you can manage saved drafts, review sent emails, and keep track of your outreach history. Designed for simplicity and productivity, it makes the entire workflow smooth and efficient for users."
  }
];


  return (
    <div className="top-0 left-0 z-[-2] h-[45rem] w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex justify-center">
      <div className="w-[90%] h-[80%] bg-slate-900 rounded-3xl px-10">
        <div className="text-white text-4xl font-semibold py-8 font-lansui flex justify-center gap-4">
          Key Features
          <img className="w-12" src={featureIcon} />
        </div>
        <div className="flex gap-14">
          {
            keyFeatures.map((feature,index)=>{
              return <FeatureCard key={index} title={feature.title} description={feature.description}/>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
