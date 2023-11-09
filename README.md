## Description
This project helps you to convert between those formats : JSON, XML and YAML  
It accepts an input file in one of the mentioned formats and produces another file representing the same structure but in another format.
## Installation
- `git clone`
- `npm install`
- `npm run build:cli`

## Basic Usage

- `cd /into/project/directory`
- `node dist/cli.js --input=your/input/file.json --output=out.xml`
- For a complete list of the command options use `node dist/cli.js -h`
- `io` directory is gitignored so it's ideal to put your input files in it and output into it

## Contribution  
If you want to add support to more formats, it's easy:  

- Create a class that implemented `Parser`
- Add an entry for it in `Format` enum
- Register it inside `make-converter.ts` file as following
```
export const makeConverter = (): Converter => {
  return new Converter(new Map<DataFormat, Parser>([
    [DataFormat.JSON, new JsonParser()],
    [DataFormat.XML, new XmlParser()],
    [DataFormat.YAML, new YamlParser()]
    //.. More parsers
  ]));
};
```  
- Make sure you didn't break something by running `npm run test` and ideally add tests for your Parser class.
- Use `npm run dev:cli` while developing for watching src.

## TODO  

- Move the converter module into a separate npm package
- Create another CLI package that uses converter package internally and to be more user-friendly by installing it globally and running it system-wide  
- Create another project that uses Converter to provide an HTTP api for conversion to be used by web / mobile apps
- Add support for more formats