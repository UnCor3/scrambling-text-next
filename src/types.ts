export type OnIteration = (scrambledText: string) => void;

export type OnFinished = (scrambledText: string) => void;

export type Options = {
  onIteration: OnIteration;
  onFinished?: OnFinished;
  characters?: string[];
  preventGettingCalledMultipleTimes?: boolean;
};
