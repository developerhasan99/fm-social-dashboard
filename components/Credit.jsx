import styled from "@emotion/styled";
import { useContext } from "react";
import colors from "../utils/colors";
import Container from "./Commons/Container";
import Context from "../context/darkContext";

const Div = styled.div`
  padding: 2rem 15px;
  text-align: center;
  color: ${(props) => (props.isDark ? colors.dsaturatedBlue : colors.textGray)};
`;

const A = styled.a`
  color: ${colors.facebook};
  &:hover {
    text-decoration: underline;
  }
`;

function Credit() {
  const { isDark } = useContext(Context);
  return (
    <Container>
      <Div isDark={isDark}>
        Challenge by{" "}
        <A
          target="_blank"
          rel="noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
        >
          Frontend Mentor
        </A>
        . Coded by{" "}
        <A href="https://github.com/developerhasan99">developerhasan99</A>.
      </Div>
    </Container>
  );
}

export default Credit;
