import React from 'react';
import { Button, Form, Input,DatePicker, InputNumber } from 'antd';
const IncomeForm = () => {
    
const onFinish = (values) => {
  const incomeText = values.incomeText
  const incomeAmount = values.incomeAmount
  const incomeDate = values.dateString
  console.log({incomeText, incomeAmount, incomeDate})

};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const onChange = (date, dateString) => {
  console.log(date, dateString);
  
};
return (
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
      <Form.Item  name="incomeDate" label="Date">
        <DatePicker onChange={onChange}/>
      </Form.Item>
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
)
};
export default IncomeForm;