import { docopt } from 'docopt';
import fs from 'fs';
import { makeConverter } from './make-converter';
import { Format } from './format';
import path from 'path';

const guessExtension = (filename: string) => {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2).toUpperCase();
};
const validateFormat = (format: string) => {
  if (!Object.keys(Format).includes(format)) {
    throw new Error(`Unsupported format: ${format}`);
  }
};
const doc = fs.readFileSync(path.join(__dirname, 'cli.txt'), { encoding: 'utf8' });
const args = docopt(doc, {
  version: '0.1.1rc'
});
const inputPath = args['--input'];
let inputFormat = args['--input-format'];
let outputPath = args['--output'];
let outputFormat = args['--output-format'];

if (!inputPath || !fs.existsSync(inputPath)) {
  console.error('Error: Input file does not exist.');
  process.exit(1);
}
if (!outputPath && !outputFormat) {
  console.error('Error: Output location or format should be specified.');
  process.exit(1);
}
inputFormat = inputFormat ? inputFormat.toUpperCase() : guessExtension(inputPath);
outputFormat = outputFormat ? outputFormat.toUpperCase() : guessExtension(outputPath);
validateFormat(inputFormat);
validateFormat(outputFormat);
if (inputFormat === outputFormat) {
  console.error('Error: Input and output formats are the same. No conversion is needed.');
  process.exit(1);
}
outputPath = outputPath ? outputPath : inputPath.replace(/\.[^/.]+$/, '') + `.${outputFormat?.toLowerCase()}`;


// Converter instantiation and usage
const converter = makeConverter();

try {
  // Read the file
  const inputText = fs.readFileSync(inputPath, 'utf8');
  // Perform conversion
  const convertedText = converter.convert(inputText, inputFormat as Format, outputFormat as Format);
  // Save the file
  fs.writeFileSync(outputPath, convertedText);
  console.log(`Conversion complete: '${outputPath}'`);
} catch (error) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  } else {
    throw error;
  }
}
