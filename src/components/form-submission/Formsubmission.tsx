import { useState } from "react";
import { Button } from "../ui/Button";
import { FormTypes } from "./formType";
import Normal from "./Normal";
import Medium from "./Medium";
import Hard from "./Hard";

const Formsubmission = () => {
  const [activeState, setActiveState] = useState(FormTypes[0]);
  const renderItem = (activeState: string) => {
    switch (activeState) {
      case "NORMAL":
        return <Normal />;
      case "MEDIUM":
        return <Medium />;
      case "HARD":
        return <Hard />;
      default:
        return <Normal />;
    }
  };
  const renderName = (activeState: string) => {
    switch (activeState) {
      case "NORMAL":
        return "FormData";
      case "MEDIUM":
        return "Controlled Components";
      case "HARD":
        return "react-hook-form";
      default:
        return "FormData";
    }
  };
  return (
    <div className="h-full w-full">
      <div className="h-full w-full max-w-[1080px] mx-auto">
        <div className="h-20 flex items-center justify-between px-4 md:px-8">
          <div className="text-lg font-medium text-slate-800">
            {renderName(activeState)}
          </div>
          <div className="flex items-center">
            <Button
              variant={"link"}
              onClick={() => setActiveState(FormTypes[0])}
            >
              {FormTypes[0]}
            </Button>
            <Button
              variant={"link"}
              onClick={() => setActiveState(FormTypes[1])}
            >
              {FormTypes[1]}
            </Button>
            <Button
              variant={"link"}
              onClick={() => setActiveState(FormTypes[2])}
            >
              {FormTypes[2]}
            </Button>
          </div>
        </div>
        <div className="h-[calc(100%_-_80px)] overflow-auto px-4 md:px-8 py-8">
          {renderItem(activeState)}
        </div>
      </div>
    </div>
  );
};

export default Formsubmission;
