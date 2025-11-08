import { useEffect } from "react";
import { onboardingController } from "../services";
import type { OnboardingConfig } from "../types";

export const useAutoOnboarding = (config: OnboardingConfig) => {
  useEffect(() => {
   onboardingController.startOnboarding(config);
  }, [config]);
};
