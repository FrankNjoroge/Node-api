import path from "path";

const filePath = "/dir1/dir2/text.txt";

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

//parse()
console.log(path.parse(filePath));

// filename in es
const __filename = path.fileURLToPath(import.meta.url);
console.log(__filename);

//dirname in es
const __dirname = path.dirname(__filename);
console.log("DIRNAME:", __dirname);

// join() - concatenates args into a path
const filePath2 = path.join(__dirname, "dirname1", "dirname2", "test.txt");
console.log(filePath2);

// resolve() - similar to join only that the path will always be absolute
const filePath3 = path.resolve(__dirname, "dirname1", "dirname2", "test.txt");
console.log(filePath3);
