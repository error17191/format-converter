export interface Parser {
  fromString(text: string): object;

  fromObject(data: object): string;
}