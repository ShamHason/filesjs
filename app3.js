//sham hason
//sofia kononenko

// Import the required modules
const fs = require("fs"); // For file system operations
const path = require("path"); // For working with file and directory paths

// Define the folder path where the text files are stored
const folderPath = path.join(__dirname, "/txts");

// Initialize a variable to store the combined content of the files
let combinedContent = "";

// Array containing the names of the files to be read
const fileNames = [
  "1.txt",
  "2.txt",
  "3.txt",
  "4.txt",
  "5.txt",
  "6.txt",
  "7.txt",
  "8.txt",
  "9.txt",
  "10.txt",
];

// Loop through each file in the array
for (let index = 0; index < fileNames.length; index++) {
  // Construct the full file path for the current file
  const currentFilePath = path.join(folderPath, fileNames[index]);

  // Check if the file exists at the specified path
  if (fs.existsSync(currentFilePath)) {
    // Read the file content, split it into lines, and store it in an array
    const fileLines = fs.readFileSync(currentFilePath, "utf-8").split("\n");

    // Extract the first (index + 1) lines and join them with newline characters
    combinedContent += fileLines.slice(0, index + 1).join("\n") + "\n";
  }
}

// Write the combined content to a new file named 'merged_output.txt'
fs.writeFileSync(
  path.join(folderPath, "merged_output.txt"), // Specify the output file path
  combinedContent.trim(), // Remove extra whitespace and write the content
  "utf-8" // Specify the encoding for the file
);

// Log a message indicating the operation is complete
console.log("Merged group of lines saved in merged_output.txt");
