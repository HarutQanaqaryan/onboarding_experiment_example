export const isOnboardingFinished = (key?: string): boolean =>
  key ? localStorage.getItem(key) === "finished" : false;
