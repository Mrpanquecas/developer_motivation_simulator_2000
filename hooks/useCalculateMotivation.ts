import { useEffect, useState } from "react";
import getRandomNumber from "../utils/getRandomNumber";
import TFormInput from "../interfaces/MotivationForm.type";

const progressQuotes: string[] = [
  "Selling your data to third a party...",
  "Calculating, slowly...",
  "Turning the hamster wheel...",
  "Procrastinating...",
  "Any time now...",
  "Almost there...",
  "Loading... 56k modem connection style.",
  //"Motivation level: lower than Windows 95 system requirements.",
  "Buffering... 2005 YouTube video style.",
  "Loading... slower than a sloth's morning stretch routine.",
  "Loading... while we negotiate your data's resale value.",
];

const motivationVisualization: { [key: number]: string } = {
  5: "😄",
  4: "🙂",
  3: "🙃",
  2: "🙁",
  1: "😭",
};

const motivationVisualizationRange: number[] = [1, 2, 3, 4, 5];

const getMotivationVisualization = (motivationValue: number) =>
  motivationVisualizationRange.sort(
    (a, b) => Math.abs(motivationValue - a) - Math.abs(motivationValue - b),
  )[0];

const getAverage = (array: number[]) =>
  array.reduce((a, b) => a + b) / array.length;

type TCalculation = {
  flavorText: string;
  calculationProgress: number;
  chanceOfSuccess: number;
  motivationResult?: string;
};

const useCalculateMotivation = (data: TFormInput): TCalculation => {
  const [motivationResult, setMotivationResult] = useState<string>();
  const [chanceOfSuccess, setChanceOfSuccess] = useState<number>(0);
  const [calculationProgress, setCaculationProgress] = useState<number>(0);
  const [flavorText, setFlavorText] = useState<string>(
    "Calculating, this might take a while...",
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // get a random quote from quotes array
      setFlavorText(progressQuotes[getRandomNumber(0, progressQuotes.length)]);
      // get a random number to increase the progress bar length
      const randomProgress = getRandomNumber(5, 20);
      const newProgress =
        calculationProgress + randomProgress > 100
          ? 100
          : calculationProgress + randomProgress;
      // If progress is bigger than treshold, finish the "calculation"
      if (newProgress === 100) {
        const average = getAverage([
          data.caffeine,
          data.deadlines,
          data.interesting,
          data.scope,
        ]);
        setMotivationResult(
          motivationVisualization[getMotivationVisualization(average)],
        );
        console.log(average);
        setChanceOfSuccess(average * 10);
        clearInterval(interval);
      }
      setCaculationProgress(newProgress);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [calculationProgress]);

  return { flavorText, calculationProgress, motivationResult, chanceOfSuccess };
};

export default useCalculateMotivation;
