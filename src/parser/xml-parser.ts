import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { Parser } from './parser';

export class XmlParser implements Parser {
  fromObject(data: object): string {
    const builder = new XMLBuilder({ format: true });
    return builder.build(data).trim();
  }

  fromString(text: string): object {
    const parser = new XMLParser();
    return parser.parse(text);
  }
}