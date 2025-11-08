import { useState } from 'react';
import { Card, Row, Col, Button, Typography, Space } from 'antd';
import { useAutoOnboarding } from '../components/Onboarding/hooks/useAutoOnboarding';
import { HOME_ONBOARDING_STEPS } from '../constants/onboardingSteps';
import { InfoModal } from '../components/Modal/InfoModal';

const { Title } = Typography;

export const Page1 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useAutoOnboarding(HOME_ONBOARDING_STEPS);

  return (
    <div>
      <div id="page1_title">
        <Title level={1}>Заголовок</Title>
      </div>

      <Row gutter={[16, 16]} style={{ marginTop: 32 }}>
        <Col span={24}>
          <Card id="block" title="Блок">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>              
              <Button 
                id="open-modal-btn"
                type="primary" 
                size="large"
                onClick={() => setModalOpen(true)}
              >
                Открыть модальное окно
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>

      <InfoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};