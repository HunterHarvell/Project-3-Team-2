import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_INCOME } from "../../utils/mutations";
import { Button, Form, Input, DatePicker, InputNumber } from "antd";
const IncomeForm = () => {
  const [addIncome, { error }] = useMutation(ADD_INCOME);
  console.log("income form error", error);
  const onFinish = async (values) => {
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
    console.log(mutationResponse);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <Form
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* <Form.Item name="incomeDate" label="Date">
          <DatePicker onChange={onChange} />
        </Form.Item> */}
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default IncomeForm;
