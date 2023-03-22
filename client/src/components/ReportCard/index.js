import { Avatar, Card, Col, Row } from "antd";
const { Meta } = Card;
const reportCard = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card
        title="Total Income"
        bordered={false}
        style={{
          width: 300,
          padding: 20,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card
        title="Total Income"
        bordered={false}
        style={{
          width: 300,
          padding: 20,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </Col>
  </Row>
);
export default reportCard;