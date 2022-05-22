import styled from "@emotion/styled";
import { useContext } from "react";
//Import Context
import Context from "../../context/darkContext";
//Import Utils
import colors from "../../utils/colors";
//Import Components
import Col from "../Commons/Col";
import Username from "./Username";
import FollowersCount from "./FollowersCount";
import Followers from "./Followers";
import Stat from "../Commons/Stat";

const A = styled.a`
  display: block;
  cursor: pointer;
  padding: 15px;
  background: ${(props) => (props.isDark ? colors.cardBgDark : colors.cardBg)};
  text-align: center;
  border-radius: 5px;
  border-top: ${(props) => colors[props.name]} 4px solid;
  position: relative;
  margin-bottom: 1.5rem;
  transition: 0.3s ease-in-out;
  &:hover {
    background: ${(props) => (props.isDark ? "#353a55" : "#e2e3f0")};
  }
  ${(props) =>
    props.name === "instagram" &&
    `
    padding-top: 20px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-image: ${colors[props.name]};
    }
  `}
`;

function Card({ name, userName, followersCount, todayStat, isUp }) {
  const { isDark } = useContext(Context);

  return (
    <Col>
      <A href="#" name={name} isDark={isDark}>
        <Username name={name} username={userName} />
        <FollowersCount followersCount={followersCount} />
        <Followers name={name} />
        <Stat isUp={isUp} todayStat={todayStat} />
      </A>
    </Col>
  );
}

export default Card;
