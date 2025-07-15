const path = require('path');
const fs = require('fs/promises'); // Importing promise-based version of fs

const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);
console.log(filePath);


/*
---------------------------------------------------------
1st. Write to a file using async/await with fs.promises
---------------------------------------------------------
- 'async' makes the function return a promise.
- Inside it, 'await' pauses execution until the promise settles.
- fs.writeFile writes data to a file asynchronously.
- If the file doesn't exist, it creates one. If it exists, it overwrites.
*/
// const writeData = async () => {
//         try {
//                 await fs.writeFile(filePath, "This is a test file file using fs promises async and await", "utf-8")
//                 console.log("File created successfully...");
//         } catch (err) {
//                 console.error("Error writing file:", err);
//         }
// }
// writeData();


/*
---------------------------------------------------------
2nd. Read from a file using async/await with fs.promises
---------------------------------------------------------
- fs.readFile reads the file content.
- 'await' pauses the function until content is fully read.
- 'utf-8' returns the data as a readable string.
*/
// const readData = async () => {
//         try {
//                 const data = await fs.readFile(filePath, "utf-8")
//                 console.log(data);
//         } catch (err) {
//                 console.error("Error writing file:", err);
//         }
// }
// readData();


/*
---------------------------------------------------------
3rd. Append data using async/await with fs.promises
---------------------------------------------------------
- fs.appendFile adds data to the end of the file.
- If the file does not exist, it creates one.
- 'await' ensures the append finishes before continuing.
*/
// const appendData = async () => {
//         try {
//                 await fs.appendFile(filePath, "\nAppend data in the files fs promises async and await", "utf-8")
//                 console.log("File append successfully...");
//         } catch (err) {
//                 console.error("Error writing file:", err);
//         }
// }
// appendData();


/*
---------------------------------------------------------
4th. Rename file using async/await with fs.promises
---------------------------------------------------------
- fs.rename renames or moves a file.
- It needs old and new file paths.
- 'await' waits until the renaming operation is complete.
*/
// const renameData = async () => {
//         try {
//                 const newFileName = "renamed_test.txt";
//                 const newFilePath = path.join(__dirname, newFileName);
//                 await fs.rename(filePath, newFilePath)
//                 console.log("File rename successfully...");
//         } catch (err) {
//                 console.error("Error writing file:", err);
//         }
// }
// renameData();


/*
---------------------------------------------------------
5th. Delete file using async/await with fs.promises
---------------------------------------------------------
- fs.unlink deletes a file.
- 'await' ensures the file is fully deleted before continuing.
- If the file doesn't exist, it throws an error caught in catch block.
*/
// const deleteFile = async () => {
//         try {
//                 await fs.unlink(newFilePath)
//                 console.log("File delete successfully...");
//         } catch (err) {
//                 console.error("Error writing file:", err);
//         }
// }
// deleteFile();
