import { Col, Row } from "antd";
import { NextPage } from "next";
import React from "react";
import {
  CardPostBig,
  CardPostSmall,
  HeaderMain,
  LeftNav,
  Sv,
} from "src/compoenets";
import {
  CardPostBigWrapper,
  CardPostSmallWrapper,
} from "../../compoenets/layout/home/PostCardWrapper";

const HomePage: NextPage = () => {
  return (
    <>
      <Sv mt={40} />
      <Row>
        <Col span={5} xs={1} sm={2} md={3} lg={5}>
          <LeftNav />
        </Col>
        <Col span={14} xs={22} sm={20} md={18} lg={14}>
          <Row gutter={[40, 40]}>
            <CardPostBigWrapper hasImage />
            <CardPostSmallWrapper />
            <CardPostSmallWrapper hasImage />
            <CardPostSmallWrapper />
            <CardPostSmallWrapper />
            <CardPostSmallWrapper />
          </Row>
        </Col>
        <Col span={5} xs={1} sm={2} md={13} lg={5}></Col>
      </Row>
    </>
  );
};

export default HomePage;
