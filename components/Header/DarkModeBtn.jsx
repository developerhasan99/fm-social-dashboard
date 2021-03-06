import styled from "@emotion/styled";
import { useContext } from "react";
//Import Context
import Context from "../../context/darkContext";
import colors from "../../utils/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  @media (max-width: 767px) {
    margin-top: 1.5rem;
    padding-top: 0.5rem;
    border-top: #7773 1px solid;
    justify-content: space-between;
  }
`;

const Label = styled.p`
  font-weight: 700;
  color: hsl(228, 12%, 44%);
  ${(props) =>
    props.isDark &&
    `
    color: hsl(0, 0%, 100%)
  `}
`;

const Button = styled.button`
  border: 0;
  background: ${colors.bgGray};
  height: 24px;
  width: 45px;
  border-radius: 20px;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  ${(props) =>
    props.isDark &&
    `
    background: linear-gradient(to left ,hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    `}
`;

const Dot = styled.span`
  background-color: #fff;
  height: 20px;
  width: 20px;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  ${(props) =>
    props.isDark &&
    `
    background-color: hsl(230, 17%, 14%);
    left: 23px;
  `}
`;

function DarkModeBtn() {
  const { isDark, handleClick } = useContext(Context);
  return (
    <Wrapper>
      <Label isDark={isDark}>Dark Mode</Label>
      <Button
        onClick={handleClick}
        isDark={isDark}
        aria-label="Toggle DarkMode"
      >
        <Dot isDark={isDark}></Dot>
      </Button>
    </Wrapper>
  );
}

export default DarkModeBtn;
