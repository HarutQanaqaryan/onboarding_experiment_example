import { onboardingController } from "../services";

import type { OnboardingConfig } from "../types";

export const setupMutationObserver = ({
  steps,
  run,
}: OnboardingConfig): MutationObserver => {
  const observer = new MutationObserver((mutations) => {
    const renderedElems = steps?.filter((el) =>
      document.querySelector(el.target)
    );

    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        if (renderedElems?.length && !run) {
          onboardingController.startOnboarding({
            steps: renderedElems,
            isObserver: true,
          });
          observer.disconnect();
        }
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
  });

  return observer;
};
