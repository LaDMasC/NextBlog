import { Col, Row } from "antd";
import { NextPage } from "next";
import React from "react";
import { CardPostBig, HeaderMain, Sv } from "src/compoenets";

const HomePage: NextPage = () => {
  return (
    <>
      <Sv mt={40} />
      <Row>
        <Col span={5}></Col>
        <Col span={14}>
          <Sv gy={40} col>
            <CardPostBig />
            <CardPostBig hasImage />
            <CardPostBig />
            <CardPostBig />
          </Sv>
        </Col>
        <Col span={5}></Col>
      </Row>
    </>
  );
};

export default HomePage;
