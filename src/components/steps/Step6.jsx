import { useState } from "react";
import TitleProfileInfo from "./TitleProfileInfo";
import Axios from "axios";
import { useEffect } from "react";
import { ReactComponent as CorrectWhiteIcon } from "../images/correct_white.svg";

const Step6 = ({ formData, onSubmit }) => {
  const [address, setAddress] = useState(" ");
  const [deliveryCountry, setDeliveryCountry] = useState(" ");
  const [deliveryTown, setDeliveryTown] = useState(" ");
  const [zipCode, setZipCode] = useState(" ");
  const [optional, setOptional] = useState(" ");
  const [countries, setCountries] = useState([]);
  const [Cities, setCities] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

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
      address,
      deliveryCountry,
      deliveryTown,
      zipCode,
      optional,
    };
    onSubmit(updatedFormData);
    console.log(updatedFormData);
  };
  return (
    <div>
      <TitleProfileInfo />
      <div>
        <div className="">
          <form onSubmit={handleSubmitForm} className="w-full">
            <div className="mt-4 border rounded px-[32px] py-[32px] flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[2px]">
                <p className="text-[20px] font-semibold leading-[28px] text-left">
                  Delivery address{" "}
                </p>
                <p className=" text-[12px] font-light leading-[16px] text-left">
                  Used for shipping orders{" "}
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="text-[14px] font-normal leading-[20px] text-left">
                  Address
                </p>
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border-t-0 border-r-0 border-l-0 border-b-1 focus:outline-none w-full "
                />
              </div>

              <div className="flex justify-between gap-[8px] w-full">
                <div style={{ flex: 1 }}>
                  <p className="text-[14px] font-normal leading-[20px] text-left">
                    Country{" "}
                  </p>
                  <select
                    onChange={(e) => {
                      setDeliveryCountry(e.target.value);
                      fetchCities(e.target.value);
                    }}
                    className="border border-t-0 border-l-0 border-r-0 border-b-1 border-[solid] focus:outline-none w-full "
                  >
                    <option selected hidden disabled>
                      Select your country
                    </option>
                    {countries.map((country) => (
                      <option
                        key={`${country.country}`}
                        value={country.country}
                      >
                        {country.country}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <p className="text-[14px] font-normal leading-[20px] text-left">
                    Town{" "}
                  </p>
                  <select
                    onChange={(e) => setDeliveryTown(e.target.value)}
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

              <div className="flex flex-col gap-[8px]">
                <p className="text-[14px] font-normal leading-[20px] text-left">
                  Zip Code
                </p>
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="border-t-0 border-r-0 border-l-0 border-b-1 focus:outline-none w-full "
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <p className="text-[14px] font-normal leading-[20px] text-left">
                  Optional{" "}
                </p>
                <input
                  type="text"
                  placeholder="Optional"
                  value={optional}
                  onChange={(e) => setOptional(e.target.value)}
                  className="border-t-0 border-r-0 border-l-0 border-b-1 focus:outline-none w-full "
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#007AFF] text-[white] mt-4 w-[137px] h-[48px] px-[24px] py-0 gap-[8px] rounded-tl-[4px] rounded-br-none rounded-tr-none rounded-bl-none border-[1px] opacity-[0px] font-[Poppins] text-[16px] font-medium leading-[24px] text-center relative"
            >
              <div className="flex items-center justify-center">
                <CorrectWhiteIcon className="mr-2" />{" "}
                Save
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step6;
