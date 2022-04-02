import React from "react";
import { Sv } from "src/compoenets/styled-components/StyledDiv";
import { St } from "src/compoenets/styled-components/StyledText";
import { backgroundBlur } from "src/styles/filters";
import styled from "styled-components";

const HeaderMain: React.FC = () => {
  return (
    <Container act jct>
      <TextContainer>
        <St style={{ fontSize: 40 }} s1 white>
          Better Today, More Creative, Best Efficiency
        </St>
      </TextContainer>
    </Container>
  );
};

export default HeaderMain;

const Container = styled(Sv)`
  background-image: url("https://picsum.photos/1920/358");
  width: 100%;
  height: 358px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextContainer = styled.div`
  mix-blend-mode: hard-light;
`;
