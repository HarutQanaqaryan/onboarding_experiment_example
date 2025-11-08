import type { OnboardingConfig, OnboardingSubscriber } from "../types";

class OnboardingController {
  private subscriber: OnboardingSubscriber | null = null;

  setOnboardingSubscriber(callback: OnboardingSubscriber) {
    this.subscriber = callback;
    return () => {
      if (this.subscriber === callback) {
        this.subscriber = null;
      }
    };
  }

  startOnboarding(config: OnboardingConfig) {
    if (this.subscriber) {
      this.subscriber({
        ...config,
      });
    }
  }

  stopOnboarding(key?: string) {
    if (key) {
      localStorage.setItem(key, "finished");
    }

    if (this.subscriber) {
      this.subscriber = null;
    }
  }

  restartOnboarding(config: OnboardingConfig) {
    const { key } = config;
    if (key) {
      localStorage.removeItem(key);
      this.startOnboarding(config);
    }
  }
}

export const onboardingController = new OnboardingController();
