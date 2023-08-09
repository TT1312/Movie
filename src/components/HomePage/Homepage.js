import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Upcoming from "./upcoming/Upcoming";

const Homepage = () => {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <Upcoming />
    </div>
  );
};

export default Homepage;
