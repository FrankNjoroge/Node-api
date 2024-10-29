// import fs from "fs";
import fs from "fs/promises";

//readFile() - async (callback)
// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

//readFilesync() - synchronous
// const data = fs.readFileSync("test.txt", "utf8");
// console.log(data);

//readFile - Promise.then()
// fs.readFile("test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//readFile - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// readFile();

// Write file
const writeFile = async () => {
  try {
    await fs.writeFile("file.txt", "Hello there dev");
  } catch (error) {
    console.log(error);
  }
};
// writeFile();

//append file
const appendFile = async () => {
  try {
    await fs.appendFile("file.txt", "\nThis is appended text");
  } catch (error) {
    console.log(error);
  }
};

appendFile();
