import { Parser } from './parser';
import { parse, stringify } from 'yaml';

export class YamlParser implements Parser {
  fromObject(data: object): string {
    return stringify(data).trim();
  }

  fromString(text: string): object {
    return parse(text);
  }
}