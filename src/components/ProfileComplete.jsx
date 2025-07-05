import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "./Input";
import { useForm } from "react-hook-form";
import profileSectionImage from "../assets/profileSectionImage.png";
import { storeLogin } from "../store/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfileComplete = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData);

  const {
    name = "",
    email = "",
    college = "",
    education = "",
    yearOfExp = "",
    linkedInUrl = "",
    resumeUrl = "",
    skills = [],
  } = userData || {};

  const { register, handleSubmit, setValue, getValues, control } = useForm();

  useEffect(() => {
    setValue("name", name);
    setValue("email", email);
    setValue("college", college);
    setValue("education", education);
    setValue("yearOfExp", yearOfExp);
    setValue("linkedInUrl", linkedInUrl);
    setValue("resumeUrl", resumeUrl);
    setValue("skills", skills);
  }, [name, email, college, education, yearOfExp, linkedInUrl, resumeUrl, skills]);

  const submit = async (data) => {
      const skills = data.skills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0)
      
      console.log("Cleaned Skills Array :", skills)
      data.skills = skills

      const response = await fetch("https://genai-coldemail.onrender.com/user/update_profile", {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: data.name,
            college: data.college,
            education: data.education,
            yearOfExp: data.yearOfExp,
            linkedInUrl: data.linkedInUrl,
            resumeUrl: data.resumeUrl,
            skills: data.skills
          }),
      })
      .then(async(response) => {
        const data = await response.json()
        if(response.status == 200){
          toast.success("Userdata updated successfully ! 👤")
          console.log(data.user)
          dispatch(storeLogin(data.user))
          navigate('/primary')
        }
      })
      .catch((error) => console.error("Error updating profile",error)); 
  };

  return (
    <>
      <div className="w-screen lg:h-[150vh] h-[140vh] bg-slate-900 lg:px-44 lg:py-16 sm:px-10">
        <div className="sm:text-5xl text-3xl sm:p-0 p-6 font-bold bg-slate-900 text-slate-100 sm:mb-10">
          COMPLETE YOUR PROFILE
        </div>
        <div className="w-full lg:h-full h-[90vh] lg:flex">
          <div className="lg:w-2/3 h-full">
            <div className="w-full h-fit bg-violet-900 bg-opacity-50 rounded-3xl shadow-violet-700 shadow-xl py-10">
              <form>
                <div className="sm:px-20 px-6">
                  <Input
                    label="Full Name"
                    placeholder="Full Name"
                    className="mb-4"
                    {...register("name", { required: true })}
                  />
                  <Input
                    label="Email"
                    placeholder="Email"
                    className="mb-4"
                    {...register("email", { required: true })}
                  />
                  <Input
                    label="College"
                    placeholder="College Name"
                    className="mb-4"
                    {...register("college", { required: true })}
                  />
                  <Input
                    label="Education"
                    placeholder="Education Degree (Btech, Bsc, MCA...)"
                    className="mb-4"
                    {...register("education", { required: true })}
                  />
                  <Input
                    label="Experience"
                    placeholder="Year of Experience"
                    className="mb-4"
                    {...register("yearOfExp", { required: true })}
                  />
                  <Input
                    label="LinkedIn URL"
                    placeholder="Linked URL"
                    className="mb-4"
                    {...register("linkedInUrl", { required: true })}
                  />
                  <Input
                    label="Resume URL"
                    placeholder="Resume URL"
                    className="mb-4"
                    {...register("resumeUrl", { required: true })}
                  />
                  <Input
                    label="Skills"
                    placeholder="Enter skills separated by commas"
                    className="mb-4"
                    {...register("skills", { required: true })}
                  />
                  <button
                    type="submit"
                    onClick={handleSubmit(submit)}
                    className="w-full bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-900"
                  >
                    {college ? "Update Profile" : "Submit Profile"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:w-1/3 lg:h-full h-[40vh] p-6">
            <div className="bg-violet-900 w-full lg:h-1/3 h-full lg:mx-8 sm:mt-9 rounded-3xl">
              <p className="text-lg font-bold font-lansui px-8 pt-8 text-yellow-500 uppercase">"Fill it once. Nail every email."</p>
              <p className="text-base font-bold font-lansui px-8 pt-6 text-slate-100">
                Your one-time profile setup powers every cold email you’ll ever send. Our AI takes your details — skills, experience, resume — and crafts personalized emails tailored to each job description. No repeats, no rewrites — just smart, effective outreach on autopilot.
              </p>
            </div>
            <div className="hidden lg:inline">
              <img src={profileSectionImage} className="w-full mx-8 mt-8 rounded-3xl" alt="" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProfileComplete;
