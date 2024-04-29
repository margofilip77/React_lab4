import React, { useState } from "react";
import Stepper from "./components/Stepper";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Step4 from "./components/steps/Step4";
import Step5 from "./components/steps/Step5";
import Step6 from "./components/steps/Step6";
import Finish from "./components/steps/Finish";
import "./App.css";

export default function App() {
  const [isRegistration, setisRegistration] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [totalSteps, setTotalSteps] = useState(3); // Початкова кількість кроків

  const handleFormSubmit = (data) => {
    setFormData(data); 
    setCurrentStep((prevStep) => prevStep + 1); 
  };

  const renderStep = () => {
    if (!isRegistration) {
      switch (currentStep) {
        case 0:
          return <Step1 onSubmit={handleFormSubmit} />;
        case 1:
          return <Step2 formData={formData} onSubmit={handleFormSubmit} />;
        case 2:
          return (
            <Step3
              formData={formData}
              onSubmit={(data) => {
                handleFormSubmit(data);
                setisRegistration(true);
                setCurrentStep(0);
              }}
            />
          );
        default:
          return null;
      }
    } else {
      switch (currentStep) {
        case 0:
          return <Step4 formData={formData} onSubmit={handleFormSubmit} />;
        case 1:
          return <Step5 formData={formData} onSubmit={handleFormSubmit} />;
        case 2:
          return <Step6 formData={formData} onSubmit={handleFormSubmit}/>;
        case 3:
          return <Finish/>;
        default:
          return null;
      }
    }
  };

  return (
    <div className="main-form">
      <div className="company-title">Kateryna "kapelyna" Kaplia</div>
      <Stepper currentStep={currentStep} numberOfSteps={totalSteps} />
      <br />
      <section className="flex gap-10"></section>
      <div className="step-content">{renderStep()}</div>
    </div>
  );
}
