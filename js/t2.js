const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/posts",
];

const requests = urls.map((url) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title: "New Post",
      body: "Lorem ipsum dolor sit amet",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error))
);

Promise.all(requests)
  .then((responses) => {
    console.log("All requests resolved:", responses);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
