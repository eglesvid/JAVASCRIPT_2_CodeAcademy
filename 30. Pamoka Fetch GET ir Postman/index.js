fetch("https://529a0ee5-937c-454f-9da5-ef44108883e9.mock.pstmn.io/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

fetch("https://529a0ee5-937c-454f-9da5-ef44108883e9.mock.pstmn.io/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", //accept rasom tada kokios info tikimes, o kai rasom type, mes nurodom, kad siunciam json
  },
  body: JSON.stringify({
    test: "test",
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
