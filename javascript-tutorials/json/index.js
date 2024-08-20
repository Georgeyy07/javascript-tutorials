const names = ["spongebob", "patrick", "squidward", "sandy"];

const jsonString = JSON.stringify(names);

console.log(names);

const jsonPerson = `[{"name": "spongebob", "age": 30, "isEmployed": true
}]`

console.log(jsonPerson)

const parsedData = JSON.parse(jsonPerson)

console.log(parsedData)
