import Step1 from "Components/Step1";
import Step2 from "Components/Step2";
import { useState } from "react";
import { StyledPingPong } from "./StyledComponents";

const PingPong = (porps) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StyledPingPong>
      {
        [
          <Step1 setCurrentStep={setCurrentStep} />,
          <Step2 setCurrentStep={setCurrentStep} />,
        ][currentStep - 1]
      }{" "}
    </StyledPingPong>
  );
};

export default PingPong;
