const MOCK_DATA = [
  {
    name: "TODO",
    cards: [
      {
        title: "Card 1",
        content: "Hello baby...😎",
      },
      {
        title: "Card 2",
        content: "Hello baby...😎",
      },
      {
        title: "Card 3",
        content: "Hello baby...😎",
      },
      {
        title: "Card 4",
        content: "Hello baby...😎",
      },
    ],
    number_of_cards: 4,
  },
  {
    name: "IN PROGRESS",
    cards: [
      {
        title: "Card 1/I",
        content: "Hello baby - in progress...😎",
      },
      {
        title: "Card 2/I",
        content: "Hello baby - in progress...😎",
      },
      {
        title: "Card 3/I",
        content: "Hello baby - in progress...😎",
      },
      {
        title: "Card 4/I",
        content: "Hello baby - in progress...😎",
      },
      {
        title: "Card 5/I",
        content: "Hello baby - in progress...😎",
      },
    ],
    number_of_cards: 5,
  },
  {
    name: "TESTING",
    cards: [
      {
        title: "Card 1/T",
        content: "Hello baby - testing...😎",
      },
      {
        title: "Card 2/T",
        content: "Hello baby - testing...😎",
      },
      {
        title: "Card 3/T",
        content: "Hello baby - testing...😎",
      },
    ],
    number_of_cards: 3,
  },
  {
    name: "UAT",
    cards: [
      {
        title: "Card 1/U",
        content: "Hello baby - uat...😎",
      },
    ],
    number_of_cards: 3,
  },
];

const getAllData = (type) => {
  return {
    data: !type
      ? MOCK_DATA
      : MOCK_DATA.filter((data) => data.name.toLowerCase() === type),
    status: 200,
    method: "GET",
  };
};

const getFilteredData = (type) => {
  return {
    data: MOCK_DATA.filter((d) => d.name.toLowerCase() === type),
    status: 200,
    method: "GET",
  };
};

export default {
  getAllData,
  getFilteredData,
};
