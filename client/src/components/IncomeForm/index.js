import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_INCOME } from "../../utils/mutations";
import { Button, Form, Input, InputNumber, Modal } from "antd";
const IncomeForm = () => {
  const [addIncome, { error }] = useMutation(ADD_INCOME);
  console.log("income form error", error);

  const [form] = Form.useForm();
  
  const onFinish = async (values) => {
    resetPage();
    console.log(values);
    const incomeText = values.incomeText;
    const incomeAmount = parseInt(values.incomeAmount);

    console.log({ incomeText, incomeAmount });

    const mutationResponse = await addIncome({
      variables: {
        text: incomeText,
        amount: incomeAmount,
      },
    });
    form.resetFields();
    console.log(mutationResponse);
  };

  const resetPage = () => {
    window.location.reload();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h2>Log your Incomes here</h2>
      <Form
        form={form}
        name="basic"
        // layout="vertical"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          paddingTop: 20,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="incomeText" label="Income description">
          <Input placeholder="ex) Sales from 1/1-2/2" />
        </Form.Item>
        <Form.Item name="incomeAmount" label="Amount in USD">
          <InputNumber
            placeholder="0.00"
            style={{ width: 200 }}
            defaultValue=""
            min="0"
            max="100000000000000000"
            step="0.01"
            stringMode
            addonAfter="$"
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            style={{ background: "#ffc34d", borderColor: "#ffc34d" }}
            type="Default"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default IncomeForm;
