const TabNavigation = ({ currentStep, setCurrentStep }) => {
    const tabs = ["Profile", "Business", "Additional Info"];
  
    return (
      <div className="flex w-full h-14 text-center mb-3">
        {tabs.map((tab, index) => (
          <div
            key={index}
            type="button"
            // onClick={() => setCurrentStep(index)}
            className={`w-full text-lg flex items-center justify-center font-semibold py-1 ${
              currentStep === index
                ? "bg-blue-400 text-white rounded-r-2xl"
                : currentStep === 1 && index === 0
                ? "bg-blue-400 text-white"
                : "bg-white text-gray-500 border-b"
            }`}
          >
            <div className={`${
                currentStep === index
                ? "bg-white text-blue-400 rounded-full px-3 mr-2"
                : currentStep === 1 && index === 0
                ? "bg-white text-blue-400 rounded-full px-3 mr-2"
                : "bg-blue-400 text-white rounded-full px-3 mr-2"
            }`}>{index + 1}</div>
            {tab}
          </div>
        ))}
      </div>
    );
  };
  
  export default TabNavigation;
  