import Title from "./Title";
import { useState } from "react";
import { ReactComponent as PenIcon } from "../images/pen.svg";
import { ReactComponent as RerunIcon } from "../images/rerun.svg";

const Step2 = ({ formData, onSubmit }) => {
  const [confirmationCode, setConfirmationCode] = useState("");

  const phoneNumber = formData.phoneNumber;
  const regionNumber = formData.regionCode;
  const combinedNumber = `${regionNumber} ${phoneNumber}`;

  const handleSubmitForm = () => {
    if (confirmationCode === "1234") {
      onSubmit(formData); 
      console.log(formData);
    } else {
      alert("Confirmation code is incorrect!");
    }
  };

  return (
    <div className="flex flex-col gap-[16px] w-[456px]">
      <Title></Title>
      <div className="mt-4 border rounded flex justify-between px-5 py-5">
        <div>
          <p className="text-[18px] font-normal leading-[28px] text-left">
            {combinedNumber}
          </p>
          <p className="text-[13px] font-normal leading-[18px] text-left">
            Number not confirmed yet
          </p>
        </div>
        <div className="flex items-end">
          <PenIcon />
        </div>
      </div>

      <div className="mt-4 border rounded px-5 py-5 flex justify-between items-center">
        <div>
          <p className="text-[13px] font-normal leading-[18px] text-left">
            Confirmation code
          </p>
          <input
            type="text"
            placeholder="- - - -"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
            className="border-t-0 border-l-0 border-r-0 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-blue-500"
          />
          <p className=" text-[12px] font-normal leading-[16px] text-left">
            Confirm phone number with code from sms message
          </p>
        </div>
        <div className="flex gap-[8px]">
          <p className=" text-[16px] font-medium leading-[24px] text-center">
            Send again
          </p>
          <RerunIcon />
        </div>
      </div>

      <button
        type="submit" 
        onClick={handleSubmitForm} 
        className="mt-4 w-[137px] h-[48px] px-[24px] py-0 gap-[8px] rounded-tl-[4px] rounded-br-none rounded-tr-none rounded-bl-none border-[1px] opacity-[0px]"
      >
        Confirm
      </button>
    </div>
  );
};

export default Step2;
