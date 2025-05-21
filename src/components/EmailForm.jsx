import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

const EmailForm = () => {

  const generateEmail = async () => {
    const to = getValues("to")
    const description = getValues("description")
    setValue("subject","Generating subject...")
    setValue("emailBody","Generating Email Body...")
    const geminiResponse = await fetch("http://localhost:3000/email/generate",{
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: to,
        description: description
      })
    })
    .then((response)=>response.json())
    .then((data)=>{
      setValue("subject",data.subject)
      setValue("emailBody",data.body)
    })
    .catch((error)=>console.error(error))
  };

  // useEffect(()=>{
  //   if(geminiResponse){
  //     setValue("subject",geminiResponse.subject)
  //     setValue("emailBody",geminiResponse.body)
  //   }
  // },[geminiResponse])

  const submit = async(data)=>{
     const response = await fetch("http://localhost:3000/email/send",{
       method: "POST",
       credentials: "include",
       headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify({
         to: data.to,
         subject: data.subject,
         body: data.emailBody
       })
     })
     .then((response)=>{
       response.json()
       if(response.status == "success"){
         alert("Email sent successfully!")
       }
     })
     .then((data)=>console.log(data))
     .catch((error)=>console.error(error))
  }

  const { register, handleSubmit, control, getValues, setValue } = useForm();
  return (
    <div className="flex w-screen">
        <div className="w-1/4 bg-slate-900">

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
            <button onClick={generateEmail} className="w-full bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-900">Generate</button>
            <Input
              label="Subject :"
              placeholder="Subject"
              className="mb-4"
              {...register("subject", { required: true })}
            />
            <textarea
              {...register("emailBody")}
              placeholder="Email Body"
              onChange={(e) => setValue(e.target.value)}
              className="w-full h-64 p-4 text-black bg-white rounded-md resize-none 
                        whitespace-pre-wrap overflow-y-auto overflow-x-hidden"
            />
            <button type="submit" onClick={handleSubmit(submit)} className="w-full bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-900">Send</button>
            
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EmailForm;
