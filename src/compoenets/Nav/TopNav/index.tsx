import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { St, Sv } from "src/compoenets";
import colors from "src/styles/colors";
import { backgroundBlur } from "src/styles/filters";
import styled, { css } from "styled-components";

const TopNav: React.FC = () => {
  return (
    <Container>
      <NavItemContainer>
        <St s1 white>
          LaDMasC
        </St>
      </NavItemContainer>
      <Sv row gx={16} act>
        <NavItemContainer isSelected>
          <St b1 white>
            Home
          </St>
        </NavItemContainer>
        <NavItemContainer>
          <St b1 white>
            Articles
          </St>
        </NavItemContainer>
        <NavItemContainer>
          <St b1 white>
            Github
          </St>
        </NavItemContainer>
        <NavItemContainer>
          <St b1 white>
            Donate Me
          </St>
        </NavItemContainer>
        <LineY />
        <NavItemContainer>
          <SearchOutlined style={{ color: colors.white }} />
        </NavItemContainer>
      </Sv>
    </Container>
  );
};

export default TopNav;

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 16px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.2);

  ${backgroundBlur}
`;

const NavItemContainer = styled(Sv)<{ isSelected?: false }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0px;
  border-bottom: ${(props) =>
    props.isSelected && `2px solid ${colors.primary}`};

  cursor: pointer;
`;

const LineY = styled.div`
  width: 20px;
  height: 2px;

  border: 1px solid #e5e5e5;
  transform: rotate(90deg);
`;
