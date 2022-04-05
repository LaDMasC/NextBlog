import { Col } from "antd";
import { CardPostBig, CardPostSmall } from "src/compoenets";
import { CardPostProps } from "src/compoenets/common/Card/interface";

export const CardPostBigWrapper: React.FC<CardPostProps> = (props) => {
  return (
    <Col span={24}>
      <CardPostBig {...props} />
    </Col>
  );
};

export const CardPostSmallWrapper: React.FC<CardPostProps> = (props) => {
  return (
    <Col span={8} xs={24} sm={12} md={12} lg={12} xl={8}>
      <CardPostSmall {...props} />
    </Col>
  );
};
