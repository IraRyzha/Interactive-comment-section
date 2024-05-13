const getComments = async () => {
  // const response = fetch("...")
  const comments = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum magni fuga commodi maiores adipisci reprehenderit deserunt rerum recusandae ea impedit, laborum sed.",
      author: {
        name: "MyProfile",
        photo: "https://api.lorem.space/image/face?w=150&h=150",
      },
      date: "yesterday",
      votes: 5,
      replies: [
        {
          id: 5,
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum magni fuga commodi maiores adipisci reprehenderit deserunt rerum recusandae ea impedit, laborum sed.",
          author: {
            name: "Name5",
            photo: "https://api.lorem.space/image/face?w=150&h=150&r=4",
          },
          date: "month ago",
          votes: 1,
          replies: [
            {
              id: 8,
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum magni fuga commodi maiores adipisci reprehenderit deserunt rerum recusandae ea impedit, laborum sed.",
              author: {
                name: "Name8",
                photo: "https://api.lorem.space/image/face?w=150&h=150&r=3",
              },
              date: "month ago",
              votes: 5,
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum magni fuga commodi maiores adipisci reprehenderit deserunt rerum recusandae ea impedit, laborum sed.",
      author: {
        name: "Name2",
        photo: "https://api.lorem.space/image/face?w=150&h=150&r=2",
      },
      date: "month ago",
      votes: 1,
      replies: [
        {
          id: 6,
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum magni fuga commodi maiores adipisci reprehenderit deserunt rerum recusandae ea impedit, laborum sed.",
          author: {
            name: "MyProfile",
            photo: "https://api.lorem.space/image/face?w=150&h=150",
          },
          date: "yesterday",
          votes: 5,
          replies: [],
        },
        {
          id: 7,
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum magni fuga commodi maiores adipisci reprehenderit deserunt rerum recusandae ea impedit, laborum sed.",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum magni fuga commodi maiores adipisci reprehenderit deserunt rerum recusandae ea impedit, laborum sed.",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum magni fuga commodi maiores adipisci reprehenderit deserunt rerum recusandae ea impedit, laborum sed.",
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
