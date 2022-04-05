import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import React from "react";
import { St, Sv } from "src/compoenets";
import { HeaderMain } from "src/compoenets/layout/app/Header";
import colors from "src/styles/colors";
import { backgroundBlur } from "src/styles/filters";
import styled, { css } from "styled-components";

const TopNav: React.FC<{ url: string }> = ({ url }) => {
  const router = useRouter();
  const onClickNavButton = (endpoint: string) => {
    router.push(endpoint);
  };

  return (
    <div>
      <Container>
        <NavItemContainer onClick={() => onClickNavButton("/home")}>
          <St s1 white>
            LaDMasC
          </St>
        </NavItemContainer>
        <Sv row gx={20} act>
          <NavItemContainer onClick={() => onClickNavButton("/home")}>
            <St b1 white>
              Home
            </St>
            <NavItemBottomLine isSelected={url == "/home"} />
          </NavItemContainer>
          <NavItemContainer onClick={() => onClickNavButton("/articles")}>
            <St b1 white>
              Articles
            </St>
            <NavItemBottomLine isSelected={url == "/articles"} />
          </NavItemContainer>
          <NavItemContainer onClick={() => onClickNavButton("/donate")}>
            <St b1 white>
              Donate Me
            </St>
            <NavItemBottomLine isSelected={url == "/donate"} />
          </NavItemContainer>
          <NavItemContainer
            onClick={() => {
              window.open("https://github.com/LaDMasC");
            }}
          >
            <St b1 white>
              Github
            </St>
          </NavItemContainer>
          <LineY />
          <NavItemContainer>
            <SearchOutlined style={{ color: colors.white }} />
          </NavItemContainer>
        </Sv>
      </Container>
      <HeaderMain />
    </div>
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
  z-index: 10;

  ${backgroundBlur}
`;

const NavItemContainer = styled(Sv)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NavItemBottomLine = styled.div<{ isSelected?: boolean }>`
  width: 100%;
  height: 2px;
  top: -2px;
  background-color: ${(props) =>
    props.isSelected ? colors.primary : "rgba(0,0,0,0)"};
  transition-property: background-color;
  transition-duration: 0.5s;
  transition-delay: 0s;
`;

const LineY = styled.div`
  width: 0px;
  height: 20px;
  border: 1px solid ${colors.g0};
  /* transform: rotate(90deg); */
`;
