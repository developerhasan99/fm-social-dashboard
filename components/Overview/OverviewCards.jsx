import Row from "../Commons/Row";
import OverviewCard from "./OverviewCard";

function OverviewCards() {
  return (
    <Row>
      <OverviewCard
        name="facebook"
        title="Page Views"
        count="87"
        isUp={true}
        stat="3%"
      />
      <OverviewCard
        name="facebook"
        title="Likes"
        count="52"
        isUp={false}
        stat="2%"
      />
      <OverviewCard
        name="instagram"
        title="Likes"
        count="5462"
        isUp={true}
        stat="2257%"
      />
      <OverviewCard
        name="instagram"
        title="Profile Views"
        count="52k"
        isUp={true}
        stat="1375%"
      />
      <OverviewCard
        name="twitter"
        title="Retweets"
        count="117"
        isUp={true}
        stat="303%"
      />
      <OverviewCard
        name="twitter"
        title="Likes"
        count="507"
        isUp={true}
        stat="553%"
      />
      <OverviewCard
        name="youtube"
        title="Likes"
        count="107"
        isUp={false}
        stat="19%"
      />
      <OverviewCard
        name="youtube"
        title="Total Views"
        count="1407"
        isUp={false}
        stat="12%"
      />
    </Row>
  );
}

export default OverviewCards;
