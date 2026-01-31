const fs = require("fs");

// CREATE DIR
fs.mkdir("newdir", (err) => {
  console.log(err);
});

const dirPath = "./new-check/new-dir";

const checkExist = fs.existsSync(dirPath);

if (checkExist) {
  console.log("directory already exist");
} else {
  fs.mkdirSync(dirPath);
}
//or
fs.mkdir(dirPath, { recursive: true }, (err) => console.log(err)); // with recursive true won't throw error if dir exist and if not will create it
fs.mkdirSync(dirPath, { recursive: true }); // with recursive true won't throw error if dir exist and if not will create it

//------------------------

// READ DIR
fs.readdir("./new", (err, files) => {
  console.log(files);
  if (err) console.log(err);
});

try {
  // const files = fs.readdirSync("./new"); // will throw error because the directory not exist
  const files = fs.readdirSync("./");
  console.log(files);
} catch (error) {
  console.log(error);
}

//----------------------------

// DELETE DIR
fs.rmdir("newdir", (err) => console.log(err)); // will throw error because directory is not empty
fs.rmSync("./new-check", { recursive: true, force: true }); // will delete dir even if it's not empty
