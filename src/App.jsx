import { useState } from "react";
import CreateAccountForm from "./components/CreateAccountForm ";
import BusinessInfo from "./components/BusinessInfo";
import TabNavigation from "./components/TabNavigation";
import backgroundImage from "./assets/bG.jpg"; // Import your background image

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  console.log(currentStep);

  const goNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const goBack = () => setCurrentStep((prevStep) => prevStep - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <CreateAccountForm goNext={goNext} />;
      case 1:
        return <BusinessInfo goBack={goBack} goNext={goNext} />;
      default:
        return <CreateAccountForm goNext={goNext} />;
    }
  };

  return (
    <>
      <div
        className="h-screen rounded-md flex items-center font-display justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image
      >
        <div className="bg-white rounded-md shadow-md w-3/4">
          <TabNavigation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          {renderStep()}
        </div>
      </div>
    </>
  );
}

export default App;
