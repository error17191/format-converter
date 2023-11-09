import { Format } from './format';
import { Parser } from './parser/parser';

export class Converter {
  constructor(private parsers: Map<Format, Parser>) {
  }

  convert(inputText: string, inputFormat: Format, outputFormat: Format): string {
    return this.getParser(outputFormat).fromObject(
      this.getParser(inputFormat).fromString(inputText)
    );
  }

  registerParser(format: Format, parser: Parser) {
    this.parsers.set(format, parser);
  }

  private getParser(format: Format): Parser {
    const parser = this.parsers.get(format);
    if (!parser) {
      throw new Error(`Couldn't find parser for ${format}, make sure it's registered`);
    }
    return parser;
  }
}