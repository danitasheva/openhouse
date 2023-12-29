export type CommunityType = {
  group: string;
  id: string;
  imgUrl: string;
  name: string;
  averagePrice?: number;
};
export type HomeType = {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: string;
};

export const homesInitState: HomeType[] = [];

export const initState: CommunityType[] = [];
