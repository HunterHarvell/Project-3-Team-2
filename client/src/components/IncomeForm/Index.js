import React from "react";
import { Button, Form, Input, DatePicker, InputNumber } from "antd";
const IncomeForm = () => {
  const onFinish = (values) => {
    console.log({ values });
    // const incomeText = values.incomeText;
    // const incomeAmount = values.incomeAmount;
    // const incomeDate = values.incomeDate.dateString;
    // console.log({ incomeText, incomeAmount, incomeDate });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item name={"createdAt"} label="Date">
        <DatePicker onChange={onChange} />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Income Description is Required",
          },
        ]}
        name={"text"}
        label="Income description"
      >
        <Input placeholder="ex) Sales from 1/1-2/2" />
      </Form.Item>
      <Form.Item name={"amount"} label="Amount in USD">
        <InputNumber
          placeholder="0.00"
          style={{ width: 200 }}
          defaultValue=""
          min="0"
          max="100000000000000000"
          step="0.01"
          //   onChange={onChange}
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default IncomeForm;
