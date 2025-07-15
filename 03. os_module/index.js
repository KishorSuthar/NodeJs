const os = require('os'); // Import the built-in 'os' module to access system information

const platformInfo = os.platform(); // Get the operating system platform (e.g., 'win32', 'linux')
console.log(`Operating System Platform: ${platformInfo}`);

const userInfo = os.userInfo(); // Get information about the current user
console.log("User Information : ", userInfo);

const cpuArchitecture = os.arch(); // Get the CPU architecture (e.g., 'x64', 'arm')
console.log(`CPU Architecture: ${cpuArchitecture}`);

const freeMemory = os.freemem(); // Get the amount of free system memory in bytes
console.log(`Free Memory: ${freeMemory} bytes`);

const totalMemory = os.totalmem(); // Get the total amount of system memory in bytes
console.log(`Total Memory: ${totalMemory} bytes`);

const uptime = os.uptime(); // Get the system uptime in seconds
console.log(`System Uptime: ${uptime} seconds`);

const homeDir = os.homedir(); // Get the current user's home directory
console.log(`Home Directory: ${homeDir}`);

const hostName = os.hostname(); // Get the hostname of the system
console.log(`Host Name: ${hostName}`);

const networkInterfaces = os.networkInterfaces(); // Get a list of network interfaces
console.log("Network Interfaces: ", networkInterfaces);

const cpu = os.cpus(); // Get detailed information about each CPU/core
console.log("CPU Information: ", cpu);

const tempDir = os.tmpdir(); // Get the default directory for temporary files
console.log(`Temporary Directory: ${tempDir}`);

const type = os.type(); // Get the operating system name (e.g., 'Windows_NT', 'Linux')
console.log(`Operating System Type: ${type}`);
