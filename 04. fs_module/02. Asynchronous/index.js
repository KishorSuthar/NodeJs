const path = require('path');
const fs = require('fs');

const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);
console.log(filePath);

/*
---------------------------------------------------------
1st. Write to a file asynchronously
---------------------------------------------------------
Method: fs.writeFile(path, data, options, callback)

✔ Required:
- path: The file path (string or buffer)
- data: The content to write (string or buffer)
- callback: A function to handle success or error after writing

🟡 Optional:
- options: Can be a string (encoding) or an object { encoding, mode, flag }
  Example: "utf-8" or { encoding: "utf-8", flag: "w" }

✅ Purpose:
- Writes data to a file without blocking the rest of the code
- Creates the file if it doesn’t exist, or overwrites if it does
- Handles result in the callback function

Uncomment the code below to use:
*/
// const writeFile = fs.writeFile(filePath, "This is intial data in Asynchronous", "utf-8", (err) => {
//   if (err) console.error("Error writing file:", err);
//   else console.log("File written successfully");
// });
// console.log(writeFile);
/*

---------------------------------------------------------
2nd. Read from a file asynchronously
---------------------------------------------------------
Method: fs.readFile(path, options, callback)

✔ Required:
- path: The file path to read from
- callback: A function to handle error or the file content

🟡 Optional:
- options: Encoding as a string ("utf-8") or an object { encoding, flag }
  If not given, returns a Buffer instead of readable text

✅ Purpose:
- Reads file contents without blocking the rest of the program
- Returns data via callback function (either as Buffer or string)

Uncomment the code below to use:
*/
// const readFile = fs.readFile(filePath, 'utf-8', (err, data) => {
//   if (err) console.error("Error reading file:", err);
//   else console.log("File read successfully : \n", data);
// });
/*

Note:
- Without 'utf-8', you'll get a Buffer (binary).
- You can convert Buffer to string using .toString()
- If 'utf-8' is given, it returns plain text directly
*/


/*
---------------------------------------------------------
3rd. Append to a file asynchronously
---------------------------------------------------------
Method: fs.appendFile(path, data, options, callback)

✔ Required:
- path: File to append to
- data: Data to append (string or buffer)
- callback: Function to handle the result (error/success)

🟡 Optional:
- options: Encoding or object { encoding, mode, flag }
  e.g., "utf-8" or { encoding: "utf-8", flag: "a" }

✅ Purpose:
- Appends content to an existing file
- Creates the file if it doesn't exist
- Runs in the background and uses callback for result

Uncomment the code below to use:
*/
// const appendFile = fs.appendFile(filePath, "\nThis is appended data", 'utf-8', (err) => {
//   if (err) console.error("Error appending file:", err);
// });
// const readFile = fs.readFile(filePath, 'utf-8', (err, data) => {
//   if (err) console.error("Error reading file:", err);
//   else console.log("File content after append : \n", data);
// });


/*
---------------------------------------------------------
5th. Rename a file asynchronously
---------------------------------------------------------
Method: fs.rename(oldPath, newPath, callback)

✔ Required:
- oldPath: Current file path
- newPath: New file path (name or location)
- callback: Function to handle the result (error/success)

❌ No optional parameters

✅ Purpose:
- Renames or moves a file
- Works in the background and reports via callback
- Replaces file at new path if it already exists

Uncomment the code below to use:
*/
// const newFileName = "renamed_test.txt";
// const newFilePath = path.join(__dirname, newFileName);
// const renameFile = fs.rename(filePath, newFilePath, (err) => {
//   if (err) console.error("Error renaming file:", err);
//   else console.log("File renamed successfully");
// });


/*
---------------------------------------------------------
6th. Delete a file asynchronously
---------------------------------------------------------
Method: fs.unlink(path, callback)

✔ Required:
- path: The file path to delete
- callback: A function to handle success or error

❌ No optional parameters

✅ Purpose:
- Permanently deletes a file without blocking execution
- Errors (e.g., file not found) are handled in the callback

Uncomment the code below to use:
*/
// const deleteFile = fs.unlink(filePath, (err) => {
//   if (err) console.error("Error deleting file:", err);
//   else console.log("File deleted successfully");
// });
