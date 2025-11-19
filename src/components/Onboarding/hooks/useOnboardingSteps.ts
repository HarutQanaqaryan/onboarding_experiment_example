import { useMemo } from "react";

import { setupMutationObserver } from "../utils";

import type { OnboardingConfig, OnboardingStep } from "../types";

interface UseOnboardingSteps {
  steps: OnboardingStep[];
  mutationObserver?: MutationObserver;
}
export const useOnboardingSteps = (
  config: OnboardingConfig | null
): UseOnboardingSteps => {
  return useMemo(() => {
    if (!config) {
      return { steps: [] };
    }
    const { steps } = config;

    const renderedSteps = steps.filter((step) =>
      document?.querySelector(step.target)
    );

    const waitForElementSteps = steps.filter(
      (step) => step.waitForElement && !document?.querySelector(step.target)
    );

    const mutationObserver = setupMutationObserver({
      steps: waitForElementSteps,
    });

    return { steps: renderedSteps, mutationObserver };
  }, [config]);
};
