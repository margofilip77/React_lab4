import { useState } from "react";
import TitleProfileInfo from "./TitleProfileInfo";
import { ReactComponent as EmailIcon } from "../images/email.svg";
import { ReactComponent as PhoneIcon } from "../images/phone.svg";
import { ReactComponent as SkypeIcon } from "../images/skype.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";
import { ReactComponent as PlusIcon } from "../images/plus.svg";
import { ReactComponent as NextIcon } from "../images/next.svg";

const Step5 = ({ formData, onSubmit }) => {
  const [email, setEmail] = useState(formData.email);
  const [phone, setPhone] = useState(formData.phoneNumber);
  const [region, setRegion] = useState(formData.regionCode);
  const [skype, setSkype] = useState("");
  const [facebook, setFacebook] = useState("");

  const regionCodes = [{ code: "+1" }, { code: "+44" }, { code: "+61" }];

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const combinedNumber = `${region} ${phone}`;

    const updatedFormData = {
      ...formData,
      email,
      regionCode: region,
      phoneNumber: phone,
      combinedNumber: combinedNumber,
      skype,
      facebook,
    };
    onSubmit(updatedFormData);
    console.log(updatedFormData);
  };

  return (
    <div className="flex flex-col gap-[32px]">
      <TitleProfileInfo />
      <div className="">
        <form onSubmit={handleSubmitForm} className="w-full">
          <div className="mt-4 border rounded px-[32px] py-[32px] flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[2px]">
              <p className="text-[20px] font-semibold leading-[28px] text-left">
                Contacts{" "}
              </p>
              <p className=" text-[12px] font-light leading-[16px] text-left">
                These contacts are used to inform about orders{" "}
              </p>
            </div>
            <div className=" border border-t-0 border-l-0 border-r-0 flex justify-start items-center gap-[4px]">
              <EmailIcon />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-0 focus:outline-none w-full"
              />
            </div>

            <div className=" border border-t-0 border-l-0 border-r-0 flex justify-start items-center gap-[4px]">
              <PhoneIcon />
              <select
                className="opacity-[0px] text-[13px] font-normal leading-[18px] text-left border-0 rounded w-[80px] h-[44px] mt-[11px]"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                {regionCodes.map((region) => (
                  <option key={region.code} value={region.code}>
                    {`(${region.code})`}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-0 focus:outline-none w-full "
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[20px] font-semibold leading-[28px] text-left">
                Social network{" "}
              </p>
              <p className=" text-[12px] font-light leading-[16px] text-left">
                Indicate the desired communication method{" "}
              </p>
            </div>
            <div className="flex justify-between gap-[8px] w-full">
              <div className=" border border-t-0 border-l-0 border-r-0 flex justify-start items-center gap-[8px] w-full">
                <SkypeIcon />
                <p className="text-[18px] font-normal leading-[28px] text-left">
                  Skype
                </p>
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Name"
                  value={skype}
                  onChange={(e) => setSkype(e.target.value)}
                  className=" focus:outline-none w-full border border-t-0 border-l-0 border-r-0 mb-0 "
                />
              </div>
            </div>

            <div className="flex justify-between gap-[8px] w-full">
              <div className=" border border-t-0 border-l-0 border-r-0 flex justify-start items-center gap-[8px] w-full">
                <FacebookIcon />
                <p className="text-[18px] font-normal leading-[28px] text-left">
                  Facebook
                </p>
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Name"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  className=" focus:outline-none w-full border border-t-0 border-l-0 border-r-0 mb-0 "
                />
              </div>
            </div>
            <div className="flex justify-between gap-[8px] w-full">
              <div className="  flex justify-start items-center gap-[8px] w-full">
                <PlusIcon />
                <p className="text-[16px] font-medium leading-[24px] text-center text-[#007AFF]">
                  Add More
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-[137px] h-[48px] px-[24px] py-0 gap-[8px] rounded-tl-[4px] rounded-br-none rounded-tr-none rounded-bl-none border-[1px] opacity-[0px] font-[Poppins] text-[16px] font-medium leading-[24px] text-center"
          >
            <div className="flex items-center justify-center">
              Go next
              <NextIcon className="ml-2" />{" "}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step5;
