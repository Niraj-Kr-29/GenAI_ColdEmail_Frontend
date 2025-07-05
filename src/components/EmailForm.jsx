import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit, FaReply } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { storeLogout } from "../store/authSlice";
import { toast } from "react-toastify";

const EmailForm = () => {
  const user = useSelector((state) => state.auth.userData);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const generateEmail = async () => {
    const to = getValues("to");
    const description = getValues("description");
    setValue("subject", "Generating subject...");
    setValue("emailBody", "Generating Email Body...");
    const geminiResponse = await fetch("https://genai-coldemail.onrender.com/email/generate", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: to,
        description: description,
      }),
    })

    const result = await geminiResponse.json()
    if(result){
      setValue("subject", result.subject);
      setValue("emailBody", result.body);
    }
  };

  // useEffect(()=>{
  //   if(geminiResponse){
  //     setValue("subject",geminiResponse.subject)
  //     setValue("emailBody",geminiResponse.body)
  //   }
  // },[geminiResponse])

  const submit = async (data) => {
    const response = await fetch("https://genai-coldemail.onrender.com/email/send", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: data.to,
        subject: data.subject,
        body: data.emailBody,
      }),
    })

    const result = await response.json()
    if(result.status == "success"){
      console.log(result)
      toast.success("Email send successfully !")
    }
    else{
      console.log(result)
      toast.error("Error while sending the email")
    }
  };

  const logout = async()=>{
    const response = await fetch("https://genai-coldemail.onrender.com/auth/logout",{
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response)=>{
      if(response.status == 200){
        dispatch(storeLogout())
        navigate("/")
      }
    })
    .catch((error)=>{
      console.error(error)
    })
  }

  const { register, handleSubmit, control, getValues, setValue } = useForm();
  return (
    <div className="flex w-screen font-lansui">
      <div className="w-1/4 bg-slate-900 p-4">
        <div
          className="flex h-16 w-full items-center justify-center bg-purple-600 rounded-full relative z-50 cursor-pointer"
        >
          <img
            src={user.profilePicture}
            className="w-10 rounded-full mr-4 border-white border-2"
            alt=""
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <div className="text-xl font-bold text-white">
            Hi {user.name || "User"}👋 !
          </div>
        </div>
        {menuOpen && <div className="w-full h-24 flex flex-col justify-center items-center mt-5 bg-indigo-950 rounded-xl text-slate-50 text-xl gap-2"><button className="flex gap-3 hover:scale-110 hover:text-purple-600 transition-all" onClick={logout}>Logout <FaReply className="mt-1"/></button><button className="flex gap-3 hover:scale-110 hover:text-purple-600 transition-all" onClick={()=>navigate("/profileCompletePage")}>Edit Profile <FaRegEdit className="mt-1"/></button></div>}
      </div>
      <div className="w-full p-5">
        <div className="text-4xl font-bold text-white w-2/3 text-center mt-4 mb-6">
          START SENDING EMAILS !
        </div>

        <div className="w-2/3 bg-slate-900 flex justify-center align-middle p-3 rounded-xl">
          <form onSubmit={handleSubmit(submit)} className="flex w-11/12">
            <div className="w-full px-2 pb-4">
              <Input
                label="To :"
                placeholder="To"
                className="mb-4"
                {...register("to", { required: true })}
              />
              <Input
                label="Job Description :"
                placeholder="Job Description"
                className="mb-4"
                {...register("description", { required: true })}
              />
              <button
                onClick={generateEmail}
                className="w-full bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-900"
              >
                Generate
              </button>
              <Input
                label="Subject :"
                placeholder="Subject"
                className="mb-4"
                {...register("subject", { required: true })}
              />
              <textarea
                {...register("emailBody")}
                placeholder="Email Body"
                onChange={(e) => setValue("emailBody",e.target.value)}
                className="w-full h-64 p-4 text-black bg-white rounded-md resize-none 
                        whitespace-pre-wrap overflow-y-auto overflow-x-hidden"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-900"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
