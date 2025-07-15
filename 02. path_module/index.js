
const path = require('path');
console.log(__dirname);
console.log(__filename);

const filepath = path.join(__dirname,'data.txt');
console.log("Path Join : ",filepath);

const fileParse = path.parse(filepath);
console.log("Path Parse : ",fileParse);

const pathResolve =path.resolve(filepath);
console.log("Path Resolve : ",pathResolve);

const pathExtension = path.extname(filepath);
console.log("Path Extension : ",pathExtension);         

const pathBasename = path.basename(filepath);
console.log("Path Basename : ",pathBasename);

const pathDirname = path.dirname(filepath);
console.log("Path Dirname : ",pathDirname);

const pathSeparator = path.sep;
console.log("Path Separator : ",pathSeparator);