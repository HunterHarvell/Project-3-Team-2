import { Button, Modal, Card, Space } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const TotalIncomeModal = () => {
  const [open, setOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <div
      style={{
        padding: 20,
        paddingBottom:50,
      }}
    
    >
      <Button
        type="default"
        size="large"
        onClick={() => setOpen(true)}
        style={{ background: "#ffc34d", borderColor: "#ffc34d",
      }}
      >
        Click to see your total income
      </Button>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        okText="close"
        cancelText="Show in reports"
        onCancel={() => setOpen(false)}
        okButtonProps={{
          disabled: false,
        }}
        cancelButtonProps={{
          disabled: false,
        }}
        width={1000}
        style={{
          padding: "10%",
        }}
      >
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
          }}
        >
          <Card size="large">
            <h2>Total Income =</h2>
            <h1>20,000 $</h1>
          </Card>
        </Space>
      </Modal>
    </div>
  );
};
export default TotalIncomeModal;
