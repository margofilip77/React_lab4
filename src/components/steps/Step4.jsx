import TitleProfileInfo from "./TitleProfileInfo";
import { useState, useEffect } from "react";
import Axios from "axios";
import { ReactComponent as CorrectIcon } from "../images/correct.svg";
import { ReactComponent as NextIcon } from "../images/next.svg";

const Step4 = ({ formData, onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const [town, setTown] = useState("");
  const [itin, setItin] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [countries, setCountries] = useState([]);
  const [Cities, setCities] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await Axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );
      setCountries(response.data.data);
    } catch (error) {
      console.error("Помилка завантаження країн:", error);
    }
  };

  const fetchCities = (selectedCountry) => {
    const selectedCities = countries.find((c) => c.country === selectedCountry);
    if (selectedCities) {
      setCities(selectedCities.cities);
    } else {
      setCities([]);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      firstName,
      secondName,
      date,
      country,
      town,
      itin,
    };
    onSubmit(updatedFormData);
    console.log(updatedFormData);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="flex flex-col gap-[32px]">
      <TitleProfileInfo />
      <div className="flex gap-4">
        <input
          checked={isChecked}
          onChange={handleCheckboxChange}
          type="checkbox"
          id="terms"
          name="terms"
          className="w-[16px] h-[16px] pl-0 pr-0 py-[4px] gap-0 rounded-tl-[6px] rounded-br-none rounded-tr-none rounded-bl-none opacity-[0px]"
        />
        <p className="text-[16px] font-normal leading-[24px] text-left">
          I agree with
        </p>
        <a
          href="#"
          className="text-blue-500 text-[16px] font-medium leading-[24px] text-left"
        >
          Terms of use
        </a>
      </div>
      <div className="">
        <form onSubmit={handleSubmitForm} className="w-full">
          <div className="mt-4 border rounded px-[32px] py-[32px] flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[2px]">
              <p className="text-[20px] font-semibold leading-[28px] text-left">
                Personal data
              </p>
              <p className=" text-[12px] font-light leading-[16px] text-left">
                Specify exactly as in your passport
              </p>
            </div>
            <div className="w-full">
              <p className="text-[14px] font-normal leading-[20px] text-left">
                First Name
              </p>
              <input
                type="name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border  border-t-0 border-l-0 border-r-0 border-b-1 focus:outline-none w-full "
              />
            </div>

            <div>
              <p className="text-[14px] font-normal leading-[20px] text-left">
                Second name{" "}
              </p>
              <input
                type="name"
                placeholder="Second Name"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                className="border border-t-0 border-l-0 border-r-0 border-b-1 focus:outline-none w-full "
              />
            </div>

            <div className="flex justify-between gap-[8px] w-full">
              <div style={{ flex: 1 }}>
                <p className="text-[14px] font-normal leading-[20px] text-left">
                  Date of Birth{" "}
                </p>
                <input
                  type="date"
                  placeholder=""
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border border-t-0 border-l-0 border-r-0 border-b-1 focus:outline-none w-full "
                />
              </div>
              <div style={{ flex: 1 }}>
                <p className="text-[14px] font-normal leading-[20px] text-left">
                  Country{" "}
                </p>
                <select
                  onChange={(e) => {
                    setCountry(e.target.value);
                    fetchCities(e.target.value);
                  }}
                  className="border border-t-0 border-l-0 border-r-0 border-b-1 border-[solid] focus:outline-none w-full "
                >
                  <option selected hidden disabled>
                    Select your country
                  </option>
                  {countries.map((country) => (
                    <option key={`${country.country}`} value={country.country}>
                      {country.country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <p className="text-[14px] font-normal leading-[20px] text-left">
                Town{" "}
              </p>
              <select
                onChange={(e) => setTown(e.target.value)}
                className="border border-t-0 border-l-0 border-r-0 border-b-1 focus:outline-none w-full "
              >
                <option selected hidden disabled>
                  Select your city
                </option>
                {Cities.map((city) => (
                  <option key={`${city}`} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-[32px] border rounded flex flex-col px-[16px] py-[16px] gap-[4px]">
            <input
              type="text"
              placeholder="ITIN"
              value={itin}
              onChange={(e) => setItin(e.target.value)}
              className="border border-t-0 border-l-0 border-r-0 border-b-1 focus:outline-none w-full "
            />{" "}
            <div>
              <div className="flex justify-start items-center gap-[4px]">
                <CorrectIcon className="" />
                <p className="text-[13px] font-normal leading-[18px] text-left">
                  Your ITIN
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isChecked}
            className={`mt-4 w-[137px] h-[48px] px-[24px] py-0 gap-[8px] rounded-tl-[4px] rounded-br-none rounded-tr-none rounded-bl-none border-[1px] opacity-[0px] font-[Poppins] text-[16px] font-medium leading-[24px] text-center relative ${
              !isChecked ? "cursor-not-allowed" : ""
            }`}
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

export default Step4;
