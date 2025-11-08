import { useState, useEffect, useCallback, useRef } from "react";
import { useOnboardingSteps } from "./useOnboardingSteps";
import { isOnboardingFinished } from "../utils";
import { onboardingController } from "../services";
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
        }, 10);
      }
    },
    [isRunning]
  );

  useEffect(() => {
    const unsubscribe = onboardingController.setOnboardingSubscriber(
      handleOnboardingConfig
    );

    return () => {
      unsubscribe();
      mutationObserver?.disconnect();
      if (onboardingRef.current) {
        clearTimeout(onboardingRef.current);
      }
    };
  }, [handleOnboardingConfig, mutationObserver]);

  return {
    config: onboardingState,
    isRunning,
    steps,
    setIsRunning,
  };
};
