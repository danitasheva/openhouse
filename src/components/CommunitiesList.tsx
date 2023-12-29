import { useState, useEffect, memo } from "react";
import { ReactElement } from "react";
import { CommunityType, HomeType, homesInitState, initState } from "./data";
import Community from "./Community";

const COMMUNITIES_URL = "/communities.json";
const HOMES_URL = "/homes.json";

function CommunitiesList() {
  const [communities, setCommunities] = useState<CommunityType[]>(initState);
  const [homes, setHomes] = useState<HomeType[]>(homesInitState);

  let content: ReactElement | ReactElement[] = <p>Loading...</p>;

  const getAllCommunities = async () => {
    try {
      const res = await fetch(COMMUNITIES_URL);
      const communities = await res.json();
      setCommunities(communities);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllHomes = async () => {
    try {
      const res = await fetch(HOMES_URL);
      const homes = await res.json();
      setHomes(homes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCommunities();
    getAllHomes();
  }, []);

  communities.sort((a, b) => a.name.localeCompare(b.name));

  // Calculating average price per community
  const averagePricePerCommunity: Record<
    string,
    { totalPrice: number; count: number }
  > = {};

  homes.forEach((home: HomeType) => {
    if (!averagePricePerCommunity[home.communityId]) {
      averagePricePerCommunity[home.communityId] = { totalPrice: 0, count: 0 };
    }

    averagePricePerCommunity[home.communityId].totalPrice += home.price;
    averagePricePerCommunity[home.communityId].count++;
  });

  // Adding average price to the community array
  communities.forEach((communityItem) => {
    const { id } = communityItem;
    const { totalPrice, count } = averagePricePerCommunity[id] || {
      totalPrice: 0,
      count: 0,
    };

    if (count > 0) {
      communityItem.averagePrice = totalPrice / count;
    }
  });

  if (communities?.length) {
    content = communities.map((community) => {
      return (
        <Community
          key={community.id}
          id={community.id}
          image={community.imgUrl}
          name={community.name}
          location={community.group}
          averagePrice={community.averagePrice}
        />
      );
    });
  }

  const pageContent = <main className="main main--products">{content}</main>;

  return pageContent;
}

// export default CommunitiesList;

const MemoizedCommunitiesList = memo<typeof CommunitiesList>(CommunitiesList);

export default MemoizedCommunitiesList;
