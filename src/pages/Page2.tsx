import { Card, Row, Col, Typography } from "antd";

import { useAutoOnboarding } from "../components/Onboarding/hooks/useAutoOnboarding";
import { ABOUT_ONBOARDING_STEPS } from "../constants/onboardingSteps";

const { Title, Paragraph } = Typography;

export const Page2 = () => {
  useAutoOnboarding(ABOUT_ONBOARDING_STEPS);

  return (
    <div>
      <div id="page2_title">
        <Title level={1}>Заголовок</Title>
      </div>

      <Row gutter={[16, 16]} style={{ marginTop: 32 }}>
        <Col span={12}>
          <Card id="page2_block1" title="Блок 1">
            <div style={{ marginBottom: 16 }}>
              <Paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                pariatur quis vitae! Veritatis soluta aut dolorem suscipit
                blanditiis repudiandae impedit expedita distinctio
                necessitatibus recusandae voluptatum, commodi ducimus. Optio,
                velit exercitationem?
              </Paragraph>
            </div>
          </Card>
        </Col>

        <Col span={12}>
          <Card id="page2_block2" title="Блок 2">
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              atque, porro ducimus natus ad dolorem, dignissimos, alias at
              magnam blanditiis quo laboriosam unde consequatur vitae eum
              deleniti. Odit, reprehenderit ipsum.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
