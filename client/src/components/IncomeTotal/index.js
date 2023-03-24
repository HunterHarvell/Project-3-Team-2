import { Button, Modal, Card, Space } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_INCOME } from "../../utils/query";
const TotalIncomeModal = () => {
  const [open, setOpen] = useState(false);
  const { data } = useQuery(GET_INCOME);
  console.log(data);
  const userData = data?.singleUser || [];
  console.log("client income data", userData);
  const incomeList = userData.income;

   let originalIncomeArray = incomeList;

  console.log("income array", originalIncomeArray);

  const sum = originalIncomeArray?.reduce((accumulator, object) => {
    return accumulator + object.amount;
  }, 0);

  console.log(sum);

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
            <h1>{sum}$</h1>
          </Card>
        </Space>
      </Modal>
    </div>
  );
};
export default TotalIncomeModal;
