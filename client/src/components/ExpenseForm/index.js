import React from "react";
import { Button, Form, Input, InputNumber, DatePicker } from "antd";
// import { useState } from "react";
const App = () => {
  const onFinish = (values) => {
    console.log({ values });
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
      layout="vertical"
      name="basic"
      style={{
        maxWidth: 600,
        padding: 20,
        alignItems: "center",
      }}
    >
      <Form.Item name={"createdAt"} label="Date">
        <DatePicker onChange={onChange} />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Expense Description is Required",
          },
        ]}
        name={"text"}
        label="Expense description"
      >
        <Input placeholder="ex) Utilities" />
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
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
