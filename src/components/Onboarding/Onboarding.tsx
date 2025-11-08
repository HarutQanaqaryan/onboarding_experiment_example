import { BookOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { allOnboardingSteps } from "../../constants/onboardingSteps";
import { useOnboarding } from "./hooks/useOnboarding";
import { useOnboardingSteps } from "./hooks/useOnboardingSteps";
import Joyride, { STATUS, type CallBackProps, type Status } from "react-joyride";
import { joyrideStyles, locale } from "./consts";
import { onboardingController } from "./services";

export const Onboarding = () => {
  const { config, isRunning, setIsRunning } = useOnboarding();
  const { steps } = useOnboardingSteps(config);
  const location = useLocation();

  const restartOnboarding = useCallback(() => {
    const pageKey = location.pathname.slice(1);

    const currPageSteps = allOnboardingSteps.find(
      (steps) => steps.key === pageKey
    );

    onboardingController.restartOnboarding({
      steps: currPageSteps?.steps ?? [],
      key: currPageSteps?.key,
    });
  }, [location.pathname]);

  const handleCallback = (data: CallBackProps) => {
    const { status } = data;

    const statuses: Status[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (statuses.includes(status) || !steps?.length) {
      onboardingController.stopOnboarding(config?.key);
      setIsRunning(false);
    }
  };

  return (
    <>
      {isRunning && (
        <Joyride
          callback={handleCallback}
          run={true}
          steps={steps}
          continuous
          showSkipButton
          disableOverlayClose
          disableScrolling
          styles={joyrideStyles}
          locale={locale}
        />
      )}
      <Button
        type="primary"
        icon={<BookOutlined />}
        onClick={restartOnboarding}
      >
        Начать обучение
      </Button>
    </>
  );
};
