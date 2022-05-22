import Header from "../components/Header/Header";
import FollowerCards from "../components/FolllowerCards/FollowerCards";
import SeoHead from "../components/seo-head";
import { useState } from "react";
import styled from "@emotion/styled";
import Context from "../context/darkContext";
import Overview from "../components/Overview/Overview";
import Credit from "../components/Credit";

const Root = styled.div`
  transition: 0.3s ease-in-out;
  min-height: 100vh;
  background-color: ${(props) =>
    props.isDark ? `hsl(230, 17%, 14%)` : `hsl(0, 0%, 100%)`};
`;

export default function Home() {
  const [isDark, setDark] = useState(false);

  const handleClick = () => {
    setDark(!isDark);
    console.log("Iam clicked");
  };

  return (
    <Context.Provider value={{ isDark, handleClick }}>
      <Root isDark={isDark}>
        <SeoHead />
        <Header isDark={isDark} handleClick={handleClick} />
        <FollowerCards />
        <Overview />
        <Credit />
      </Root>
    </Context.Provider>
  );
}
