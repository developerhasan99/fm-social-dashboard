import styled from "@emotion/styled";
import { useContext } from "react";
import Context from "../../context/darkContext";
import Col from "../Commons/Col";
import colors from "../../utils/colors";
import icons from "../../utils/icons";
import Stat from "../Commons/Stat";

const Card = styled.a`
  display: block;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  background: ${(props) => (props.isDark ? colors.cardBgDark : colors.cardBg)};
  &:hover {
    background: ${(props) => (props.isDark ? "#353a55" : "#e2e3f0")};
  }
`;

const H3 = styled.h3`
  margin-top: 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.isDark ? colors.dsaturatedBlue : colors.textGray)};
  &::after {
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    background-image: url(${(props) => icons[props.name]});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: flex-end;
  transition: 0.3s ease-in-out;
`;

const H4 = styled.h4`
  margin: 0;
  font-size: 40px;
  line-height: 0.7;
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.isDark ? "#fff" : colors.texDark)};
`;

function OverviewCard({ name, title, count, isUp, stat }) {
  const { isDark } = useContext(Context);
  return (
    <Col>
      <Card href="#" isDark={isDark}>
        <H3 isDark={isDark} name={name}>
          {title}
        </H3>
        <Flex>
          <H4 isDark={isDark}>{count}</H4>{" "}
          <Stat style={{ margin: "0" }} isUp={isUp} todayStat={stat} />
        </Flex>
      </Card>
    </Col>
  );
}

export default OverviewCard;
