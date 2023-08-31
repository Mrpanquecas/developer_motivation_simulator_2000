import React from "react";
import {
  Button,
  Hourglass,
  ProgressBar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import useCalculateMotivation from "../hooks/useCalculateMotivation";
import TFormInput from "../interfaces/MotivationForm.type";

const CalculateMotivationWindow = ({ data }: { data: TFormInput }) => {
  const { calculationProgress, flavorText, motivationResult, chanceOfSuccess } =
    useCalculateMotivation(data);
  console.log(data, "props");
  return (
    <>
      <div className="absolute z-10 h-full w-full backdrop-blur-sm" />
      <Window className="!absolute top-1/2 z-20 w-64 -translate-y-1/2 transform">
        <WindowHeader className="flex py-4">
          <div className="flex w-full items-center justify-between">
            results
            <Button disabled className="ml-2">
              <span className="close-icon">X</span>
            </Button>
          </div>
        </WindowHeader>
        <WindowContent className="flex flex-col items-center justify-center">
          {calculationProgress === 100 ? (
            <div>
              Overall Developer motivation:
              <p>{motivationResult}</p>
              Overall Change of Success:
              <p>{chanceOfSuccess} %</p>
            </div>
          ) : (
            <>
              {flavorText}
              <Hourglass className="my-4" size={32} />
              <ProgressBar
                id="progress_bar"
                className="h-full w-full"
                value={calculationProgress}
              />
            </>
          )}
        </WindowContent>
      </Window>
    </>
  );
};

export default CalculateMotivationWindow;
