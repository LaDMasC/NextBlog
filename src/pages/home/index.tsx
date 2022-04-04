import { Col, Row } from "antd";
import { NextPage } from "next";
import React from "react";
import { CardPostBig, CardPostSmall, HeaderMain, Sv } from "src/compoenets";
import { CardPostProps } from "src/compoenets/Card/interface";

const HomePage: NextPage = () => {
  return (
    <>
      <Sv mt={40} />
      <Row>
        <Col span={5}></Col>
        <Col span={14}>
          <Row gutter={[40, 40]}>
            <CardPostBigWrapper />
            <CardPostSmallWrapper />
            <CardPostSmallWrapper hasImage />
            <CardPostSmallWrapper />
            <CardPostSmallWrapper />
            <CardPostSmallWrapper />
          </Row>
        </Col>
        <Col span={5}></Col>
      </Row>
    </>
  );
};

const CardPostBigWrapper: React.FC<CardPostProps> = (props) => {
  return (
    <Col span={24}>
      <CardPostBig {...props} />
    </Col>
  );
};

const CardPostSmallWrapper: React.FC<CardPostProps> = (props) => {
  return (
    <Col span={8}>
      <CardPostSmall {...props} />
    </Col>
  );
};

export default HomePage;
