import { Button, Modal, Card, Space } from "antd";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EXPENSE } from "../../utils/query";
import { Link } from "react-router-dom";
const TotalExpenseModal = () => {
  const [open, setOpen] = useState(false);
  const { data } = useQuery(GET_EXPENSE);
  console.log(data);
  const userData = data?.singleUser || [];
  const expenseList = userData.expense;

  let originalExpenseArray = expenseList;
  const sum = originalExpenseArray?.reduce((accumulator, object) => {
    return accumulator + object.amount;
  }, 0);

  console.log(sum)

  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
      }}
    >
      <Button
        type="default"
        size="large"
        onClick={() => setOpen(true)}
        style={{ background: "#ffc34d", borderColor: "#ffc34d" }}
      >
        Click to see your total expense
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
            <h2>Total Expense =</h2>
            <h1>{sum}$</h1>
          </Card>
        </Space>
      </Modal>
    </div>
  );
};
export default TotalExpenseModal;
