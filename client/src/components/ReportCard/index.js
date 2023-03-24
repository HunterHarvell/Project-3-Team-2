import { Card, Col, Row, Statistic } from "antd";
import { PlusOutlined, MinusOutlined  } from '@ant-design/icons';
import { useQuery } from "@apollo/client";
import { GET_PROFIT } from "../../utils/query";

const ReportCard = () => {
  const { data } = useQuery(GET_PROFIT);
  console.log(data)


  return (
  <div>
    <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Income"
          // value={incomeSum}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<PlusOutlined />}
          suffix="$"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Expense"
          // value={expenseSum}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<MinusOutlined />}
          suffix="$"
        />
      </Card>
    </Col>
  </Row>
  </div>
)};
export default ReportCard;