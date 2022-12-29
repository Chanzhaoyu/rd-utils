const files = ["foo.txt ", ".bar", "   ", "baz.foo"];

// for loop
let a = [];
for (let file of files) {
  const fileName = file.trim();
  if (fileName) {
    const filePath = `~/cool_app/${fileName}`;
    a.push(filePath);
  }
}

console.log(a);

// reduce
let b = files.reduce((acc, file) => {
  const fileName = file.trim();
  if (fileName) {
    const filePath = `~/cool_app/${fileName}`;
    acc.push(filePath);
  }
  return acc;
}, []);

console.log(b);

// map
let c = files
  .map((file) => file.trim())
  .filter(Boolean)
  .map((fileName) => `~/cool_app/${fileName}`);

console.log(c);
