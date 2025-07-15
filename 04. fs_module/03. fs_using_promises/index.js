const path = require('path');
const fs = require('fs');

const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);
console.log(filePath);

/*
---------------------------------------------------------
1st. Write to a file asynchronously using fs.promises
---------------------------------------------------------
Method: fs.promises.writeFile(path, data, options)

✔ Required:
- path: The file path (string or buffer)
- data: The content to write (string or buffer)

🟡 Optional:
- options: A string (e.g., "utf-8") or an object { encoding, mode, flag }

✅ Purpose:
- Writes content to a file without blocking the thread
- Creates a new file if it doesn't exist, or overwrites if it does
- Returns a Promise, allowing .then() and .catch() for handling

Uncomment the code below to use:
*/
// fs.promises
//         .writeFile(filePath, "This is a test file file using fs promises.", "utf-8")
//         .then(console.log("File created successfully..."))
//         .catch((err) => console.error("Error writing file:", err));


/*
---------------------------------------------------------
2nd. Read from a file asynchronously using fs.promises
---------------------------------------------------------
Method: fs.promises.readFile(path, options)

✔ Required:
- path: The file path to read from

🟡 Optional:
- options: Encoding string like "utf-8" or an object with { encoding, flag }

✅ Purpose:
- Reads the file content asynchronously
- Returns a Promise that resolves with the file content (as Buffer or String)
- Use 'utf-8' to directly get string output instead of Buffer

Uncomment the code below to use:
*/
// fs.promises
//         .readFile(filePath, 'utf-8')
//         .then((data) => console.log("File content : \n", data))
//         .catch((err) => console.error("Error reading file:", err));

/*
Note:
- Without 'utf-8', the result will be a Buffer (binary format)
- Use .toString() on Buffer to convert it to readable text
- If 'utf-8' is passed, the result will be a readable string
*/


/*
---------------------------------------------------------
3rd. Append to a file asynchronously using fs.promises
---------------------------------------------------------
Method: fs.promises.appendFile(path, data, options)

✔ Required:
- path: The file path
- data: The content to append

🟡 Optional:
- options: Encoding or object like { encoding: "utf-8", flag: "a" }

✅ Purpose:
- Adds new data to the end of an existing file
- If the file doesn’t exist, it will be created
- Runs asynchronously and returns a Promise

Uncomment the code below to use:
*/
// fs.promises
//         .appendFile(filePath, "\nAppend one new line in this file", "utf-8")
//         .then(console.log("File append successfully..."))
//         .catch((err) => console.error("Error writing file:", err));


/*
---------------------------------------------------------
5th. Rename a file asynchronously using fs.promises
---------------------------------------------------------
Method: fs.promises.rename(oldPath, newPath)

✔ Required:
- oldPath: The current name/path of the file
- newPath: The new name/path to rename to

❌ No optional parameters

✅ Purpose:
- Renames or moves a file
- Returns a Promise, allowing async handling
- If the new file already exists, it will be overwritten

Uncomment the code below to use:
*/
// const newFileName = "renamed_test.txt";
// const newFilePath = path.join(__dirname, newFileName);
// fs.promises
//         .rename(filePath, newFilePath)
//         .then(() => console.log("File renamed successfully..."))
//         .catch((err) => console.error("Error renaming file:", err));


/*
---------------------------------------------------------
6th. Delete a file asynchronously using fs.promises
---------------------------------------------------------
Method: fs.promises.unlink(path)

✔ Required:
- path: The file path to delete

❌ No optional parameters

✅ Purpose:
- Deletes a file permanently
- Runs asynchronously and returns a Promise
- Throws an error if the file doesn’t exist

Uncomment the code below to use:
*/
// fs.promises
//         .unlink(filePath)
//         .then(() => console.log("File deleted successfully..."))
//         .catch((err) => console.error("Error deleting file:", err));


/*
=================================================================
💡 Tip: Avoid writing fs.promises repeatedly?
=================================================================
Instead of calling fs.promises again and again, you can directly import the promise-based version of fs like this:

→ const fs = require('fs/promises');

Now you can directly call:
→ fs.writeFile(...)
→ fs.readFile(...)
→ fs.appendFile(...)
→ fs.rename(...)
→ fs.unlink(...)

This makes your code cleaner and easier to maintain.
*/
