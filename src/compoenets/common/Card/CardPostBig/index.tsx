import React from "react";
import { Sv } from "src/compoenets";
import { St } from "src/compoenets";
import styled from "styled-components";
import { CardPostProps } from "../interface";

const CardPostBig: React.FC<CardPostProps> = ({
  title = "title",
  content = "content",
  time = "May 20th 2020",
  hasImage = false,
  uuid,
}) => {
  return (
    <Container>
      <ContentContainer>
        <ContentWrapper>
          <Sv col>
            <St h1 g7>
              {title}
            </St>
            <St b2 g3>
              {content}
            </St>
          </Sv>
          <St c2 g3>
            {time}
          </St>
        </ContentWrapper>
      </ContentContainer>
      {hasImage && <Image></Image>}
    </Container>
  );
};

export default CardPostBig;

const Container = styled(Sv)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 243px;

  background: #ffffff;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
  border-radius: 5px;

  cursor: pointer;
`;

const ContentContainer = styled(Sv)`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
`;
const ContentWrapper = styled(Sv)`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  justify-content: space-between;
  width: 100%;
`;

const Image = styled.div`
  display: flex;
  flex: 1;
  background-image: url("https://picsum.photos/500/358");
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
