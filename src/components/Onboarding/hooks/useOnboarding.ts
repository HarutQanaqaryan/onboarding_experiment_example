import { useState, useEffect, useCallback, useRef } from "react";

import { onboardingController } from "../services";
import { isOnboardingFinished } from "../utils";

import { useOnboardingSteps } from "./useOnboardingSteps";

import type { OnboardingConfig } from "../types";

export const useOnboarding = () => {
  const [onboardingState, setOnboardingState] =
    useState<OnboardingConfig | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const onboardingRef = useRef<number>(null);

  const { steps, mutationObserver } = useOnboardingSteps(onboardingState);

  const handleOnboardingConfig = useCallback(
    (config: OnboardingConfig) => {
      if (!isOnboardingFinished(config?.key) || config?.isObserver) {
        onboardingRef.current = setTimeout(() => {
          setOnboardingState(config);
          setIsRunning(true);
        }, 100);
      }
    },
    [isRunning]
  );

  useEffect(() => {
    onboardingController.setOnboardingSubscriber(handleOnboardingConfig);
  }, [handleOnboardingConfig]);

  const onFinish = useCallback(() => {
    setIsRunning(false);
    mutationObserver?.disconnect();
    onboardingController.stopOnboarding(onboardingState?.key);
    if (onboardingRef.current) {
      clearTimeout(onboardingRef.current);
    }
  }, [mutationObserver, onboardingState?.key]);

  return {
    isRunning,
    steps,
    onFinish,
  };
};
