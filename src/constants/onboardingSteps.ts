import type { OnboardingConfig } from "../components/Onboarding/types";

export const HOME_ONBOARDING_STEPS: OnboardingConfig = {
  key: "page1",
  steps: [
    {
      target: "#page1_title",
      content: "Контент",
      title: "Заголовок",
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: "#block",
      content: "Контент",
      title: "Заголовок",
      placement: "top",
      disableBeacon: true,
    },
    {
      target: "#open-modal-btn",
      content: "Контент",
      title: "Заголовок",
      placement: "left",
      disableBeacon: true,
    },
    {
      target: "#modal-content",
      content: "Контент",
      title: "Заголовок",
      waitForElement: true,
      placement: "left",
      disableBeacon: true,
    },
  ],
};

export const ABOUT_ONBOARDING_STEPS: OnboardingConfig = {
  key: "page2",
  steps: [
    {
      target: "#page2_title",
      content: "Контент",
      title: "Заголовок",
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: "#page2_block1",
      content: "Контент",
      title: "Заголовок",
      placement: "left",
      disableBeacon: true,
    },
    {
      target: "#page2_block2",
      content: "Контент",
      title: "Заголовок",
      placement: "right",
      disableBeacon: true,
    },
  ],
};

export const allOnboardingSteps = [
  ABOUT_ONBOARDING_STEPS,
  HOME_ONBOARDING_STEPS,
];
