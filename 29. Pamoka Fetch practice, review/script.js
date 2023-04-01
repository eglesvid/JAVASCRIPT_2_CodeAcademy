fetch("local.json") //lokaliai is failo galim pasiimt
  .then((response) => response.json())
  .then((people) => console.log(people));
