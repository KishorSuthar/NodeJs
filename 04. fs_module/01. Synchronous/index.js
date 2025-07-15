const path = require('path');
const fs = require('fs');

const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);
console.log(filePath);

/*
---------------------------------------------------------
1st. Write to a file synchronously
---------------------------------------------------------
Method: fs.writeFileSync(path, data, options)

✔ Required:
- path: The file path (string or buffer)
- data: The content to write (string or buffer)

🟡 Optional:
- options: Can be a string (encoding) or an object { encoding, mode, flag }
  Example: "utf-8" or { encoding: "utf-8", flag: "w" }

✅ Purpose:
- Creates a new file if it doesn't exist
- Overwrites the file if it does exist
- Blocks further code execution until writing is complete

Uncomment the code below to use:
*/
// const writeFile = fs.writeFileSync(filePath, "Jay Dwarkadhish", "utf-8");
// console.log("File written successfully");


/*
---------------------------------------------------------
2nd. Read from a file synchronously
---------------------------------------------------------
Method: fs.readFileSync(path, options)

✔ Required:
- path: The file path to read from

🟡 Optional:
- options: Encoding as a string ("utf-8") or an object { encoding, flag }
  If not given, returns a Buffer instead of a readable string.

✅ Purpose:
- Reads entire content of a file
- Blocks the execution until file reading is complete

Uncomment the code below to use:
*/
// const readFile = fs.readFileSync(filePath, 'utf-8');
// console.log("File content: ", readFile);
// console.log("File content using toString() : ", readFile.toString());

/*
Note:
- Without 'utf-8', you'll get a Buffer (binary).
- You can convert Buffer to string using .toString()
- If 'utf-8' is given, it returns plain text directly
*/


/*
---------------------------------------------------------
3rd. Append to a file synchronously
---------------------------------------------------------
Method: fs.appendFileSync(path, data, options)

✔ Required:
- path: File to append to
- data: Data you want to append (string or buffer)

🟡 Optional:
- options: Encoding or object { encoding, mode, flag }
  e.g., "utf-8" or { encoding: "utf-8", flag: "a" }

✅ Purpose:
- Adds new content at the end of an existing file
- If the file doesn't exist, it will be created
- Synchronously blocks code execution while appending

Uncomment the code below to use:
*/
// const appendFile = fs.appendFileSync(filePath,"\nJay Ashapura Maa", 'utf-8');
// console.log("File appended successfully");
// const readFile = fs.readFileSync(filePath, 'utf-8');
// console.log("File content: \n",readFile);


/*
---------------------------------------------------------
5th. Rename a file synchronously
---------------------------------------------------------
Method: fs.renameSync(oldPath, newPath)

✔ Required:
- oldPath: Current file path
- newPath: New file path (name or location)

❌ No optional parameters

✅ Purpose:
- Renames a file or moves it to another location
- Replaces destination file if it already exists

Uncomment the code below to use:
*/
// const newFileName = "renamed_test.txt";
// const newFilePath = path.join(__dirname, newFileName);
// const renameFile = fs.renameSync(filePath, newFilePath)
// console.log("File renamed successfully")


/*
---------------------------------------------------------
6th. Delete a file synchronously
---------------------------------------------------------
Method: fs.unlinkSync(path)

✔ Required:
- path: The file path to delete

❌ No optional parameters

✅ Purpose:
- Permanently deletes a file from the filesystem
- Throws an error if the file doesn’t exist

Uncomment the code below to use:
*/
// const deleteFile = fs.unlinkSync(filePath);
// console.log("File deleted successfully");
