import React, { useState } from "react";
import Title from "./Title";
import { ReactComponent as CorrectIcon } from "../images/correct.svg";

const Step3 = ({ formData, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const phoneNumber = formData.phoneNumber;
  const regionNumber = formData.regionCode;
  const combinedNumber = `${regionNumber} ${phoneNumber}`;

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData, email, password, combinedNumber };
    onSubmit(updatedFormData);
    console.log(updatedFormData);
  };

  return (
    <div className="flex flex-col gap-[16px] w-[456px]">
      <Title />
      <div className="mt-4 border rounded flex justify-between px-[16px] py-[16px]">
        <div>
          <p className="text-[18px] font-normal leading-[28px] text-left">
            {combinedNumber}
          </p>
          <div className="flex justify-start items-center gap-[4px]">
            <CorrectIcon className="" />
            <p className="text-[13px] font-normal leading-[18px] text-left">
              Number confirmed
            </p>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmitForm} className="w-full">
          <div className="mt-4 border rounded px-[16px] py-[16px] flex flex-col gap-[16px]">
            <p className="text-[14px] font-normal leading-[20px] text-left">
              Enter your email
            </p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border  border-t-0 border-l-0 border-r-0 border-b-1 focus:outline-none "
            />
            <p className="text-[14px] font-normal leading-[20px] text-left">
              Enter your password
            </p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-t-0 border-l-0 border-r-0 border-b-1 focus:outline-none "
            />
          </div>

          <input type="hidden" name="combinedNumber" value={combinedNumber} />

          <button
            type="submit"
            className="mt-4 w-[169px] h-[48px] border rounded bg-[#007AFF] px-[24px] py-0 opacity-[0px] text-[16px] font-medium leading-[24px] text-center text-[white]"
          >
            Register now{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step3;
