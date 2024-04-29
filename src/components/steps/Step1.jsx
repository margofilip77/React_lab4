import React from "react";
import Title from "./Title";
import { useForm } from "react-hook-form";
import { ReactComponent as CloseIcon } from "../images/close.svg";
import { ReactComponent as LockIcon } from "../images/lock.svg";

const Step1 = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const regionCodes = [
    { code: "+1",},
    { code: "+44",},
    { code: "+61"},
  ];

  const handleSubmitForm = (data) => {
    onSubmit(data);
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <Title />
      <div className="mt-4 w-[456px] h-[68px] pl-0 pr-0 py-[16px] gap-[16px] rounded-tl-[8px] rounded-br-none rounded-tr-none rounded-bl-none opacity-[0px] flex justify-center bg-[#F0F2F4] ">
        <LockIcon />
        <p className="w-[344px] gap-0 opacity-[0px] text-[13px] font-normal leading-[18px] text-left">
          We take privacy issues seriously. You can be sure that your personal
          data is securely protected.
        </p>
        <CloseIcon />
      </div>

      <div className="">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="border rounded mt-4 p-[32px] w-[456px]">
            <p className="text-[14px] font-normal leading-[20px] text-left">
              Select your country code
            </p>
            <div className="flex justify-start gap-[6px]">
              <select
                {...register("regionCode")}
                className="opacity-[0px] text-[13px] font-normal leading-[18px] text-left border-b-1 rounded w-[80px] h-[44px] mt-[11px]"
              >
                {regionCodes.map((region) => (
                  <option key={region.code} value={region.code}>
                    {`(${region.code})`}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="Enter your phone number"
                {...register("phoneNumber")}
                className="w-[344px] gap-0 opacity-[0px] text-[13px] font-normal leading-[18px] text-left border-t-0 border-l-0 border-r-0 border-b-1 focus:outline-none"
              />
            </div>
            
          </div>
          <button
            type="submit"
            className="mt-4 w-[137px] h-[48px] px-[24px] py-0 gap-[8px] rounded-tl-[4px] rounded-br-none rounded-tr-none rounded-bl-none border-[1px] opacity-[0px]"
          >
            Send Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step1;
