document.querySelector("#get").addEventListener("click", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const jsonData = await res.json();
  console.log(jsonData);
});

document.querySelector("#post").addEventListener("click", async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: "asdfasetbrsh",
      author: "Marius",
    }),
  };

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );

  const jsonData = await res.json();
  console.log(jsonData);
});
