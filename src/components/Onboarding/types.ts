export interface OnboardingStep {
  target: string;
  content: string;
  title?: string;
  waitForElement?: boolean;
  placement?: "top" | "bottom" | "left" | "right" | "center";
  disableBeacon?: boolean;
}

export interface OnboardingConfig {
  key?: string;
  steps: OnboardingStep[];
  run?: boolean;
  isObserver?: boolean;
}

export interface OnboardingState {
  steps: OnboardingStep[];
  key?: string;
}

export interface OnboardingConfig {
  key?: string;
  steps: OnboardingStep[];
  run?: boolean;
  isObserver?: boolean;
}

export type OnboardingSubscriber = (config: OnboardingConfig) => void;
