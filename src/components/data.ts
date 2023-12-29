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

export const homesInitState: HomeType[] = [
  // {
  //   id: "cf39c3f3-182b-4471-a7cb-1ba27526dcfe",
  //   communityId: "56e20c00-805b-44b7-831f-f33e50edd54e",
  //   price: 400000.0,
  //   area: 950,
  //   type: "House",
  // },
  // {
  //   id: "5f499fad-20bc-467e-9c00-dd7b3bd96a97",
  //   communityId: "56e20c00-805b-44b7-831f-f33e50edd54e",
  //   price: 300000.0,
  //   area: 879,
  //   type: "Townhome",
  // },
  // {
  //   id: "a6dffafd-8ab3-4662-9345-c213101f708e",
  //   communityId: "56e20c00-805b-44b7-831f-f33e50edd54e",
  //   price: 500000.0,
  //   area: 1103,
  //   type: "House",
  // },
  // {
  //   id: "a49b5286-b7e9-4439-8cda-ac52266b098e",
  //   communityId: "1f161dcd-1221-4b0f-9ced-1498807cca55",
  //   price: 600000.0,
  //   area: 978,
  //   type: "House",
  // },
  // {
  //   id: "5323addf-7a43-4059-8327-e2033677e455",
  //   communityId: "1f161dcd-1221-4b0f-9ced-1498807cca55",
  //   price: 250000.0,
  //   area: 650,
  //   type: "Townhome",
  // },
  // {
  //   id: "7128688d-3085-42c8-a769-215503d9e73d",
  //   communityId: "1f161dcd-1221-4b0f-9ced-1498807cca55",
  //   price: 150000.0,
  //   area: 497,
  //   type: "Townhome",
  // },
  // {
  //   id: "01bb2f3e-309b-40bc-8db4-a95efe8148fd",
  //   communityId: "f5796140-887c-4cf0-b301-f96f3f4fc275",
  //   price: 459394.0,
  //   area: 403,
  //   type: "Condo",
  // },
  // {
  //   id: "7209a72c-3dea-4465-9363-bbf687efd8f5",
  //   communityId: "f5796140-887c-4cf0-b301-f96f3f4fc275",
  //   price: 685945.0,
  //   area: 567,
  //   type: "House",
  // },
  // {
  //   id: "12bacca5-e23e-4023-b04c-17ae5f5814fe",
  //   communityId: "a75e7343-23f3-45c4-a1a4-e88746b11ebf",
  //   price: 685964.45,
  //   area: 751,
  //   type: "House",
  // },
  // {
  //   id: "729b6a4a-c5f6-4463-b840-11246fe0210a",
  //   communityId: "86b42a15-1a35-4819-8646-6719ea275ecf",
  //   price: 768959.34,
  //   area: 805,
  //   type: "House",
  // },
  // {
  //   id: "f5394da4-d077-42d2-a007-c6efcb03b6f5",
  //   communityId: "7fccecd9-d246-4681-84e9-a92861999c20",
  //   price: 500000.0,
  //   area: 690,
  //   type: "House",
  // },
  // {
  //   id: "b7b68a2f-a860-40e1-908a-a9c3841cebf4",
  //   communityId: "a75e7343-23f3-45c4-a1a4-e88746b11ebf",
  //   price: 399000.0,
  //   area: 399,
  //   type: "Condo",
  // },
  // {
  //   id: "6e6a245a-df8e-4f9a-950b-a3ffd6632d15",
  //   communityId: "20244d9f-8147-4633-9b29-4c0ec5a762a9",
  //   price: 302010.0,
  //   area: 400,
  //   type: "Townhome",
  // },
  // {
  //   id: "d24af356-a2b4-4c98-be10-329a3d9edac2",
  //   communityId: "20244d9f-8147-4633-9b29-4c0ec5a762a9",
  //   price: 406849.0,
  //   area: 509,
  //   type: "Duplex",
  // },
];

export const initState: CommunityType[] = [
  // {
  //   id: "56e20c00-805b-44b7-831f-f33e50edd54e",
  //   name: "Bowness",
  //   imgUrl:
  //     "https://s3-ca-central-1.amazonaws.com/cdnarchitect/2017/11/24105657/bowness-park-rehabilitation.jpg",
  //   group: "North West",
  // },
  // {
  //   id: "20244d9f-8147-4633-9b29-4c0ec5a762a9",
  //   name: "Varsity",
  //   imgUrl:
  //     "https://www.bwalk.com/media/4883/varsitysq1-rimyreehal2017-16.jpg?anchor=center&mode=crop&width=768&height=350&rnd=132114728500000000",
  //   group: "North West",
  // },
  // {
  //   id: "1f161dcd-1221-4b0f-9ced-1498807cca55",
  //   name: "Auburn Bay",
  //   imgUrl:
  //     "https://www.brookfieldresidential.com/-/media/brp/alberta/calgary-and-area/calgary/auburn-bay/community-images/auburn-bay-lake-sunset-dock-brookfield-residential.jpg?h=1000&w=1600&la=en&hash=9D01761DA6F423AE008124B4A116D0182FF297D0",
  //   group: "South East",
  // },
  // {
  //   id: "7fccecd9-d246-4681-84e9-a92861999c20",
  //   name: "Seton",
  //   imgUrl:
  //     "https://www.brookfieldresidential.com/-/media/brp/alberta/calgary-and-area/calgary/seton/community-images/business-district-seton-calgary-alberta.jpg?h=1000&w=1062&la=en&hash=0FFD97F5384CD9825FCBB8C5775C92976D36C9CE",
  //   group: "South East",
  // },
  // {
  //   id: "f5796140-887c-4cf0-b301-f96f3f4fc275",
  //   name: "Eau Claire",
  //   imgUrl:
  //     "https://media-cdn.tripadvisor.com/media/photo-s/0d/c8/f0/d5/photo0jpg.jpg",
  //   group: "South West",
  // },
  // {
  //   id: "a75e7343-23f3-45c4-a1a4-e88746b11ebf",
  //   name: "Oakridge",
  //   imgUrl: "",
  //   group: "South West",
  // },
  // {
  //   id: "29c7292d-c04b-49c4-acd6-a1a8de952408",
  //   name: "Brentwood",
  //   imgUrl: "",
  //   group: "North West",
  // },
  // {
  //   id: "86b42a15-1a35-4819-8646-6719ea275ecf",
  //   name: "Rosedale",
  //   imgUrl:
  //     "https://calgary.newinfills.ca/media/original/rosedale-calgary-newinfills.jpg",
  //   group: "North West",
  // },
];
