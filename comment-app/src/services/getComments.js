const getComments = async () => {
  // const response = fetch("...")
  const comments = [
    { text: "...", author: "Name1", date: "27", votes: 5, replies: 3 },
    { text: "...", author: "Name2", date: "25", votes: 1, replies: 2 },
    { text: "...", author: "Name3", date: "100", votes: 2, replies: 0 },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
};

export default getComments;
