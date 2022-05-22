import styled from "@emotion/styled";
//Import Components
import Container from "../Commons/Container";
import Row from "../Commons/Row";
import Card from "./Card";

const Wrapper = styled.section`
  margin-top: -115px;
`;

function FollowerCards() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Card
            name="facebook"
            userName="nathanf"
            followersCount="1987"
            todayStat="Today 12"
            isUp={true}
          />
          <Card
            name="twitter"
            userName="nathanf"
            followersCount="1044"
            todayStat="Today 99"
            isUp={true}
          />
          <Card
            name="instagram"
            userName="nathanf"
            followersCount="11k"
            todayStat="Today 1099"
            isUp={true}
          />
          <Card
            name="youtube"
            userName="Nathan F."
            followersCount="8239"
            todayStat="Today 144"
            isUp={false}
          />
        </Row>
      </Container>
    </Wrapper>
  );
}

export default FollowerCards;
