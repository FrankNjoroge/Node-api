import url, { fileURLToPath } from "url";

const urlString = "https://www.google.com/search?q=hello+world";
// URL object
const urlObj = new URL(urlString);

console.log(urlObj);

// url format()
console.log(url.format(urlObj));

// import meta url - file URL
console.log(import.meta.url);

// fileURLToPath - converts file Url to file path
console.log(fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params.get("q"));
