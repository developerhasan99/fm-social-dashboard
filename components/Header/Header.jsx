import styled from "@emotion/styled";
import { useContext } from "react";
import Context from "../../context/darkContext";
import colors from "../../utils/colors";
import Container from "../Commons/Container";
import DarkModeBtn from "./DarkModeBtn";

const Wrapper = styled.div`
  padding: 35px 0 150px;
  transition: 0.3s ease-in-out;
  background-color: ${(props) =>
    props.isDark ? colors.topBgDark : colors.topBg};
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: block;
  }
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 30px;
  color: ${(props) => (props.isDark ? "#fff" : colors.texDark)};
`;

const SubHeading = styled.h2`
  margin: 5px 0;
  font-size: 15px;
  color: ${(props) => (props.isDark ? "#fff" : colors.texDark)};
`;

function Header() {
  const { isDark } = useContext(Context);
  return (
    <Wrapper isDark={isDark}>
      <Container>
        <Flex>
          <div>
            <Heading isDark={isDark}>Social Media Dashboard</Heading>
            <SubHeading isDark={isDark}>Total Followers: 23,004</SubHeading>
          </div>
          <DarkModeBtn />
        </Flex>
      </Container>
    </Wrapper>
  );
}

export default Header;
