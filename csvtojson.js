import csv from 'csvtojson';
import fs from 'fs';

// Path to your CSV file
const csvFilePath = './shopping_trends_with_purchase_month.csv';

// Function to convert CSV to JSON
const convertCsvToJson = async () => {
  try {
    // Convert CSV to JSON
    const jsonArray = await csv().fromFile(csvFilePath);

    // Output JSON to a file
    const outputPath = './datainjsonformat.json';
    fs.writeFileSync(outputPath, JSON.stringify(jsonArray, null, 2), 'utf-8');

    console.log(`CSV has been successfully converted to JSON! File saved at: ${outputPath}`);
  } catch (err) {
    console.error('Error converting CSV to JSON:', err);
  }
};

// Run the function
convertCsvToJson();
