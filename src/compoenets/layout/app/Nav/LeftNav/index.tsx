import React from "react";
import { Sv } from "src/compoenets/common/styled-components/StyledDiv";
import { St } from "src/compoenets/common/styled-components/StyledText";
import colors from "src/styles/colors";
import styled from "styled-components";

const LeftNav: React.FC = () => {
  return (
    <Container>
      <NavTitle>
        <St s3 g5>
          CATEGORIES
        </St>
      </NavTitle>
      <NavItem isSelected s3>
        All Categories
      </NavItem>
      <NavItem s3>Development</NavItem>
      <NavItem s3>Project</NavItem>
      <NavItem s3>Small Talk</NavItem>
    </Container>
  );
};

export default LeftNav;

const Container = styled(Sv)`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 4px 0px;
`;

const NavTitle = styled(Sv)`
  padding: 6px 16px;
  border-radius: 6px;
`;

const NavItem = styled(St)`
  padding: 8px 16px;
  border-radius: 6px;
  background-color: ${(props) => (props.isSelected ? "#BBF7D0" : "#fff")};
  color: ${(props) => (props.isSelected ? colors.primary : colors.g2)};
  cursor: pointer;
  :hover {
    background-color: #bbf7d0;
    color: ${colors.primary};
    transition-property: background-color color;
    transition-duration: 0.3s;
    transition-delay: 0s;
  }
`;
