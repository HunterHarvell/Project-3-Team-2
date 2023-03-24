import React from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

const ReportCard = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Income"
              value={1000}
              precision={2}
              valueStyle={{
                color: "#3f8600",
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
              value={300}
              precision={2}
              valueStyle={{
                color: "#cf1322",
              }}
              prefix={<MinusOutlined />}
              suffix="$"
            />
          </Card>
        </Col>
      </Row>
      <h1>Your Profit = 700$</h1>
    </div>
  );
};
export default ReportCard;
