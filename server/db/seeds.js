use todo_hub;
db.dropDatabase();

db.list.insertMany([
  {
    title: "Stuff"
  },
  {
    title: "Other Stuff"
  },
  {
    title: "Less Important Stuff"
  }
]);
