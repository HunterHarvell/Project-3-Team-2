import { Button, Form, Input, InputNumber, DatePicker } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_EXPENSE } from "../../utils/mutations";
const ExpenseForm = () => {
  const [addExpense, { error }] = useMutation(ADD_EXPENSE);
  console.log("ADD EXPENSE ERROR", error);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    resetPage();

    console.log(values);
    const expenseText = values.expenseText;
    const expenseAmount = parseInt(values.expenseAmount);

    console.log({ expenseText, expenseAmount });

    const mutationResponse = await addExpense({
      variables: {
        text: expenseText,
        amount: expenseAmount,
      },
    });
    form.resetFields();
    console.log(mutationResponse);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const resetPage = () => {window.location.reload();} 
  return (
    <div>
      <h2>Log your expenses here</h2>
      <Form
      form={form}
        name="basic"
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
        <Form.Item name="expenseText" label="Expense description">
          <Input placeholder="ex) Sales from 1/1-2/2" />
        </Form.Item>
        <Form.Item name="expenseAmount" label="Amount in USD">
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
          <Button   style={{ background: "#ffc34d", borderColor: "#ffc34d" }}
            type="default"
            htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ExpenseForm;
