import styled from "@emotion/styled";
import { useContext } from "react";
import Context from "../../context/darkContext";
import colors from "../../utils/colors";
import Container from "../Commons/Container";
import OverviewCards from "./OverviewCards";

const H2 = styled.h2`
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.isDark ? "#fff" : colors.textGray)};
`;

function Overview() {
  const { isDark } = useContext(Context);
  return (
    <Container>
      <H2 isDark={isDark}>Overview - Today</H2>
      <OverviewCards />
    </Container>
  );
}

export default Overview;
