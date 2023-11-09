import { Parser } from './parser';

export class JsonParser implements Parser {
  fromObject(data: object): string {
    return JSON.stringify(data, null, 2);
  }

  fromString(text: string): object {
    return JSON.parse(text);
  }
}