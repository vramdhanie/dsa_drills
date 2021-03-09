const faker = require("faker");
const fs = require("fs");

const MAX = 200;

const customers = [];
for (let i = 1; i <= MAX; i++) {
  let card = faker.helpers.userCard();
  card.firstName = faker.name.firstName();
  card.lastName = faker.name.lastName();
  delete card.name;

  customers.push(card);
}

for (let i = 0; i < MAX / 5; i++) {
  const a = Math.floor(Math.random() * MAX);
  for (let j = 1; j < Math.floor(Math.random() * 10) + 2; j++) {
    const b = Math.floor(Math.random() * MAX);
    customers[b].lastName = customers[a].lastName;
  }
}

const frequencies = customers.reduce((acc, curr) => {
  if (acc[curr.lastName]) {
    acc[curr.lastName] += 1;
  } else {
    acc[curr.lastName] = 1;
  }
  return acc;
}, {});

console.log(frequencies);

fs.writeFile("data.json", JSON.stringify(customers), function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("File saved.");
});
