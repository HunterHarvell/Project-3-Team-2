
import { Button, Form, Input, InputNumber, DatePicker } from "antd";
import { useState } from "react";
const App = () => {
  const [form] = Form.useForm();
  
  return (
    <Form
      layout="vertical"
      form={form}
      style={{
        maxWidth: 600,
        padding: 20,
        alignItems: "center",
      }}
    >
      
      <Form.Item label="Date">
      <DatePicker />
      </Form.Item>
      <Form.Item label="Income description">
        <Input placeholder="ex) Utilities" />
      </Form.Item>
      <Form.Item label="Amount in USD">
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
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default App;
