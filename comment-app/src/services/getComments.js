const getComments = async () => {
  // const response = fetch("...")
  const comments = [
    {
      id: 1,
      text: "fhfghfghdfghreg",
      author: {
        name: "MyProfile",
        photo: "https://api.lorem.space/image/face?w=150&h=150",
      },
      date: "yesterday",
      votes: 5,
      replies: [
        {
          id: 10,
          text: "rtertretertrret",
          author: {
            name: "Name1",
            photo: "https://api.lorem.space/image/face?w=150&h=150&r=2",
          },
          date: "month ago",
          votes: 1,
          replies: [],
        },
      ],
    },
    {
      id: 2,
      text: "rtertretertrret",
      author: {
        name: "Name2",
        photo: "https://api.lorem.space/image/face?w=150&h=150&r=2",
      },
      date: "month ago",
      votes: 1,
      replies: [
        {
          id: 9,
          text: "fhfghfghdfghreg",
          author: {
            name: "MyProfile",
            photo: "https://api.lorem.space/image/face?w=150&h=150",
          },
          date: "yesterday",
          votes: 5,
          replies: [],
        },
        {
          id: 12,
          text: "rtertretertrret",
          author: {
            name: "Name2",
            photo: "https://api.lorem.space/image/face?w=150&h=150&r=2",
          },
          date: "month ago",
          votes: 2,
          replies: [],
        },
      ],
    },
    {
      id: 3,
      text: "bcbcbcbdfgzsdfsdf",
      author: {
        name: "Name3",
        photo: "https://api.lorem.space/image/face?w=150&h=150&r=3",
      },
      date: "2 weeks ago",
      votes: 11,
      replies: [],
    },
    {
      id: 4,
      text: "cvcxbcvbcvbfsdf",
      author: {
        name: "Name4",
        photo: "https://api.lorem.space/image/face?w=150&h=150&r=4",
      },
      date: "recently",
      votes: 25,
      replies: [],
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
};

export default getComments;
