import React from "react";

import { Modal, Button } from "antd";

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Закрыть
        </Button>,
      ]}
      width={700}
      height={"fit-content"}
      transitionName=""
    >
      <div id="modal-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magni
        eligendi numquam ducimus minima laboriosam at, qui minus labore. Eos
        delectus iusto aperiam consequuntur rerum quisquam magni atque et vel?
      </div>
    </Modal>
  );
};
