import { useMemo } from "react";
import { setupMutationObserver } from "../utils";
import type { OnboardingState, OnboardingStep } from "../types";

interface UseOnboardingSteps {
  steps: OnboardingStep[];
  mutationObserver?: MutationObserver;
}
export const useOnboardingSteps = (
  config: OnboardingState | null
): UseOnboardingSteps => {
  return useMemo(() => {
    if (!config) {
      return { steps: [] };
    }
    let mutationObserver = null;
    const { steps } = config;

    const renderedSteps = steps.filter((step) =>
      document?.querySelector(step.target)
    );

    const waitForElementSteps = steps.filter(
      (step) => step.waitForElement && !document?.querySelector(step.target)
    );

    mutationObserver = setupMutationObserver({
      steps: waitForElementSteps,
      run: false,
    });

    return { steps: renderedSteps, mutationObserver };
  }, [config]);
};
